<template>
  <section class="px-3 w-full my-14 sm:px-5 lg:max-w-screen-lg lg:m-auto">
    <ul
      class="
        grid
        gap-3
        grid-cols-1
        sm:gap-5 sm:grid-cols-2
        lg:grid-cols-3
        xl:grid-cols-4
      "
    >
      <li
        v-for="(item, index) in productData"
        :key="index"
        class="w-full flex items-center justify-center flex-col py-5 group"
      >
        <NuxtLink :to="`/detail/${item.url}`" class="mb-3">
          <div class="text-center font-normal mb-3 px-5 text-sm text-gray-700">
            {{ item.name }}
          </div>
          <div class="flex justify-center mb-5 overflow-hidden w-56 h-56">
            <img
              :src="item.image"
              alt="Product"
              class="hover:scale-110 transition-all object-contain"
            />
          </div>
          <div class="text-center font-bold text-xl text-gray-700">
            {{ item.price }}$
          </div>
        </NuxtLink>
        <div
          href="javascript:;"
          :id="item.id"
          class="
            flex
            justify-center
            font-semibold
            bg-gray-300
            text-gray-900
            hover:bg-gray-600 hover:text-white
            py-2
            px-5
            rounded-lg
            transition-colors
            cursor-pointer
          "
          @click="addToCart(item)"
        >
          Add to Cart
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
import { useCounterStore } from '@/stores/counter'

export default {
  name: "Product",
  setup() {
    const store = useCounterStore()

    return {
      store,
    }
  },
  data() {
    return {
      productData: {},
      cartTotalPrice: 0,
    };
  },
  async fetch() {
    try {
      const { data } = await this.$axios.get(`/63231094390f92a401803bfa`);
      this.productData = data.products;
    } catch (ex) {}
  },
  methods: {
    addToCart(product) {
      this.store.cartActive = true;

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
    }
  },
  watch: {
    cartData: {
      handler: function (val) {
        this.cartTotalPrice = 0;
        val.forEach((element) => {
          this.cartTotalPrice =
            this.cartTotalPrice +
            parseInt(element.price) * parseInt(element.count);
        });
      },
      deep: true,
    },
  },
};
</script>
