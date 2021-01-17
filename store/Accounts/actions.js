import state 												from "./state.js";


export default {
  nuxtServerInit({ commit, dispatch } ){
    console.log("nuxtServerInit: BOOTSTRAPPING APP");
    try {
      dispatch("getAccounts");

    }
    catch (e){
      console.log("WTF")
      console.log(e)
    }
  },
  async addAccount({ commit, dispatch }, payload){
    console.log("action: addAccount");

    try {
      let { data } = await this.$axios.post(`/api/account`, {
        accountName: payload.accountName,
        website: payload.website
      });

      console.log(data)
    }
    catch (e){
      console.log(e)
    }

  },
  async getAccounts({ commit, dispatch }){
    try {
      console.log("action: getAccounts")
      console.log("HELLO")
      let { data } = await this.$axios.get(`/api/account/`);
      commit("SET_ACCOUNTS", data);
    }
    catch (e){
      console.log("destroed")
      console.log(e)
      //dispatch("setNotification", e.response.data.reason);
    }
  }
}
