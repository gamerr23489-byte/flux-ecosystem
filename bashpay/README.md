# BashPay Global

BashPay is a React/Vite + Node/Express global-money workspace with Clerk authentication and a PostgreSQL data layer. It is designed as a standalone public web application rather than a Retool-only frontend.

## Current stack

- React + Vite + TypeScript
- Clerk React SDK @clerk/react
- Clerk Backend SDK @clerk/backend
- Node + Express
- PostgreSQL via pg
- Zod validation
- Helmet + CORS
- Optional Flutterwave provider adapter for funding/FX/bank transfers

## Environment

Copy .env.example to your deployment environment and set values there. Never put server secrets in VITE_* variables.

Required server values:
- DATABASE_URL
- CLERK_SECRET_KEY
- CLERK_PUBLISHABLE_KEY
- APP_ORIGIN

Required browser value:
- VITE_CLERK_PUBLISHABLE_KEY

Optional provider values:
- FLW_ENV=sandbox|production
- FLW_PUBLIC_KEY
- FLW_SECRET_KEY
- FLW_ACCOUNT_ID

## Run

npm install
npm run typecheck
npm run build
npm start

The server hosts the compiled frontend and exposes /api/* endpoints.

## Database

The standalone public app requires a direct PostgreSQL connection in DATABASE_URL; do not assume a Retool-managed resource is externally reachable from the public server. For a fresh public database, run migrations/004_public_core.sql. It is idempotent and creates the full BashPay schema, Clerk identity mapping, walleting/ledger tables, provider intent tables, virtual accounts, beneficiaries, indexes, and the six supported assets. For an existing BashPay database, review the migration before applying it because existing table definitions must remain compatible with the application.

## Provider notes

Flutterwave uses a Client ID and API key to obtain short-lived access tokens. Keep those credentials on the server. Flutterwave documents sandbox and production API base URLs separately and recommends scoped keys and secure storage.

BashPay does not bypass any provider onboarding or compliance requirement. Live transfers, cards, or other regulated capabilities should only be enabled after the relevant provider account is approved and configured.
