<template>
  <section class="px-3 w-full my-14 sm:px-5 lg:max-w-screen-lg lg:m-auto">
    <Product v-if="isLoadData" :productData="data" :pageCount="pageCountTotal" :pageSize="pageSize"
      :loadMoreButton="loadBtnVal" />
  </section>
</template>

<script>
export default {
  name: "CDetailPage",
  layout: "default",
  data() {
    return {
      data: [],
      pageCountTotal: null,
      pageSize: "8",
      loadBtnVal: false,
      routePathName: null,
      isLoadData: false,
    };
  },
  async fetch() {
    try {
      this.routePathName =
        $nuxt.$route.params.detail[0].toUpperCase() +
        $nuxt.$route.params.detail.substring(1);
      const { data } = await this.$axios.get(
        `api/products?filters[category][name][$eq]=${this.routePathName}&populate=*`
      );
      this.data = data.data;
      this.pageCountTotal = data.meta.pagination.pageCount;
      this.isLoadData = true;
    } catch (ex) {
      alert("Api Error")
    }
  },
};
</script>
