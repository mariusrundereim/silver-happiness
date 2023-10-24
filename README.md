# GitHub Repository for Managing a Secret Number

This GitHub repository demonstrates how to securely manage a secret number and automate workflows using GitHub Actions. The project includes a .env file for storing secret values and two GitHub Actions workflows for testing and deploying a web application to GitHub Pages.

https://mariusrundereim.github.io/silver-happiness/

## .gitignore

The `.gitignore` file specifies which files and directories should be excluded from version control. It excludes the following:

- `node_modules`: Excludes node.js dependencies.
- `dist`: Excludes build output files.
- `.env`: Excludes the sensitive environment configuration file.

## .env.example

An example `.env` file containing placeholders for secret values:

- `API_KEY = "string"`
- `MY_USER = "string"`
- `MY_USER_PW = "string"`
- `SECRET = number`

You should use this file as a template and replace the placeholders with actual secret values.

## main.yml

### Test our Secret Value

This GitHub Actions workflow is named "Test our Secret Value" and can be triggered manually or through a workflow dispatch. It does the following:

- Sets environment variables, including API_KEY and SECRET, using GitHub Secrets.
- Installs project dependencies.
- Runs a test script to test the web application.

## deploy.yml

### Deploy to Pages with Secret

This GitHub Actions workflow, "Deploy to Pages with Secret," is designed to deploy your web application to GitHub Pages. It is triggered on pushes to the master branch and can also be manually triggered. It has the following key features:

- Permissions for the GITHUB_TOKEN to allow deployment to GitHub Pages.
- Concurrency settings to allow one concurrent deployment.
- A deploy job that sets up GitHub Pages and deploys the application.
- Environment variables for deployment, including the deployment URL.

## GitHub Secrets

The workflows use GitHub Secrets to securely store and access sensitive information, such as API keys and secret numbers.

## Replace Placeholders in index.html

The "replace-env-vars-action" is used to replace placeholders in an `index.html` file with the secret variables, ensuring that sensitive data is not exposed in the deployed application.

## How to Use

1. Clone this repository to your local environment.

2. Create a `.env` file based on the `.env.example` template, and fill in the actual secret values.

3. Configure the GitHub Secrets for your repository to store the API key and secret number securely.

4. Customize the test script and the deployment settings in the workflow files to match your project's requirements.

5. Push your changes to the repository to trigger the workflows.

This repository provides an example of how to manage secrets and automate deployment workflows for a web application hosted on GitHub Pages.
