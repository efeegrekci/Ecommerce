<template>
  <section v-if="isLoadData" 
    class="md:py-12 w-full md:my-14 lg:max-w-screen-lg lg:m-auto">
    <ProductDetail :productData="data" />
  </section>
</template>

<script>
export default {
  name: "DetailPage",
  layout: "default",
  data() {
    return {
      data: {},
      routePathId: null,
      isLoadData: false,
    };
  },
  async fetch() {
    try {
      this.routePathId = $nuxt.$route.params.detail;
      const { data } = await this.$axios.get(
        `api/products/${this.routePathId}?populate=*`
      );
      this.data = data.data;
      this.isLoadData = true;
    } catch (ex) {
      alert("Api Error")
    }
  },
};
</script>