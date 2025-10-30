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
git clone https://github.com/your-username/llhs-finance-club-website.git
cd llhs-finance-club-website

# Install modules
npm install

# Start the dev server
npm run dev
```

## Deploy Setup

The application is deployed using a simple python script and the AWS boto libraries. In order to use the deployment script, you must setup a virtual environment first (this only needs to be done once).
```
# Ensure the deploy.py script is executable
chmod +x deploy.py

# Create a python virtual environment
python3 -m venv venv

# Activate the virtual environment
source venv/bin/activate

# Install required python modules
pip install boto3 colorlog textwrap3

# Deactivate the python virtual environment (if not needed)
deactivate
```

## Deploy

To deploy the application after making changes, execute the deploy script with the correct arguments. This should be executed from within the `project/deploy` directory.

```
# Activate the python virtual environment
source venv/bin/activate

# Run the deploy
./deploy.py \
  --conf deploy.json \
  --proj_dir ../ \
  --profile your_aws_profile \
  --build \
  --env prod

# Deactivate the python virtual environment (if not needed)
deactivate
```

## Authors

**Alexander Alessi** – Developer  
**Nicolas Alessi** – Developer  

*Built with ❤️ for the LLHS Finance Club. Go Knights. Invest Smart!*

## Live Site

[https://llhsfinance.org](https://llhsfinance.org)