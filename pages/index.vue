<template>
  <main>
    <Header :cartData="cart"/>
    <Product :cartData="cart"/>
    <Footer />
  </main>
</template>

<script>
import Header from "../components/Header.vue";
import Product from "../components/Product.vue";
import Footer from "../components/Footer.vue";
export default {
  name: "IndexPage",
  components: { Header, Product, Footer },
  data() {
      return {
        cart: [],
      };
    },
    mounted() {
      if(localStorage.getItem('cart') !== null){
        this.cart = (JSON.parse(localStorage.getItem('cart')));
      }
    },
};
</script>



<style>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;800&display=swap");

body {
  font-family: "Inter", sans-serif;
}
a.nuxt-link-exact-active {
  color: #00c58e;
}
a.nuxt-link-exact-active:hover {
  color: #00c58e;
}
</style>