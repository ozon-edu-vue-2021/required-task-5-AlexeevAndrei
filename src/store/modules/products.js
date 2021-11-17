const IMAGES = [
  6123150777, 6126039472, 6126040354, 6128597660, 6134992334, 6136170572,
  6136172483, 6140906765, 6142673815, 6142681673, 6142683276, 6148226736,
];

const productsStore = {
  namespaced: true,
  state: {
    products: [],
    basket: [],
  },
  getters: {
    getProducts(state) {
      return state.products;
    },

    getBasket(state) {
      return state.basket;
    },

    getOrderPrice(state) {
      return state.basket.reduce((acc, product) => {
        acc += product.price;
        return acc;
      }, 0);
    },
  },
  mutations: {
    SET_PRODUCTS(state, products) {
      let serializeProduct = products.map((product) => ({
        ...product,
        price: Math.floor(Math.random() * 1000) + 1,
        counter: 0,
        image: require(`@/assets/images/${
          IMAGES[Math.floor(Math.random() * 12)]
        }.webp`),
      }));
      state.products = serializeProduct;
    },

    ADD_TO_BASKET(state, product) {
      state.basket.push(product);
    },

    REMOVE_FROM_BASKET(state, index) {
      state.basket.splice(index, 1);
    },
  },
  actions: {
    async fetchProducts({ commit }) {
      try {
        const response = await fetch(
          " https://random-data-api.com/api/food/random_food?size=30"
        );
        let products = await response.json();
        commit("SET_PRODUCTS", products);
      } catch (err) {
        console.log(err);
      }
    },

    addProductToBasket({ commit, state }, id) {
      const product = state.products.find((product) => product.id === id);
      commit("ADD_TO_BASKET", product);
    },

    removeProductFromBasket({ commit, state }, id) {
      const index = state.basket.findIndex((product) => product.id === id);
      if (index !== -1) {
        commit("REMOVE_FROM_BASKET", index);
      }
    },
  },
};

export default productsStore;
