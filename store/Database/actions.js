import state 												from "./state.js";


export default {
  async addAccount({ commit, dispatch }, payload){
    console.log("action: addAccount");

    try {
      let { data } = await this.$axios.post(`/api/database/account`, {
        accountName: payload.accountName,
        website: payload.website
      });

      console.log(data)
    }
    catch (e){
      console.log(e)
    }

  },
  async initDB({ commit, dispatch }){
    try {
      console.log("action: initDB");
      let { data } = await this.$axios.get(`/api/database/`);
      console.log("finished...")
      console.log(data)
    }
    catch (e){
      console.log(e)
      //dispatch("setNotification", e.response.data.reason);
    }
  }
}
