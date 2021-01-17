import getters 				  						from "./rootGetters.js";
import state 				    						from "./rootState.js";

export default {
  async nuxtServerInit({ commit, dispatch } ){
    console.log("nuxtServerInit: BOOTSTRAPPING APP");
    await dispatch("getAccounts")
  },

  /*
  async checkCookies({ commit, dispatch }){
    try {
      console.log("88888888888888888888888888888888888" );
      let { data } = await this.$axios.post(`${this.getters.authServerEndpoint}/api/oauth/decode-token`, {}, { withCredentials: true });
      //et { data } = await this.$axios.post(`${this.getters.authServerEndpoint}/oauth/decode-token`, {}, { withCredentials: true });

      data.accounts.forEach((account, i) => {
        commit("SET_TOKEN", {
          siteName: account.name,
          token: account.token
        });
      });

    }
    catch (e){
      dispatch("setNotification", e.response.data.reason);
    }
  },
  async linkAccount({}, payload){
    try {
      console.log("TESTESTETSETSETST");
      const { data } = await this.$axios.post(`/api/connect/${payload.siteName}`, {
        user: payload.user
      }, { withCredentials: true });
      console.log("finished");
      console.log(data);
    }
    catch (e) { console.log(e); }
  },
  async setToken({ commit, dispatch }, payload){
    commit("SET_TOKEN", payload);
  }*/
};
