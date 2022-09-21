import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
  state: () => ({
    count:0,
    cartData: [],
    cartTotalPrice: 0,
    cartActive: false,
  }),
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  actions: {
    increment() {
      this.count++;
    },
  },
});
