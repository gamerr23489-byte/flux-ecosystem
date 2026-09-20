# BashPay security model

- Clerk is the customer identity provider.
- Customer API requests must carry a verified Clerk session token.
- Server-side authorization maps Clerk userId to bashpay_users.clerk_user_id.
- Customer-owned records are filtered on the server; the browser never chooses its own user_id.
- Provider credentials are server-only environment variables.
- No fabricated balances, transactions, card credentials or exchange rates are shipped.
- Live money movement is provider- and authorization-gated and should remain disabled until regulated onboarding, account configuration, limits, beneficiary controls, reconciliation and operational review are complete.
- Clerk webhook endpoints, when enabled, must verify their signatures with Clerk's verifyWebhook() helper.
