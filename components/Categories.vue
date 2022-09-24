<template>
  <section class="w-full my-14 max-w-screen-lg m-auto py-5">
    <ul class="grid gap-8 grid-cols-3">
      <li
        v-for="(item, index) in categoryData"
        :key="index"
        class="w-full flex items-center justify-center flex-col group mb-5"
      >
        <NuxtLink :to="item.url">
          <div class="flex justify-center mb-3 overflow-hidden rounded-lg">
            <img
              :src="item.image"
              :alt="item.alt"
              class="hover:scale-110 transition-all"
            />
          </div>
          <div class="text-center font-bold text-xl text-gray-500">
            {{ item.name }}
          </div>
        </NuxtLink>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "Categories",
  data() {
    return {
      categoryData: {},
    };
  },
  async fetch() {
    try {
      const { data } = await this.$axios.get(`/632e470f0245157566f4cc51`);
      this.categoryData = data.categories;
    } catch (ex) {}
  },
};
</script>
