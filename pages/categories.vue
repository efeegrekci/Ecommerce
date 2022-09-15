<template>
  <main>
    <Header />
    <Categories />
    <Footer />
  </main>
</template>

<script>
import Header from "../components/Header.vue";
import Categories from "../components/Categories.vue";
import Footer from "../components/Footer.vue";
export default {
  name: "CategoryPage",
  components: { Header, Categories, Footer },
};
</script>
