import Vue from "vue";
import Router from "vue-router";

import ProductList from "../views/ProductList.vue";
import Cart from "../views/Cart.vue";
import Favorite from "../views/Favorite.vue";

export const routerLinks = { root: "/", cart: "/cart", favorite: "/favorite" };

Vue.use(Router);

export default new Router({
  mode: "history",

  routes: [
    {
      path: routerLinks.root,
      component: ProductList,
    },
    {
      path: routerLinks.cart,
      component: Cart,
    },
    {
      path: routerLinks.favorite,
      component: Favorite,
    },
  ],
});
