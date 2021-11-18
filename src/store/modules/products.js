import mutations from "@/store/mutations";

const IMAGES = [
  6123150777, 6126039472, 6126040354, 6128597660, 6134992334, 6136170572,
  6136172483, 6140906765, 6142673815, 6142681673, 6142683276, 6148226736,
];

const { SET_PRODUCTS, ADD_TO_CART, REMOVE_FROM_CART, TOGGLE_FAVORITE } =
  mutations;

const productsStore = {
  namespaced: true,

  state: {
    products: [],
    cart: [],
  },

  getters: {
    getProducts(state) {
      return state.products;
    },

    getCart(state) {
      return state.cart;
    },

    getOrderPrice(state) {
      return state.cart.reduce((acc, product) => {
        acc += product.price * product.count;
        return acc;
      }, 0);
    },

    getOrderList(state) {
      return JSON.stringify(
        state.cart.map((cartItem) => ({
          [cartItem.dish]: `${cartItem.count} шт`,
        }))
      );
    },

    getFavoriteProducts(state) {
      return state.products.filter((product) => product.favorite);
    },
  },

  mutations: {
    [SET_PRODUCTS](state, products) {
      let serializeProduct = products.map((product) => ({
        ...product,
        price: Math.floor(Math.random() * 1000) + 1,
        count: 1,
        favorite: false,
        inCart: false,
        image: require(`@/assets/images/${
          IMAGES[Math.floor(Math.random() * 12)]
        }.webp`),
      }));
      state.products = serializeProduct;
    },

    [ADD_TO_CART](state, product) {
      if (state.cart.find((item) => item.id === product.id)) return;
      product.inCart = true;
      state.cart.push(product);
    },

    [REMOVE_FROM_CART](state, index) {
      state.cart.splice(index, 1);
    },

    [TOGGLE_FAVORITE](state, product) {
      product.favorite = !product.favorite;
    },
  },

  actions: {
    async fetchProducts({ commit }) {
      try {
        const response = await fetch(
          " https://random-data-api.com/api/food/random_food?size=30"
        );
        let products = await response.json();
        commit(SET_PRODUCTS, products);
      } catch (err) {
        console.log(err);
      }
    },

    addProductToCart({ commit }, product) {
      commit(ADD_TO_CART, product);
    },

    addProductToFavorite({ commit }, product) {
      commit(TOGGLE_FAVORITE, product);
    },

    removeProductFromCart({ commit, state }, product) {
      product.inCart = false;
      const index = state.cart.findIndex((item) => item.id === product.id);
      if (index !== -1) {
        commit(REMOVE_FROM_CART, index);
      }
    },
  },
};

export default productsStore;
