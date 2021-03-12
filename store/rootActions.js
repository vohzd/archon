import getters 				  						from "./rootGetters.js";
import state 				    						from "./rootState.js";

export default {
  async nuxtServerInit({ commit, dispatch } ){
    await dispatch("getAccounts");
  },
  async createSocket({ commit, dispatch }){
    commit("SET_SOCKET", new WebSocket("ws://localhost:3000"));
    this.getters.socket.onmessage = (message) => {
      console.log("new message")
      console.log(message)
      dispatch("logger", message.data)
    };
  },
  logger({ commit, dispatch}, msg){

    const json = JSON.parse(msg);
    commit("ADD_JOB", {
      time: new Date(Date.now()).toTimeString().split(" ")[0],
      ...json
    });

  }
};
