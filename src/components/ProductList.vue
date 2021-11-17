<template>
  <BContainer class="products">
    <ProductItem
      v-for="product in getProducts"
      :key="product.id"
      :product="product"
    />
  </BContainer>
</template>
<script>
import ProductItem from "./ProductItem.vue";
import { mapGetters } from "vuex";
export default {
  name: "ProductList",
  components: {
    ProductItem,
  },

  computed: {
    ...mapGetters("products", ["getProducts"]),
  },
};
</script>
<style scoped>
.products {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
