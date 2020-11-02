import state from "./rootState.js";

export default {
  githubToken: (state) => state.githubToken,
  authServerEndpoint: (state) => process.env.AUTH_SERVER_ENDPOINT
}
