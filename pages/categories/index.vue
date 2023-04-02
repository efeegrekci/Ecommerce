<template>
  <section class="w-full max-w-screen-lg m-auto">
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
