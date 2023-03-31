import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
  state: () => ({
    cartData: [],
    cartTotalPrice: 0,
    cartActive: false,
    productName: [],
    isActiveMenu: window.innerWidth > 767 ? true : false,
    
  }),
  getters: {},
  actions: {},
});