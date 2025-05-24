export default ({ env }) => ({
  // ...
  "users-permissions": {
    config: {
      jwt: {
        expiresIn: "7d",
      },
      register: {
        allowedFields: ["nickname"],
      },
    },
  },
  sentry: {
    enabled: true,
    config: {
      // Only set `dsn` property in production
      dsn: env("NODE_ENV") === "production" ? env("SENTRY_DSN") : null,
      sendMetadata: true,
    },
  },
  // ...
});
