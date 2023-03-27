<template>
  <section
    v-if="isLoad"
    class="md:py-12 w-full md:my-14 lg:max-w-screen-lg lg:m-auto"
  >
    <div class="flex items-center w-full flex-col md:flex-row">
      <div class="md:w-1/2 px-5 overflow-hidden">
        <img
          :src="`http://localhost:1337${page.attributes.image.data.attributes.url}`"
          :alt="page.attributes.image.data.attributes.name"
        />
      </div>
      <div class="md:w-1/2 px-5 md:pl-10">
        <div class="mb-3 capitalize">
          <span class="font-semibold">Category :</span>
          {{ page.attributes.category.data.attributes.name }}
        </div>
        <div class="mb-3 capitalize">
          <span class="font-semibold">Product Name :</span>
          {{ page.attributes.name }}
        </div>
        <div class="mb-3 capitalize">
          <span class="font-semibold">Price :</span>
          {{ page.attributes.price }}$
        </div>
        <div class="mb-3 capitalize">
          <span class="font-semibold">Description :</span>
          <!-- {{ page.attributes.description}} -->
          <span v-html="page.attributes.description"></span>
        </div>
        <a
          href="javascript:;"
          :id="page.id"
          @click="addToCart()"
          class="flex justify-center font-semibold bg-gray-300 text-gray-900 hover:bg-gray-600 hover:text-white py-2 px-5 mt-10 rounded-lg transition-colors"
          >Add to Cart</a
        >
      </div>
    </div>
  </section>
</template>

<script>
import { useCartStore } from "@/stores/index";

export default {
  name: "ProductDetail",
  setup() {
    const store = useCartStore();
    return {
      store,
    };
  },
  data() {
    return {
      page: {},
      isLoad: false,
      routePathId: null,
    };
  },
  async fetch() {
    try {
      this.routePathId = $nuxt.$route.params.detail;
      const { data } = await this.$axios.get(
        `api/products/${this.routePathId}?populate=*`
      );
      this.page = data.data;
      this.isLoad = true;
    } catch (ex) {}
  },
  methods: {
    addToCart() {
      this.store.cartActive = true;

      let isNotSame = true;
      this.store.cartData.forEach((element, index) => {
        if (this.page.id == element.id) {
          this.page.count = element.count + 1;
          this.$set(this.store.cartData, index, this.page);
          isNotSame = false;
        }
      });

      if (isNotSame) {
        this.page["count"] = 1;
        this.store.cartData.push(this.page);
      }

      localStorage.setItem("cart", JSON.stringify(this.store.cartData));

      this.store.productName = this.page.attributes.name
      this.store.addedToCart = true;
      setTimeout(() => {
        this.store.addedToCart = false;
      }, 3000);
    },
  },
};
</script>
