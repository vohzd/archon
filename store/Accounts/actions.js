import state 												from "./state.js";


export default {
  async addAccount({ commit, dispatch }, payload){
    let { data } = await this.$axios.post(`/api/account`, {
      username: payload.username,
      website: payload.website
    });
    dispatch("getAccounts");
  },
  async getAccounts({ commit, dispatch }){
    let { data } = await this.$axios.get(`/api/account/`);
    commit("SET_ACCOUNTS", JSON.parse(data));
  }
}
