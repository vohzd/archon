import state from "./state.js";

export default {
  ADD_NOTIFICATION(state, text){
    state.notifications.push(text);
  }
}
