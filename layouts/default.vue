<template>
  <main>
    <Header />
    <Nuxt keep-alive />
    <Footer />
    <Warning />
  </main>
</template>
<style>
body {
  @apply overflow-hidden overflow-y-scroll;
}
</style>
<script>
import { useCartStore } from "@/stores/index";
export default {
  name: "default",
  setup() {
    const store = useCartStore();
    return {
      store,
    };
  },
  mounted() {
    if (localStorage.getItem("cart") !== null) {
      this.store.cartData = JSON.parse(localStorage.getItem("cart"));
    }
  },
  watch: {
    'store.cartData': {
      handler: function (val) {
        this.store.cartTotalPrice = 0;
        val.forEach((element) => {
          this.store.cartTotalPrice =
            this.store.cartTotalPrice +
            parseInt(element.price) * parseInt(element.count);
        });
      },
      deep: true,
    },
  },
};
</script>