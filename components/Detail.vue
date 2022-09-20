<template>
  <section class="py-12 w-full my-14 lg:max-w-screen-lg lg:m-auto">
    <div class="flex items-center w-full">
      <div class="w-1/2 overflow-hidden">
        <img :src="productDetail.imageLink" alt="phone" />
      </div>
      <div class="w-1/2 pl-10">
        <div class="mb-3">
          <span class="font-semibold">Category :</span>
          {{ productDetail.category }}
        </div>
        <div class="mb-3">
          <span class="font-semibold">Product Name :</span>
          {{ productDetail.name }}
        </div>
        <div class="mb-3">
          <span class="font-semibold">Price :</span> {{ productDetail.price }}$
        </div>
        <div class="mb-3">
          <span class="font-semibold">Description :</span>
          {{ productDetail.description }}
        </div>
        <a
          href="javascript:;"
          :id="productDetail.id"
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
  name: "Detail",
  data() {
    return {
      productDetail: {
        id: 1,
        imageLink: "/img/products/phone.jpg",
        name: "Apple Iphone 13 256 GB",
        price: 300,
        category: "Technology",
        description:
          "Description : Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore eligendi ut quis, facere et quod iste omnis est ullam magni.",
      },
    };
  },
  mounted() {

  },
};
</script>
