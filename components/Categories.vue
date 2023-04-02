<template>
  <ul class="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-5 sm:px-8">
    <li v-for="(item, index) in categoryData" :key="index"
      class="w-full flex items-center justify-center flex-col group sm:mb-5">
      <NuxtLink class="flex flex-col-reverse sm:flex-col" :to="`/categories/${item.attributes.name.toLowerCase()}`">
        <div class="flex justify-center mt-3 sm:mt-0 sm:mb-3 overflow-hidden rounded-lg">
          <img :src="`http://localhost:1337${item.attributes.image.data.attributes.url}`" :alt="item.attributes.name"
            class="hover:scale-150 transition-all duration-1000 ease-out" />
        </div>
        <div class="text-center font-bold text-xl text-gray-500">
          {{ item.attributes.name }}
        </div>
      </NuxtLink>
    </li>
  </ul>
</template>

<script>
export default {
  name: "Categories",
  props: ['categoryData']
};
</script>
