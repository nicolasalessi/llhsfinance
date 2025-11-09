# LLHS Finance Club – Official Website

**Investing in Knowledge. Building the Future.**  
*Las Lomas High School Finance Club*

## About the Club

The **LLHS Finance Club** is a student-led organization dedicated to teaching real-world financial literacy, investing strategies, and economic awareness. Founded in 2024 by passionate students who saw a gap in traditional education, we empower members to take control of their financial futures — **no prior experience required**.

We manage a **real investment portfolio**, growing from **$4,000 to over $12,000** through disciplined research, market analysis, and strategic decision-making.

## Features

- **Live Portfolio Tracker** – See our real-time holdings, performance, and growth (+275% to date)
- **Leadership Team** – Meet the student executives driving the club
- **Join the Club** – Meeting schedules, contact info, and how to get involved
- **Mobile-First Design** – Built with React, Vite, and Tailwind CSS for speed and accessibility

## Tech Stack

- **Frontend**: React + Vite  
- **Styling**: Tailwind CSS  
- **Icons**: Font Awesome  
- **Deployment**: AWS S3 + CloudFront with HTTPS (SSL/TLS via AWS Certificate Manager)  

## Getting Started

Follow these steps to clone the repository and set up your local development environment.

### 1. Clone the Repository
```bash
git clone https://github.com/nicolasalessi/llhsfinance.git
cd llhsfinance

# Install modules
npm install

# Start the dev server
npm run dev
```
Now you should be able to view the local development server in a web browser at https://localhost:5173

### 2. Automated Deployment (GitHub Actions → AWS)

Every push to the `main` branch automatically builds and deploys the site in about 30 seconds. Ensure that <repo>/.github/workflows/deploy.yml is in place to activate the GitHub actions.

#### How it works
- **Trigger**: `git push` to `main`  
- **Build**: `npm install` → `npm run build` (Vite outputs to `dist/`)  
- **Deploy**: Files are synced to the S3 bucket  
- **Cache bust**: CloudFront cache is invalidated (`/*`) so visitors instantly see the latest version

#### AWS Setup Summary
1. **IAM OIDC Identity Provider**  
   - Provider: `https://token.actions.githubusercontent.com`
   - Audience: `sts.amazonaws.com`

2. **IAM Role** (`GitHub-LLHSFinance`) - Trust relationship (Web identity)
    - Trusted entity type: `Web identity`
    - Identity provider: `token.actions.githubusercontent.com`
    - Audience: `sts.amazonaws.com`
    - GitHub organization: `<github_username>`
    - Github repository: `<github_repo>`
    - Github branch: `main`

This should produce the following JSON automatically:

```
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Principal": {
                "Federated": "<ARN_of_OIDC_Provider"
            },
            "Action": "sts:AssumeRoleWithWebIdentity",
            "Condition": {
                "StringEquals": {
                    "token.actions.githubusercontent.com:aud": "sts.amazonaws.com"
                },
                "StringLike": {
                    "token.actions.githubusercontent.com:sub": "repo:<github_username>/<github_repo>:ref:refs/heads/main"
                }
            }
        }
    ]
}
```

3. **IAM Role** (`GitHub-LLHSFinance`) - InlinePolicy (LLHSFinance-CF-Access) 

```
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": "cloudfront:CreateInvalidation",
            "Resource": "<CloudFront_ARN>"
        }
    ]
}
```

4. **IAM Role** (`GitHub-LLHSFinance`) - InlinePolicy (LLHSFinance-S3-Access) 

```
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
                "s3:PutObject",
                "s3:DeleteObject",
                "s3:ListBucket"
            ],
            "Resource": [
                "arn:aws:s3:::<S3_Bucket_Name>",
                "arn:aws:s3:::<S3_Bucket_Name>/*"
            ]
        }
    ]
}
```

4. **GitHub Actions Workflow**  

As long as you have the deploy.yml in place and properly configured, the automated pushes should work on every checking to `main` as follows:

   - Runs `aws s3 sync dist/ s3://<bucket> --delete`  
   - Runs `aws cloudfront create-invalidation --distribution-id <id> --paths "/*"`

**Result**: Zero-touch deploys. Commit → push → done. The live site updates worldwide in seconds.

## Authors

**Alexander Alessi** – Developer  
**Nicolas Alessi** – Developer  

*Built with ❤️ for the LLHS Finance Club. Go Knights. Invest Smart!*

## Live Site

[https://llhsfinance.org](https://llhsfinance.org)