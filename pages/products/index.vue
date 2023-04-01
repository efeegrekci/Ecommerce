<template>
  <section v-if="isLoadData" class="px-3 w-full my-14 sm:px-5 lg:max-w-screen-lg lg:m-auto">
    <Product :productData="data" :pageCount="pageCountTotal" :pageSize="pageSize" :loadMoreButton="loadBtnVal" />
  </section>
</template>

<script>
export default {
  name: "ProductsPage",
  layout: "default",
  data() {
    return {
      data: [],
      pageCountTotal: null,
      pageSize: "8",
      loadBtnVal: true,
      isLoadData: false,
    };
  },
  async fetch() {
    try {
      const { data } = await this.$axios.get(`api/products?&pagination[page]=1&pagination[pageSize]=${this.pageSize}&populate=*`);
      this.data = data.data;
      this.pageCountTotal = data.meta.pagination.pageCount;
      this.isLoadData = true;
    } catch (ex) {
      alert("Api Error")
    }
  },
};
</script>
