<template>
  <section class=" w-full md:my-14 lg:max-w-screen-lg lg:m-auto">
    <ProductDetail v-if="isLoadData" :productData="data" />
  </section>
</template>

<script>
export default {
  name: "DetailPage",
  layout: "default",
  data() {
    return {
      data: [],
      routePathName: null,
      isLoadData: false,
    };
  },
  async fetch() {
    try {
      this.routePathName = $nuxt.$route.params.detail;
      const { data } = await this.$axios.get(
        `/api/products/?filters[url][$eq]=${this.routePathName}&populate=*`
      );
      this.data = data.data[0];
      this.isLoadData = true;
    } catch (ex) {
      alert("Api Error")
    }
  },
};
</script>