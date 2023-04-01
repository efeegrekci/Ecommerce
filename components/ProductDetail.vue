<template>
  <div class="flex items-center w-full flex-col md:flex-row">
    <div class="md:w-1/2 px-5 overflow-hidden">
      <img :src="`http://localhost:1337${productData.attributes.image.data.attributes.url}`"
        :alt="productData.attributes.image.data.attributes.name" />
    </div>
    <div class="md:w-1/2 px-5 md:pl-10">
      <div class="mb-3 capitalize">
        <span class="font-semibold">Category :</span>
        {{ productData.attributes.category.data.attributes.name }}
      </div>
      <div class="mb-3 capitalize">
        <span class="font-semibold">Product Name :</span>
        {{ productData.attributes.name }}
      </div>
      <div class="mb-3 capitalize">
        <span class="font-semibold">Price :</span>
        {{ productData.attributes.price }}$
      </div>
      <div class="mb-3 capitalize">
        <span class="font-semibold">Description :</span>
        <span v-html="productData.attributes.description"></span>
      </div>
      <a href="javascript:;" :id="productData.id" @click="addToCart()"
        class="flex justify-center font-semibold bg-gray-300 text-gray-900 hover:bg-gray-600 hover:text-white py-2 px-5 mt-10 rounded-lg transition-colors">Add
        to Cart</a>
    </div>
  </div>
</template>

<script>
import { useCartStore } from "@/stores/index";

export default {
  name: "ProductDetail",
  props: ["productData"],
  setup() {
    const store = useCartStore();
    return {
      store,
    };
  },
  methods: {
    addToCart() {
      let isNotSame = true;
      this.store.cartData.forEach((element, index) => {
        if (this.productData.id == element.id) {
          this.productData.count = element.count + 1;
          this.$set(this.store.cartData, index, this.productData);
          isNotSame = false;
        }
      });

      if (isNotSame) {
        this.productData["count"] = 1;
        this.store.cartData.push(this.productData);
      }

      localStorage.setItem("cart", JSON.stringify(this.store.cartData));

      this.store.productName.push(this.productData.attributes.name);
      setTimeout(() => {
        this.store.productName.shift()
      }, 5000);
    },
  },
};
</script>
