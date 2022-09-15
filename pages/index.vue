<template>
  <main>
    <Header :cartData="cart"/>
    <Product :cartData.sync="cart"/>
    <Footer />
  </main>
</template>

<script>
export default {
  name: "IndexPage",
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
