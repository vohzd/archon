import getters 				  						from "./rootGetters.js";
import state 				    						from "./rootState.js";

export default {
  async linkAccount({}, payload){
    console.log("hello from action");
    console.log(payload);

    try {
      console.log("trying...");
      const { data } = this.$axios.post(`/api/connect/${payload.siteName}`, {
        user: payload.user
      });
      console.log("finished");
      console.log(data);
    }
    catch (e) { console.log(e); }

  }
};
