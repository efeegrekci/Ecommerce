<template>
  <section class="w-full lg:my-14 max-w-screen-lg m-auto py-5">
    <Categories v-if="isLoadData" :categoryData="data" />
  </section>
</template>

<script>
export default {
  name: "CategoryPage",
  layout: "default",
  data() {
    return {
      data: [],
      isLoadData: false,
    }
  },
  async fetch() {
    try {
      const { data } = await this.$axios.get(`api/categories?populate=*`);
      this.data = data.data;
      this.isLoadData = true;
    } catch (ex) {
      alert("Api Error")
    }
  }
};
</script>
