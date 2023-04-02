<template>
  <div class="productBox">
    <h1 class="text-3xl text-center w-full font-semibold pt-5 pb-10 text-stone-700 uppercase">Products</h1>
    <ul class="grid gap-3 grid-cols-1 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <li v-for="(item, index) in productDataClone" :key="index"
        class="w-full flex items-center justify-center flex-col py-5 group">
        <NuxtLink :to="`/products/${item.attributes.url}`" class="mb-3">
          <div class="text-center font-normal mb-3 px-5 text-sm text-gray-700">
            {{ item.attributes.name }}
          </div>
          <div class="flex justify-center mb-5 overflow-hidden w-56 h-56">
            <img :src="`http://localhost:1337${item.attributes.image.data.attributes.url}`"
              :alt="item.attributes.image.data.attributes.name" class="hover:scale-110 transition-all object-contain" />
          </div>
          <div class="text-center font-bold text-xl text-gray-700">
            {{ item.attributes.price }}$
          </div>
        </NuxtLink>
        <div href="javascript:;" :id="item.attributes.id"
          class="flex justify-center font-semibold bg-gray-300 text-gray-900 hover:bg-gray-600 hover:text-white py-2 px-5 rounded-lg transition-colors cursor-pointer"
          @click="addToCart(item)">
          Add to Cart
        </div>
      </li>
    </ul>
    <div v-show="loadMoreButton" v-if="pageCount > page" class="w-full flex justify-center mt-10" @click="loadMore()">
      <span
        class="cursor-pointer text-base text-center transition-colors bg-gray-900 text-white hover:bg-gray-300 hover:text-gray-900 font-semibold rounded-lg py-2 px-5">Daha
        Fazla Yükle</span>
    </div>
  </div>
</template>

<script>
import { useCartStore } from "@/stores/index";

export default {
  name: "Product",
  props: ["productData", "pageCount", "pageSize", "loadMoreButton"],
  setup() {
    const store = useCartStore();
    return {
      store,
    };
  },
  data() {
    return {
      productDataClone: this.productData,
      page: 1
    };
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

      this.store.productName.push(product.attributes.name);
      setTimeout(() => {
        this.store.productName.shift()
      }, 5000);

    },
    async loadMore() {
      try {
        this.page++
        if (this.pageCount >= this.page) {
          const { data } = await this.$axios.get(`api/products?&pagination[page]=${this.page}&pagination[pageSize]=${this.pageSize}&populate=*`);
          this.productDataClone = this.productDataClone.concat(data.data);
        }

      } catch (ex) {
        alert("Api Error")
      }
    }
  },
};
</script>
