import Vue from "vue";
import Vuex from "vuex";
import actions from "./actions";
import getters from "./getters";
import mutations from "./mutation";
import state from "./state";

Vue.use(Vuex);

export default new Vuex.Store({
  state: state,
  mutations: mutations,
  actions: actions,
  getters: getters,
  modules: {},
});
