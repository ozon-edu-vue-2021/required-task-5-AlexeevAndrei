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
        ></BFormInput>
      </BCol>
    </BRow>

    <div class="group-button">
      <BButton variant="danger" @click="addToBasket">В корзину</BButton>
      <BButton variant="success">В избранное</BButton>
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
    ...mapActions("products", ["addProductToBasket"]),
    addToBasket() {
      this.addProductToBasket(this.product.id);
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
</style>
