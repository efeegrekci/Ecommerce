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

<style>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;800&display=swap");

body {
  font-family: "Inter", sans-serif;
}
</style>