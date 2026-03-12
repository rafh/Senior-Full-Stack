## Senior Full-Stack Engineering Take Home

Thank you for taking the time to complete this exercise.

This challenge is designed to evaluate how you approach building product features across the stack. We're interested in your **engineering judgment, product thinking, and ability to make reasonable tradeoffs** — not perfection or completeness.

Please spend **no more than ~3 hours** on this exercise.

If you find yourself going beyond that, stop and note in the README what you would improve with more time.

---

# Context

Helm Health builds infrastructure that powers modern health insurance plans.

One area of the product provides **administrators visibility into claim activity** so they can monitor claim processing, identify issues, and understand utilization trends.

For this exercise, you will build a **small claims monitoring dashboard** for plan administrators.

The goal is to create a simple internal tool that allows administrators to explore claim data and identify potential issues.

---

# Project Setup

This repository contains a **Next.js frontend and Go backend scaffold** to save setup time.

The scaffold already includes:

* Next.js app with Tailwind CSS
* Go API service
* API proxy configuration (Next.js rewrites and an example API route)
* Development scripts

### Prerequisites

* Node >= 18
* Go >= 1.23

### Install dependencies

```bash
npm install
```

### Development scripts

```bash
# Start both services concurrently
npm run dev

# Start only Next.js
npm run dev:next

# Start only the Go API
npm run dev:go
```

`npm run dev` runs both services together:

* **Next.js** on `http://localhost:3000`
* **Go API** on `http://localhost:8081`

### Calling the Go API from the frontend

The scaffold provides two ways to reach the Go API from the frontend:

1. **Next.js rewrites** — requests to `/go-api/*` are proxied to the Go API automatically (see `next.config.ts`).
2. **Next.js API route** — `app/api/go/route.ts` shows a server-side fetch pattern.

You may use either approach or introduce your own. The included `app/page.tsx` demonstrates calling the API route.

### Adding dependencies

You are free to install any additional packages you find useful (UI libraries, charting libraries, etc.).

---

# Dataset

A dataset of synthetic claim records is provided in:

```
data/claims.json
```

This file contains 200 claims across multiple providers, members, and claim types.

The dataset includes a mix of:

* approved claims
* pending claims
* denied claims
* flagged claims requiring review

### Schema

Each claim object has the following fields:

| Field              | Type    | Description                                              |
| ------------------ | ------- | -------------------------------------------------------- |
| `claimId`          | string  | UUID for the claim                                       |
| `memberId`         | string  | Member identifier (e.g. `MBR-1022`)                     |
| `providerName`     | string  | Name of the healthcare provider                          |
| `status`           | string  | `approved`, `pending`, or `denied`                       |
| `amountCents`      | number  | Claim amount **in cents** (e.g. `8630` = $86.30)        |
| `serviceDate`      | string  | Date of service (`YYYY-MM-DD`)                           |
| `receivedAt`       | string  | ISO 8601 timestamp when the claim was received           |
| `updatedAt`        | string  | ISO 8601 timestamp of the last status update             |
| `claimType`        | string  | e.g. `prescription`, `specialist_visit`, `surgery`, etc. |
| `networkStatus`    | string  | `in_network` or `out_of_network`                         |
| `planName`         | string  | Insurance plan name                                      |
| `flaggedForReview` | boolean | Whether the claim has been flagged for manual review     |
| `denial_reason`    | string  | Reason for denial (only present on denied claims)        |

---

# Your Task

Build a **claims monitoring dashboard** that allows administrators to explore this dataset.

You should use the provided **Next.js + Go architecture**.

The dataset should be **served through the Go API**, and your frontend should retrieve data through the application's API layer rather than importing the JSON directly into the UI.

You may decide how filtering and aggregation should be implemented.

---

# Requirements

Your solution should include the following functionality.

## Claims Table

Display a list of claims with useful columns such as:

* claim id
* provider
* status
* claim type
* amount
* service date

Feel free to include other useful fields from the dataset.

---

## Filters

Add **at least two filters** that allow administrators to narrow the dataset.

Examples include:

* claim status
* provider
* date range
* flagged claims

You can decide which filters are most useful.

---

## Summary Metrics

Display **at least three high-level metrics** that help administrators understand claim activity.

Examples might include:

* total claims
* total approved claims
* total denied claims
* total claim value
* flagged claims count

---

## API Usage

Use the provided **Go API** to expose the claims data to the frontend.

You can decide:

* what endpoints to create
* whether filtering happens server-side or client-side
* where aggregation logic should live

The goal is not to build a production-ready API but to demonstrate **reasonable design choices**.

---

# Expectations

We are **not expecting a production system**.

Focus on:

* clarity
* reasonable architecture
* useful UI
* thoughtful tradeoffs

Avoid spending time on things like:

* authentication
* infrastructure
* deployment
* overly complex abstractions

---

# AI Tools

We are an **AI-forward engineering team**, and you are welcome (and encouraged) to use AI tools while working on this exercise.

However, you should fully understand the code you submit and be prepared to explain it.

---

# Submission

1. **Fork or clone** this repository into a new GitHub repository under your own account.
2. Complete the exercise and push your changes.
3. Include a completed **`SUBMISSION.md`** file in the root of the repository (a template is provided).
4. If your repository is **private**, add [`rafh`](https://github.com/rafh) as a collaborator so we can access it.
5. Create a text file (e.g. `repo-url.txt`) containing your repository URL and upload it via **Gem**.

---

# Evaluation

We evaluate submissions based on:

### Frontend engineering

* React component structure
* UI clarity and usability
* State management

### Backend / API design

* Reasonable API structure
* Data handling choices

### Data thinking

* Filtering and aggregation approach
* Metrics selection

### Product thinking

* Useful UI features
* Sensible metrics and filters

### Code quality

* Readability and organization
* Error handling
* TypeScript / Go idioms

### Communication

* Ability to explain decisions
* Clarity of SUBMISSION.md

---

# Final Notes

There is **no single correct solution**.

We are interested in how you think, how you structure problems, and how you communicate your decisions.

If anything is unclear, please ask.

Good luck, and thank you again for your time.
