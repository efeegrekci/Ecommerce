<template>
  <Detail :component="page" />
</template>

<script>
  export default {
    name: "DetailPageId",
    layout: "default",
    data() {
      return {
        page: {},
      };
    },
    async fetch() {
      const { data } = await this.$axios.get("/63231094390f92a401803bfa");
      this.page = data.products.find((item) => item.url === $nuxt.$route.params.id);
      console.log($nuxt.$route)
      console.log( $nuxt.$route.params.id)
    },
  };
  </script>