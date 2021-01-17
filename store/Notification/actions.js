import state 												from "./state.js";

export default {
  addNotification({ commit, dispatch }, text){
    commit("ADD_NOTIFICATION", text);
  }
}
