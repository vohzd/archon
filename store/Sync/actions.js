import state 												from "./state.js";


export default {
  async sync({ commit, dispatch }, account){
    console.log("action: sync")
    console.log(account);
    let { data } = await this.$axios.post(`/api/sync/`, account);
    console.log(data);
  }
}
