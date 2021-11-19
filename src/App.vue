<template>
  <div id="app">
    <div class="nav-container">
      <b-navbar toggleable="lg" type="dark" variant="primary">
        <div class="wrapper">
          <router-link :to="routerLinks.root">
            <b-navbar-brand>Каталог</b-navbar-brand>
          </router-link>
          <div>
            <router-link :to="routerLinks.cart"
              ><BButton class="basket-button" variant="danger"
                >Корзина</BButton
              ></router-link
            >
            <router-link :to="routerLinks.favorite">
              <BButton variant="success">Избранное</BButton>
            </router-link>
          </div>
        </div>
      </b-navbar>
    </div>
    <router-view />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { routerLinks } from "./router/index";

export default {
  name: "App",
  data: () => ({
    routerLinks: routerLinks,
  }),
  created() {
    this.fetchProducts();
  },
  methods: {
    ...mapActions("products", ["fetchProducts"]),
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  background-color: #fafafa;
  padding: 24px;
  box-sizing: border-box;
}

html,
body,
#app {
  height: 100%;
}

* {
  box-sizing: border-box;
}

.nav-container {
  margin-bottom: 20px;
}

.wrapper {
  display: flex;
  width: 100%;
  justify-content: space-between;
}

.basket-button {
  margin-right: 10px;
}
</style>
