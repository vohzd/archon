import state from "./rootState.js";

export default {
  SET_TOKEN(state, payload){
    console.log(payload);
    state[`${payload.siteName}Token`] = payload.token;
  }
};
