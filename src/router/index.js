import Vue from "vue";
import Router from "vue-router";

import ProductList from "../components/ProductList.vue";
import Basket from "../components/Basket.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: ProductList,
    },
    {
      path: "/bascket",
      component: Basket,
    },
  ],
});
