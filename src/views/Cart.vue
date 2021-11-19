<template>
  <div>
    <h3>Корзина</h3>
    <BRow>
      <BCol md="9">
        <BContainer class="products">
          <CartItem
            v-for="product in getCart"
            :key="product.id"
            :product="product"
          />
        </BContainer>
      </BCol>
      <BCol md="3">
        <BCard :title="`Сумма заказа: ${getOrderPrice} р.`">
          <BButton variant="success" @click="confirmOrderHandler"
            >Оформить заказ
          </BButton>
        </BCard>
      </BCol>
    </BRow>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CartItem from "../components/CartItem.vue";

export default {
  name: "Cart",

  components: {
    CartItem,
  },

  computed: {
    ...mapGetters("products", ["getCart", "getOrderPrice", "getOrderList"]),
  },

  methods: {
    confirmOrderHandler() {
      window.alert(this.getOrderList);
    },
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
