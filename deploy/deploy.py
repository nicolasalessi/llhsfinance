#!/usr/bin/env python3

'''
S3/CloudFront deployment script

Author: Nicolas Alessi
Date:   October 27, 2025
'''

import argparse
import json
import time
import subprocess
import sys
import textwrap3
import boto3
import logging
import colorlog


# Initialize logging
handler = colorlog.StreamHandler()
formatter = colorlog.ColoredFormatter(
    "%(log_color)s%(levelname)-8s%(reset)s %(blue)s%(message)s",
    datefmt=None,
    reset=True,
    log_colors={
        'DEBUG':    'cyan',
        'INFO':     'green',
        'WARNING':  'yellow',
        'ERROR':    'red',
        'CRITICAL': 'red,bg_white'
    },
    secondary_log_colors={},
    style='%'
)
handler.setFormatter(formatter)
LOGGER = logging.getLogger(__name__)
LOGGER.addHandler(handler)
LOGGER.setLevel(logging.INFO)


def _cmd(cmd_list, stdin=None, cmd_input=None, err_msg="Command Line Error", **kwargs):
    """Helper function - run external commands

    :param cmd_list: List of commands to run
    :param stdin: stdin for Popen
    :param cmd_input: input data
    :param err_msg: error message prefix
    :param cwd: (optional) Directory to run the command in
    :param **kwargs: Any additional Popen arguments (e.g. env, shell)
    """

    proc = subprocess.Popen(
        cmd_list,
        stdin=stdin,
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
        **kwargs
    )
    out, err = proc.communicate(cmd_input)
    if proc.returncode != 0:
        LOGGER.error('Error executing shell command: {0}.'.format(err))
        raise IOError("{0}\n{1}".format(err_msg, err))
    return out


def run_build(proj_dir):
    """Run a new build
    
    :param proj_dir: The local project directory within which to execute the build
    
    """

    # Execute a new build
    _cmd(["npm", "run", "build"], cwd=proj_dir, err_msg="npm build error")
    LOGGER.info('Successfully built project {0}.'.format(proj_dir))


def run_deploy(conf, env, proj_dir, profile, verify_ssl):
    """Deploy a build to an S3 environment

    :param env: The environment to deploy to (stag or prod)
    :return: True if file was uploaded, else False

    NOTE: boto3 does not support directory synchronization which is messy, so we rely on the AWS CLI's
    'aws s3 sync' functionality. This is suboptimal but is the cleanest option.
    """

    LOGGER.info('Running deploy for {0}.'.format(env))

    # Load config
    f = open(conf)
    c = json.load(f)
    f.close()

    # Deploy the build by synchronizing the dist directory with the S3 bucket
    LOGGER.info('Deploying {0}dist to s3.'.format(proj_dir))
    bucket_url = c["environments"][env]["bucket_url"]
    _cmd(["aws", "s3", "sync", proj_dir + "/dist", bucket_url, "--profile", profile, "--delete"], err_msg="AWS CLI Error")
    LOGGER.info('Successfully deployed {0}dist to {1}.'.format(proj_dir, bucket_url))

    exit

    # index.html requires cache-control headers so that it is not cached but we cannot update S3 object metadata except
    # when uploading a file, so we have to overwrite the version we just uploaded, and set the cache control headers
    # appropriately
    LOGGER.info('Uploading index.html with cache-control headers.')
    _cmd(["aws", "s3", "cp", proj_dir + "/dist/index.html", bucket_url, "--profile", profile, "--cache-control", "max-age=0, no-cache, no-store, must-revalidate"], err_msg="AWS CLI Error")
    LOGGER.info('Successfully uploaded index.html with cache-control headers.')

    # Invalidate the cache
    cf_distro = c["environments"][env]["cf_distro"]
    invalidation = "/index.html"
    timestamp = str(time.time()).replace(".", "")
    session = boto3.Session(profile_name=profile)
    client = session.client('cloudfront', verify=verify_ssl)
    try:
        response = client.create_invalidation(
            DistributionId=cf_distro,
            InvalidationBatch={
                'Paths': {
                    'Quantity': 1,
                    'Items': [
                        invalidation,
                    ]
                },
                'CallerReference': timestamp
            }
        )
    except Exception as e:
        LOGGER.error("Boto error encountered invalidating cache.")
        raise Exception("Error invalidating cache: {0}".format(e))
    else:
        LOGGER.info('Successfully submitted CloudFront invalidation for {0} with invalidation id {1}.'.format(cf_distro, response['Invalidation']['Id']))


def main(argv=None):
    parser = argparse.ArgumentParser(
        formatter_class=argparse.RawDescriptionHelpFormatter,
        description=textwrap3.dedent("""\
            This script automates the deployment of a static website. The script can only be run by
            someone with the appropriate permissions in the AWS environment. The script will take the contents of
            the deploy directory and deploy them to the provided environment.

            Example Usage: ./deploy.py --conf ./deploy.json --proj_dir /Users/foo/Documents/Projects/foo --profile foo --build --env prod 

            Ensure that you have API credentials stored in your ~/.aws/credentials file or this script will not work.
              * Add a new user: aws configure --profile <user>
              * Test access: export AWS_PROFILE=<profile name> && aws s3 ls
            """)
    )
    parser.add_argument("--conf", required=True, help="The deploy script configuration file.")
    parser.add_argument("--env", required=True, help="The environment to deploy [stag|prod].")
    parser.add_argument("--proj_dir", required=True, help="The location of the project directory that will be deployed.")
    parser.add_argument("--profile", required=True, help="The AWS profile to use for running the deploy. Must be stored in ~/.aws/credentials.")
    parser.add_argument("--disable-ssl-check", default=True, action="store_false", help="(Optional) Disable AWS SSL certificate checking when using boto3.")
    parser.add_argument("--build", default=False, action="store_true", help="(Optional) Run a new build before deploying the app.")
    args = parser.parse_args(argv)

    # Run a new build if requested
    if args.build:
        run_build(args.proj_dir)
    
    # We only support prod|stag
    if not args.env in ['stag', 'prod']:
        LOGGER.error("Invalid environment specified.")
        raise Exception("Invalid environment specified: {0}".format(args.env))

    # Deploy the app to env
    run_deploy(args.conf, args.env, args.proj_dir, args.profile, args.disable_ssl_check)

if __name__ == "__main__":
    main(sys.argv[1:])
