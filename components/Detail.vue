<template>
  <section class="py-12 w-full my-14 lg:max-w-screen-lg lg:m-auto">
    <div class="flex items-center w-full">
      <div class="w-1/2 overflow-hidden">
        <img :src="page.image" :alt="page.image" />
      </div>
      <div class="w-1/2 pl-10">
        <div class="mb-3">
          <span class="font-semibold">Category :</span>
          {{ page.category }}
        </div>
        <div class="mb-3">
          <span class="font-semibold">Product Name :</span>
          {{ page.name }}
        </div>
        <div class="mb-3">
          <span class="font-semibold">Price :</span> {{ page.price }}$
        </div>
        <div class="mb-3">
          <span class="font-semibold">Description :</span>
          {{ page.description }}
        </div>
        <a
          href="javascript:;"
          :id="page.id"
          @click="addToCart()"
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
import { useCartStore } from "@/stores/index";

export default {
  name: "detail",
  setup() {
    const store = useCartStore();
    return {
      store,
    };
  },
  data() {
    return {
      page: {},
    };
  },
  async fetch() {
    const { data } = await this.$axios.get("/63231094390f92a401803bfa");
    this.page = data.products.find(
      (item) => item.url === $nuxt.$route.params.detail
    );
    // console.log($nuxt.$route);
    // console.log($nuxt.$route.params.detail);
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
    },
  },
};
</script>
