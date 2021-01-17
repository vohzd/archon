import state 												from "./state.js";


export default {
  async addAccount({ commit, dispatch }, payload){
    console.log("action: addAccount");

    let { data } = await this.$axios.post(`/api/account`, {
      accountName: payload.accountName,
      website: payload.website
    });

  },
  async getAccounts({ commit, dispatch }){
    console.log("action: getAccounts")
    let { data } = await this.$axios.get(`/api/account/`);
    commit("SET_ACCOUNTS", data);
  }
}
