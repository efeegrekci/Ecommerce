<template>
  <section>
    <Slider :sliderData="sData" />
    <section class="px-3 w-full my-14 sm:px-5 lg:max-w-screen-lg lg:m-auto">
      <Product v-if="isLoadData" :productData="data" :pageCount="pageCountTotal" :pageSize="pageSize" :loadMoreButton="loadBtnVal" />
    </section>
    <AlertBox />
  </section>
</template>

<script>
export default {
  name: "IndexPage",
  layout: "default",
  data() {
    return {
      data: [],
      sData: [],
      pageCountTotal: null,
      pageSize: "4",
      loadBtnVal: false,
      isLoadData: false
    };
  },
  async fetch() {
    try {
      const { data } = await this.$axios.get(`api/products?&pagination[page]=1&pagination[pageSize]=${this.pageSize}&populate=*`);
      this.data = data.data;
      this.pageCountTotal = data.meta.pagination.pageCount
      this.isLoadData = true

    } catch (ex) {
      alert("Api Error")
    }
    try {
      const { data } = await this.$axios.get(`api/banners?populate=*`);
      this.sData = data.data;
    } catch (ex) {
      alert("Api Error")
    }
  },

};
</script>
