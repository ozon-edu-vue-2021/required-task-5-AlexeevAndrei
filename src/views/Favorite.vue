<template>
  <div>
    <h3>Избранное</h3>
    <BRow>
      <BCol md="9">
        <BContainer class="products">
          <ProductItem
            v-for="product in getFavoriteProducts"
            :key="product.id"
            :product="product"
          />
        </BContainer>
      </BCol>
    </BRow>
  </div>
</template>

<script>
import ProductItem from "../components/ProductItem.vue";
import { mapGetters } from "vuex";
export default {
  name: "Favorite",

  components: {
    ProductItem,
  },

  computed: {
    ...mapGetters("products", ["getFavoriteProducts"]),
  },
};
</script>

<style scoped></style>
