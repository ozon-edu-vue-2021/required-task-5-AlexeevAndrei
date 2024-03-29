import Vue from "vue";
import Vuex from "vuex";
import products from "./modules/products";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    products,
  },
});

export default store;
