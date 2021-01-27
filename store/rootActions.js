import getters 				  						from "./rootGetters.js";
import state 				    						from "./rootState.js";

export default {
  async nuxtServerInit({ commit, dispatch } ){
    await dispatch("getAccounts")
  }
};
