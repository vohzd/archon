import state 												from "./state.js";

export default {
  addJob({ commit, dispatch }, text){
    commit("ADD_JOB", text);
  }
}
