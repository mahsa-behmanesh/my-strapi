export default ({ env }) => ({
  apiToken: {
    salt: env("API_TOKEN_SALT", "someRandomLongString"),
    secrets: {
      encryptionKey: env("ENCRYPTION_KEY"),
    },
  },
  auditLogs: {
    // only accessible with an Enterprise plan
    enabled: env.bool("AUDIT_LOGS_ENABLED", true),
    retentionDays: 120,
  },
  auth: {
    events: {
      onConnectionSuccess(e) {
        console.log(e.user, e.provider);
      },
      onConnectionError(e) {
        console.error(e.error, e.provider);
      },
    },
    options: {
      expiresIn: "7d",
    },
    secret: env("ADMIN_JWT_SECRET", "someSecretKey"),
  },
  url: env("PUBLIC_ADMIN_URL", "/dashboard"),
  autoOpen: false,
  watchIgnoreFiles: [
    "./my-custom-folder", // Folder
    "./scripts/someScript.sh", // File
  ],
  host: "localhost",
  port: 8003,
  serveAdminPanel: env.bool("SERVE_ADMIN", true),
  forgotPassword: {
    from: "no-reply@example.com",
    replyTo: "no-reply@example.com",
  },
  rateLimit: {
    interval: { hour: 1, min: 30 },
    timeWait: 3 * 1000,
    max: 10,
  },
  transfer: {
    token: {
      salt: env("TRANSFER_TOKEN_SALT", "anotherRandomLongString"),
    },
  },
});
