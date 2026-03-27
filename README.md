# Digital Resume

Cloud Resume Challenge implementation built on AWS with Terraform, a React/Vite frontend, a serverless visitor counter, and GitHub Actions CI/CD.

## Live Site

- `https://rayanhameed.com`
- `https://www.rayanhameed.com`

## Stack

Frontend:
- React + Vite
- Static hosting on S3 behind CloudFront
- Custom domain with ACM certificate

Backend:
- API Gateway
- AWS Lambda
- DynamoDB
- CloudWatch Logs

Infrastructure / Delivery:
- Terraform
- Remote Terraform state in S3 with DynamoDB locking
- GitHub Actions CI + CD
- GitHub OIDC for AWS authentication

## Architecture

```text
Browser
  -> CloudFront
  -> S3 (frontend build)

Browser
  -> API Gateway
  -> Lambda
  -> DynamoDB

GitHub Actions
  -> OIDC
  -> AWS
  -> Terraform / S3 sync / CloudFront invalidation
```

## Repository Layout

```text
backend/
  lambda_function.py           Visitor counter Lambda source

bootstrap/remote-state/
  *.tf                         One-time Terraform for remote state bucket + lock table

frontend/
  src/                         React frontend source
  package.json                 Frontend scripts and dependencies
  vite.config.ts               Vite configuration

infra/
  providers.tf                 Terraform providers + backend block
  variables.tf                 Terraform input variables
  acm.tf                       Existing ACM certificate reference
  s3.tf                        Website bucket and access policy
  cloudfront.tf                CloudFront distribution and SPA routing support
  backend.tf                   Lambda, DynamoDB, API Gateway, CloudWatch
  outputs.tf                   Terraform outputs

.github/workflows/
  playwright.yml               CI checks
  deploy.yml                   CD workflow
```

## What Terraform Manages

`infra/` is the source of truth for AWS infrastructure.

Managed in Terraform:
- S3 website bucket configuration
- CloudFront distribution and Origin Access Control
- SPA-style CloudFront fallback for client-side routes
- Existing ACM certificate reference by ARN
- DynamoDB visitor counter table
- Existing Lambda function resource
- API Gateway
- CloudWatch log groups
- Lambda invoke permission

Not managed in Terraform:
- Porkbun DNS records
- ACM certificate issuance/validation

## Frontend

The frontend is now a Vite/React app located in `frontend/`.

Local development:

```bash
cd frontend
npm install
npm run dev
```

Production build:

```bash
cd frontend
npm run build
```

The production build outputs to `frontend/dist/`.

If you want to override the visitor counter API locally, create a `.env` file in `frontend/`:

```bash
VITE_API_URL="https://your-api-url"
```

## AWS Authentication

Example local AWS SSO login flow:

```bash
aws sso login --profile admin-test
export AWS_PROFILE=admin-test
export AWS_REGION=ap-southeast-4
aws sts get-caller-identity
```

## Remote Terraform State

Remote state is bootstrapped separately to avoid a backend chicken-and-egg problem.

Create the remote state resources once:

```bash
terraform -chdir=bootstrap/remote-state init
terraform -chdir=bootstrap/remote-state apply
```

Copy the example backend config:

```bash
cp infra/backend.tfbackend.example infra/backend.tfbackend
```

Migrate local `infra` state to S3:

```bash
terraform -chdir=infra init -migrate-state -backend-config=backend.tfbackend
```

After that, normal Terraform commands use remote state.

## Terraform Workflow

Plan:

```bash
terraform -chdir=infra plan
```

Reviewed apply flow:

```bash
terraform -chdir=infra plan -out=tfplan
terraform -chdir=infra show tfplan
terraform -chdir=infra apply tfplan
```

Useful outputs:

```bash
terraform -chdir=infra output
terraform -chdir=infra output -raw visitor_counter_api_url
```

## CI/CD

CI workflow: `.github/workflows/playwright.yml`

Runs:
- `terraform fmt -check`
- `terraform init -backend=false`
- `terraform validate`
- Playwright API tests
- Playwright E2E tests

CD workflow: `.github/workflows/deploy.yml`

Runs on push to `main` or manual dispatch:
- frontend dependency install
- frontend build
- Terraform init / plan / apply
- sync `frontend/dist/` to S3
- CloudFront invalidation

AWS authentication in GitHub Actions uses OIDC, not long-lived AWS keys.

## Manual Verification

After a deploy, check:
- `https://rayanhameed.com`
- `https://www.rayanhameed.com`
- `/notes`
- refresh on `/notes`
- visitor counter loads correctly

API check:

```bash
curl "$(terraform -chdir=infra output -raw visitor_counter_api_url)"
```

## Notes

- Do not commit Terraform state files
- Do not commit `infra/backend.tfbackend`
- Commit `infra/.terraform.lock.hcl`
- `frontend/dist/` should not be committed
- `generated/` was import/reference material and is no longer the active infrastructure source

## Next Improvements

- Keep refining the frontend content and visual polish
- Improve Lambda code deployment so backend code updates are part of CD
- Add concurrency control to the deploy workflow to reduce Terraform state lock conflicts
- Expand project content and technical notes
