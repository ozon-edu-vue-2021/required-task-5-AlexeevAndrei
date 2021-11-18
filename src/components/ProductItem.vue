<template>
  <BCard
    :title="product.dish"
    :img-src="product.image"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem"
    class="mb-2"
  >
    <BRow class="mb-3" align-v="center">
      <BCol md="5">
        <BCardText> Цена: {{ product.price }} р. </BCardText>
      </BCol>
      <BCol md="7">
        <BFormInput
          type="number"
          placeholder="Количество"
          min="0"
          max="20"
          v-model="product.count"
        ></BFormInput>
      </BCol>
    </BRow>

    <div class="group-button">
      <BButton
        :class="{ 'delete-button': product.inCart }"
        variant="danger"
        @click="addToCart"
        >{{ getCartButtonText }}</BButton
      >
      <BButton
        :class="{ 'favorite-button': product.favorite }"
        variant="success"
        @click="addToFavorite"
        >{{ getFavoriteButtonText }}</BButton
      >
    </div>
  </BCard>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "ProductItem",
  props: {
    product: {
      type: Object,
      require: true,
    },
  },

  methods: {
    ...mapActions("products", [
      "addProductToCart",
      "addProductToFavorite",
      "removeProductFromCart",
    ]),
    addToCart() {
      if (this.product.inCart) {
        this.removeProductFromCart(this.product);
      } else {
        this.addProductToCart(this.product);
      }
    },

    addToFavorite() {
      this.addProductToFavorite(this.product);
    },
  },

  computed: {
    getFavoriteButtonText() {
      return this.product.favorite ? "Удалить из избранного" : "В избранное";
    },

    getCartButtonText() {
      return this.product.inCart ? "Удалить из корзины" : "В корзину";
    },
  },
};
</script>

<style scoped>
.group-button {
  display: flex;
  justify-content: space-between;
  margin-top: auto;
}

.delete-button,
.favorite-button {
  font-size: 14px;
}
</style>
