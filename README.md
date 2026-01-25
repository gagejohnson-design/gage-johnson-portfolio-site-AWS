# Personal Portfolio Website (AWS + GitHub Actions)

A clean, responsive multi-page portfolio site built with semantic HTML and modern CSS, deployed to AWS as a static website. Updates are shipped automatically using GitHub Actions and AWS OIDC-based authentication.

> **Project goal:** Showcase front-end fundamentals alongside real-world cloud deployment using S3, CloudFront, and a custom domain.

---

## Overview

- Multi-page layout (Home, About, Portfolio, Contact)  
- Semantic, accessible HTML (`header`, `nav`, `main`, `section`, `footer`)  
- Mobile-first responsive CSS (Flexbox + Grid)  
- AWS static hosting (S3 origin + CloudFront CDN)  
- CI/CD with GitHub Actions (OIDC → IAM Role → S3 Sync → CloudFront Invalidation)

---

<details>
<summary><strong>Pages</strong></summary>

| Page       | File              | Purpose |
|------------|-------------------|----------|
| Home       | `index.html`     | Landing page, hero section, personal branding |
| About      | `about.html`     | Background in consulting, cloud, and development |
| Portfolio  | `portfolio.html` | Featured work and project focus areas |
| Contact    | `contact.html`  | Accessible contact form |

</details>

---

<details>
<summary><strong>Project Structure</strong></summary>

```text
.
├── .github/
│   └── workflows/               # CI/CD deployment workflows
├── health/                      # Optional health/verification assets
├── src/                         # Supporting site assets/content (if used)
├── index.html
├── about.html
├── portfolio.html
├── contact.html
├── styles/
│   ├── main.css                 # Global styles shared across pages
│   ├── index-content.css       # Page-specific styling
│   ├── about-content.css
│   ├── portfolio-content.css
│   └── contact-content.css
├── build.sh                    # Optional build helper
└── README.md
</details>
<details> <summary><strong>Tech Stack</strong></summary>
HTML5 — semantic structure and accessibility best practices

CSS3 — responsive layouts with Flexbox and Grid

GitHub Actions — automated CI/CD pipeline

AWS

S3 — static site hosting

CloudFront — CDN and HTTPS

Route 53 — DNS

ACM — TLS certificates (for custom domain)

</details>
<details> <summary><strong>Run Locally</strong></summary>
This is a static site. No backend or build tools are required.

Option A — VS Code Live Server
Open the repo in VS Code

Install the Live Server extension

Right-click index.html → Open with Live Server

Option B — Python HTTP Server
python3 -m http.server 5173
Then open http://localhost:5173 in your browser.

</details>
<details> <summary><strong>Deployment Architecture</strong></summary>
Browser
  ↓
CloudFront (CDN + HTTPS)
  ↓
S3 Bucket (Static Website Origin)
</details>
<details> <summary><strong>One-Time AWS Setup</strong></summary>
1. Create an S3 Bucket
Store all static site files

Keep the bucket private if using CloudFront with Origin Access Control (recommended)

Public access is handled by CloudFront, not directly by S3

2. Create a CloudFront Distribution
Origin: S3 bucket

Default root object: index.html

Enable HTTPS

Optional: custom error responses for SPA-style routing

3. Custom Domain (Optional)
Request an ACM certificate in us-east-1

Add domain(s) as Alternate Domain Names (CNAMEs) in CloudFront

In Route 53, create an A/AAAA alias record pointing to the CloudFront distribution

4. GitHub Actions Authentication (OIDC)
Create an IAM role with a trust policy for GitHub’s OIDC provider

Grant least-privilege permissions:

s3:ListBucket

s3:PutObject

s3:DeleteObject

cloudfront:CreateInvalidation

</details>
<details> <summary><strong>CI/CD Pipeline</strong></summary>
On push (typically to a production branch), GitHub Actions will:

Check out the repository

Authenticate to AWS using OIDC

Sync site files to S3 using aws s3 sync

Invalidate CloudFront cache so updates go live globally

</details>
<details> <summary><strong>Required GitHub Secrets</strong></summary>
Set these in Repository → Settings → Secrets and variables → Actions

AWS_ROLE_ARN — IAM role assumed by GitHub Actions

AWS_REGION — AWS region (example: us-east-1)

S3_BUCKET — Target S3 bucket name

CLOUDFRONT_DISTRIBUTION_ID — CloudFront distribution ID

</details>
<details> <summary><strong>Accessibility & Maintainability</strong></summary>
Shared global styling is centralized in styles/main.css

Page-specific styles are modularized for clean separation of concerns

Forms use labeled inputs and keyboard-friendly navigation

Semantic HTML improves SEO and screen reader compatibility

</details>
Author
Gage Johnson
Consultant | Developer | Cloud Engineer in Training
