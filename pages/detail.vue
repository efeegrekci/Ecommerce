<template>
  <main>
    <Header />
    <Detail />
    <Footer />
  </main>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import Detail from "../components/Detail.vue";
export default {
  name: "DetailPage",
  components: { Header, Footer, Detail },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;800&display=swap");

body {
  font-family: "Inter", sans-serif;
}
</style>