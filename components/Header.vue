<template>
  <header
    class="w-full bg-white h-20 flex items-center justify-between px-5 xl:px-20 mb-10 shadow-md"
  >
    <NuxtLink to="/" class="overflow-hidden">
      <img src="/img/logo.png" class="w-8 xl:w-10" alt="logo" />
    </NuxtLink>
    <ul class="flex gap-4 xl:gap-10">
      <li>
        <NuxtLink
          to="/"
          class="text-gray-900 font-semibold text-sm xl:text-base hover:text-gray-400 transition-colors"
          >Home</NuxtLink
        >
      </li>
      <li>
        <NuxtLink
          to="/categories"
          class="text-gray-900 font-semibold text-sm xl:text-base hover:text-gray-400 transition-colors"
          >Categories</NuxtLink
        >
      </li>
      <li>
        <NuxtLink
          to="/products"
          class="text-gray-900 font-semibold text-sm xl:text-base hover:text-gray-400 transition-colors"
          >Products</NuxtLink
        >
      </li>
    </ul>
    <a href="javascript:;" class="font-bold relative mr-2.5" @click="cartOpen()">
      <div
        class="text-xs bg-red-600 text-white absolute -right-2 -top-1 rounded-full flex justify-center items-center w-4 h-4 xl:w-5 xl:h-5"
      >
        {{ store.cartData.length }}
      </div>
      <img src="/img/cart.svg" class="w-8 xl:w-10" alt="cart" />
    </a>
    <div
      class="opacity-0 invisible absolute bg-white right-0 top-20 w-full sm:w-96 shadow-md p-5 sm:pr-12 pt-12 rounded-bl-lg z-50"
      :class="{ active: store.cartActive }"
    >
      <div class="absolute right-5 top-5">
        <img
          src="/img/xmark-solid.svg"
          alt="xmark"
          class="w-3 cursor-pointer"
          @click="cartClose"
        />
      </div>
      <ul class="group last:mb-0">
        <li
          v-for="(item, index) in store.cartData"
          :key="index"
          class="flex mb-5 last:mb-0 relative w-full"
        >
          <div class="mr-5 overflow-hidden">
            <img
              :src="`http://localhost:1337${item.attributes.image.data.attributes.url}`"
              alt="phone"
              class="object-cover w-12 h-12 border cursor-pointer"
            />
          </div>
          <div class="mr-5">
            <div class="text-sm text-gray-700 mb-2">
              {{ item.attributes.name }}
            </div>
            <div class="flex">
              <div class="text-sm text-gray-700 text-right font-bold mr-5">
                {{ item.attributes.price }}$
              </div>
              <div class="text-sm text-gray-700 text-right font-bold">
                x{{ item.count }}
              </div>
            </div>
          </div>
          <div
            class="text-sm text-gray-700 font-bold cursor-pointer flex align-center absolute right-0 top-[calc(50%-7px)]"
          >
            <img
              src="/img/trash-solid.svg"
              alt=""
              class="w-3"
              @click="deleteToCart(index)"
            />
          </div>
        </li>
      </ul>
      <div class="flex justify-between items-center mt-5">
        <div class="font-semibold text-md">
          Total : {{ store.cartTotalPrice }}$
        </div>
        <div
          class="flex justify-center font-semibold bg-gray-300 text-gray-900 hover:bg-gray-600 hover:text-white py-2 px-5 rounded-lg transition-colors cursor-pointer text-sm"
        >
          Pay Now
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { useCartStore } from "@/stores/index";
export default {
  name: "Header",
  setup() {
    const store = useCartStore();
    return {
      store,
    };
  },
  methods: {
    deleteToCart(index) {
      this.store.cartData.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(this.store.cartData));
      if (this.store.cartData.length < 1) {
        localStorage.removeItem("cart");
        this.store.cartActive = false;
      }
    },
    cartOpen() {
      if (!this.store.cartData.length < 1) {
        this.store.cartActive = !this.store.cartActive;
      }
    },
    cartClose() {
      this.store.cartActive = false;
    },
  },
};
</script>
