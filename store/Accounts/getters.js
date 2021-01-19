import state from "./state.js";

export default {
  accounts: (state) => (p) => {
    if (!p) return state.accounts;
    else return state.accounts.find((v) => v.website === p )
  }
};
