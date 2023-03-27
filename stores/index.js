import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
  state: () => ({
    cartData: [],
    cartTotalPrice: 0,
    cartActive: false,
    addedToCart: false,
    productName: ""
    
  }),
  getters: {},
  actions: {},
});
