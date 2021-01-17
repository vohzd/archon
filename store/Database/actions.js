import state 												from "./state.js";


export default {
  async initDB({ commit, dispatch }){
    try {
      console.log("initDB");

      let { data } = await this.$axios.get(`/api/database`);

      console.log("finished...")
      console.log(data)
    }
    catch (e){

      console.log(e)
      //dispatch("setNotification", e.response.data.reason);
    }
  }
}
