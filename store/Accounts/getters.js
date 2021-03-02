import state from "./state.js";

export default {
  accounts: (state) => (queryKey, queryValue) => {
    if (!queryKey && !queryValue) return state.accounts;
    else return state.accounts.filter((v) => v[queryKey] === queryValue)
  }
};
