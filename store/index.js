/*
 * LIBRARIES
 */
import Vue 										from "vue";
import Vuex 									from "vuex";

/*
 * TOP LEVEL VUEX STUFF
 */
import state 									from "./rootState.js";
import myMutations 						from "./rootMutations.js";
import actions 								from "./rootActions.js";
import getters 								from "./rootGetters.js";

/*
 * INDIVIDUAL COMPONENT VUEX STUFF
 */

import Accounts 						  	from "./Accounts/index.js";
import Job 											from "./Job/index.js";
import Sync 										from "./Sync/index.js";

Vue.use(Vuex);

export default () => {
	return new Vuex.Store({
		actions,
		getters,
		modules: {
			Accounts,
			Job,
			Sync
		},
		mutations: {
			...myMutations
		},
		state: state()
	});

};
