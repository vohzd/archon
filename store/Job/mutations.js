import state from "./state.js";

import Vue from "vue";
export default {
  ADD_JOB(state, json){
    if (state.jobs.length === 0){
      state.jobs.push(json);
    }
    Vue.set(state.jobs, json.jobIndex, json);
  }
}
