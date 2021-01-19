import state from "./state.js";

export default {
  accounts: (state) => (p) => state.accounts.find((v) => v.website === p)
};
