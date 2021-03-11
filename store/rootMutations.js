import state from "./rootState.js";

export default {
  /*
  SET_TOKEN(state, payload){
    console.log(payload);
    state[`${payload.siteName}Token`] = payload.token;
  }*/
  SET_SOCKET(state, socket){
    state.socket = socket
  }
};
