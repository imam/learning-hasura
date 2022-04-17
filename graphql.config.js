module.exports = {
  schema: {
    "http://localhost:8989/v1/graphql": {
      headers: {
        "x-hasura-admin-secret": "secret",
      },
    },
  },
};
