<template>
  <BCard no-body class="overflow-hidden mb-4" style="max-width: 460px">
    <BRow no-gutters>
      <BCol md="6">
        <BCardImg :src="product.image" alt="Image" class="rounded-0"></BCardImg>
      </BCol>
      <BCol md="6">
        <BCardBody :title="product.dish">
          <BCardText> Цена: {{ product.price }} руб. </BCardText>
        </BCardBody>
        <BCardBody align="center">
          <BFormInput
            type="number"
            placeholder="Количество"
            min="0"
            max="20"
          ></BFormInput>
          <BButton
            class="remove-button"
            variant="danger"
            @click="removeBasketItem"
            >Удалить из корзины
          </BButton>
        </BCardBody>
      </BCol>
    </BRow>
  </BCard>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "BasketItem",
  props: {
    product: {
      type: Object,
      require: true,
    },
  },

  methods: {
    ...mapActions("products", ["removeProductFromBasket"]),
    removeBasketItem() {
      this.removeProductFromBasket(this.product.id);
    },
  },
};
</script>
<style scoped>
.remove-button {
  margin-top: 10px;
}
</style>
