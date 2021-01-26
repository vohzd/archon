import state from "./state.js";

export default {
  SET_ACCOUNTS(state, accounts){
    console.log("mutation: SET_ACCOUNTS");
    console.log(accounts);
    state.accounts = accounts;
  }
}
