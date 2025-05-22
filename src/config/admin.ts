export default ({ env }) => ({
  // other config parameters
  apiToken: {
    secrets: {
      encryptionKey: env("ENCRYPTION_KEY"),
    },
  },
  transfer: {
    token: {
      salt: env("TRANSFER_TOKEN_SALT", "anotherRandomLongString"),
    },
  },
});
