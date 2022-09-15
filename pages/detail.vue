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
