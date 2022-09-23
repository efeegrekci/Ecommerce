<template>
  <main>
    <Header />
    <Nuxt keep-alive />
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
};
</script>