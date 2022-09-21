<template>
  <section class="py-12 w-full my-14 lg:max-w-screen-lg lg:m-auto">
    <div class="flex items-center w-full">
      <div class="w-1/2 overflow-hidden">
        <img :src="component.image" :alt="component.image" />
      </div>
      <div class="w-1/2 pl-10">
        <div class="mb-3">
          <span class="font-semibold">Category :</span>
          {{ component.category }}
        </div>
        <div class="mb-3">
          <span class="font-semibold">Product Name :</span>
          {{ component.name }}
        </div>
        <div class="mb-3">
          <span class="font-semibold">Price :</span> {{ component.price }}$
        </div>
        <div class="mb-3">
          <span class="font-semibold">Description :</span>
          {{ component.description }}
        </div>
        <a
          href="javascript:;"
          :id="component.id"
          class="
            flex
            justify-center
            font-semibold
            bg-gray-300
            text-gray-900
            hover:bg-gray-600 hover:text-white
            py-2
            px-5
            mt-10
            rounded-lg
            transition-colors
          "
          >Add to Cart</a
        >
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: "detail",
  props:['component']
};
</script>
