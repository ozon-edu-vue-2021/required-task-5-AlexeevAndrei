<template>
  <div>
    <BRow>
      <BCol md="9">
        <BContainer class="products">
          <BasketItem
            v-for="product in getBasket"
            :key="product.id"
            :product="product"
          />
        </BContainer>
      </BCol>
      <BCol md="3">
        <BCard :title="`Сумма заказа: ${getOrderPrice}`">
          <BButton variant="success">Оформить заказ</BButton>
        </BCard>
      </BCol>
    </BRow>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import BasketItem from "./BasketItem.vue";

export default {
  name: "Basket",
  components: {
    BasketItem,
  },
  computed: {
    ...mapGetters("products", ["getBasket", "getOrderPrice"]),
  },
};
</script>

<style scoped>
.products {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
