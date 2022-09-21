<template>
  <main>
    <Header />
    <Nuxt keep-alive />
    <Footer />
  </main>
</template>
<script>
import { useCounterStore } from "@/stores/counter";
export default {
  name: "default",
  setup() {
    const store = useCounterStore();
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