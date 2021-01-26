import state 												from "./state.js";


export default {
  async syncDB({ commit, dispatch }, payload){
    console.log("action: syncDB")
    console.log(payload);
    let { data } = await this.$axios.post(`/api/sync/`, payload);
    console.log(data);
  }
}
