import { defineStore } from "pinia";
import { createToastInterface } from "vue-toastification";

const toast = createToastInterface();

export const useCartStore = defineStore("cart", {
  state: () => ({
    cartData: [],
    cartTotalPrice: 0,
    cartActive: false,
    categoryName: ""
  }),
  getters: {},
  actions: {
    successToast(value) {
      toast.success(value, {
        position: "bottom-right",
        timeout: 5000,
        closeOnClick: true,
        pauseOnFocusLoss: true,
        pauseOnHover: true,
        draggable: true,
        draggablePercent: 0.6,
        showCloseButtonOnHover: false,
        hideProgressBar: false,
        closeButton: "button",
        icon: true,
        rtl: false
      });
    }
  },
});
