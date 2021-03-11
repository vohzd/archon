import state from "./state.js";

export default {
  ADD_NOTIFICATION(state, text){
    console.log("YOU ARE HERE")
    console.log(text)
    state.notifications.push(text);
  }
}
