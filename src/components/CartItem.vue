<template>
  <BCard no-body class="overflow-hidden mb-4" style="max-width: 460px">
    <BRow no-gutters>
      <BCol md="6">
        <BCardImg :src="product.image" alt="Image" class="rounded-0" />
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
            v-model="product.count"
          />
          <BButton
            class="remove-button"
            variant="danger"
            @click="removeProductFromCart(product)"
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
  name: "CartItem",
  props: {
    product: {
      type: Object,
      require: true,
    },
  },

  methods: {
    ...mapActions("products", ["removeProductFromCart"]),
  },
};
</script>
<style scoped>
.remove-button {
  margin-top: 10px;
}
</style>
