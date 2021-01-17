import state from "./state.js";

export default {
  SET_ACCOUNTS(state, accounts){
    console.log("mutation: set_account");
    console.log(accounts)
    state.accounts = "WHY";
    console.log(accounts)
    console.log(state)
  }
}
