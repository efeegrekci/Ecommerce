<template>
  <main>
    <Header />
    <Nuxt keep-alive />
    <Toasted />
    <Footer />
  </main>
</template>
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
    "store.cartData": {
      handler: function (val) {
        this.store.cartTotalPrice = 0;
        val.forEach((element) => {
          this.store.cartTotalPrice =
            this.store.cartTotalPrice +
            parseInt(element.attributes.price) * parseInt(element.count);
        });
      },
      deep: true,
    },
  },
};
</script>