import state from "./state.js";

export default {
  GET_DB(state, db){
    state.db = db;
  }
}
