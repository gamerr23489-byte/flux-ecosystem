# BashPay deployment checklist

1. Provision PostgreSQL and run the SQL files in migrations/.
2. Set Clerk publishable and secret keys in the hosting platform's environment settings.
3. Set APP_ORIGIN to the exact public HTTPS origin.
4. Set DATABASE_URL server-side only.
5. Start with FLW_ENV=sandbox and configure Flutterwave sandbox credentials only when testing provider calls.
6. Verify Clerk email/password and Google sign-in.
7. Verify /api/health.
8. Sign in and confirm the dashboard only returns the signed-in account's records.
9. Before enabling any live money movement, complete the provider's required onboarding/compliance and account configuration. Do not bypass provider identity or eligibility checks.
10. Switch to production provider credentials only after sandbox testing and operational review.
