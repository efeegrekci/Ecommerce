<template>
  <div
    v-if="store.addedToCart"
    class="w-56 bg-white shadow-lg border-t-4 border-green-500 p-4 rounded fixed bottom-0 right-0 m-5 flex flex-col items-center justify-center"
  >
    <div class="text-gray-600 text-xs font-semibold mb-1">
      {{ store.productName }}
    </div>
    <div class="text-gray-900 text-base font-semibold flex items-center">
      <img src="/img/cart.svg" alt="cart" class="w-8 xl:w-10 mr-2" />Added To
      Cart
    </div>
  </div>
</template>

<script>
import { useCartStore } from "@/stores/index";
export default {
  name: "Toast",
  setup() {
    const store = useCartStore();
    return {
      store,
    };
  },
};
</script>
