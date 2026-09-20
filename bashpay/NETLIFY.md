# Public deployment note

This source is intentionally a standard Node/Express app because it has server-side authentication and database access. Deploy the web server on a Node-capable host or adapt the server/ routes to the host's serverless format.

Do not expose CLERK_SECRET_KEY, DATABASE_URL, or FLW_SECRET_KEY to the browser.
