<template>
  <section
    v-if="isLoad"
    class="px-3 w-full my-14 sm:px-5 lg:max-w-screen-lg lg:m-auto"
  >
    <ul
      class="grid gap-3 grid-cols-1 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
    >
      <li
        v-for="(item, index) in productData"
        :key="index"
        class="w-full flex items-center justify-center flex-col py-5 group"
      >
        <NuxtLink :to="`/products/${item.id}`" class="mb-3">
          <div
            v-if="!!item.attributes && !!item.attributes.name"
            class="text-center font-normal mb-3 px-5 text-sm text-gray-700"
          >
            {{ item.attributes.name }}
          </div>
          <div class="flex justify-center mb-5 overflow-hidden w-56 h-56">
            <img
              :src="`http://localhost:1337${item.attributes.image.data.attributes.url}`"
              :alt="item.attributes.image.data.attributes.name"
              class="hover:scale-110 transition-all object-contain"
            />
          </div>
          <div class="text-center font-bold text-xl text-gray-700">
            {{ item.attributes.price }}$
          </div>
        </NuxtLink>
        <div
          href="javascript:;"
          :id="item.attributes.id"
          class="flex justify-center font-semibold bg-gray-300 text-gray-900 hover:bg-gray-600 hover:text-white py-2 px-5 rounded-lg transition-colors cursor-pointer"
          @click="addToCart(item)"
        >
          Add to Cart
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
import { useCartStore } from "@/stores/index";

export default {
  name: "Product",
  props: ["pageSize"],
  setup() {
    const store = useCartStore();
    return {
      store,
    };
  },
  data() {
    return {
      productData: {},
      isLoad: false,
    };
  },
  async fetch() {
    try {
      const { data } = await this.$axios.get(`api/products?&pagination[page]=1&pagination[pageSize]=${this.pageSize}&populate=*`);
      this.productData = data.data;
      this.isLoad = true;
    } catch (ex) {}
  },
  methods: {
    addToCart(product) {
      let isNotSame = true;
      this.store.cartData.forEach((element, index) => {
        if (product.id == element.id) {
          product.count = element.count + 1;
          this.$set(this.store.cartData, index, product);
          isNotSame = false;
        }
      });

      if (isNotSame) {
        product["count"] = 1;
        this.store.cartData.push(product);
      }

      localStorage.setItem("cart", JSON.stringify(this.store.cartData));

      this.store.productName = product.attributes.name;
      this.store.addedToCart = true;
      setTimeout(() => {
        this.store.addedToCart = false;
      }, 3000);

    },
  },
};
</script>
