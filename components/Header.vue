<template>
  <header class="w-full bg-white h-20 flex items-center justify-between px-5 xl:px-20 mb-10 shadow-md relative">
    <div class="w-10 h-8 flex flex-col justify-center gap-1.5 transform cursor-pointer md:hidden"
      @click="hamburgerClick()" ref="hamBtn">
      <span class="block h-0.5 w-7 bg-gray-900 bg-current transform transition duration-500 ease-in-out"></span>
      <span class="block h-0.5 w-5 bg-gray-900 bg-current transform transition duration-500 ease-in-out"></span>
      <span class="block h-0.5 w-7 bg-gray-900 bg-current transform  transition duration-500 ease-in-out"></span>
    </div>
    <NuxtLink to="/" class="overflow-hidden">
      <img src="/img/logo.png" class="w-8 xl:w-10" alt="logo" />
    </NuxtLink>
    <ul v-if="store.isActiveMenu "
      class="gap-4 xl:gap-10 flex flex-col md:flex-row absolute md:relative top-20 md:top-0 left-0 bg-white w-full md:w-auto shadow-md md:shadow-inherit p-5 z-10 md:flex">
      <li class="text-center">
        <NuxtLink to="/" class="text-gray-900 font-semibold text-sm xl:text-base hover:text-gray-400 transition-colors">
          Home</NuxtLink>
      </li>
      <li class="text-center">
        <NuxtLink to="/categories"
          class="text-gray-900 font-semibold text-sm xl:text-base hover:text-gray-400 transition-colors">Categories
        </NuxtLink>
      </li>
      <li class="text-center">
        <NuxtLink to="/products"
          class="text-gray-900 font-semibold text-sm xl:text-base hover:text-gray-400 transition-colors">Products
        </NuxtLink>
      </li>
    </ul>
    <a href="javascript:;" class="w-10 font-bold relative" @click="cartOpen()">
      <div
        class="text-xs bg-red-600 text-white absolute right-0 top-0 rounded-full flex justify-center items-center w-4 h-4 xl:w-5 xl:h-5 xl:-right-2">
        {{ store.cartData.length }}
      </div>
      <img src="/img/cart.svg" class="w-8 xl:w-10" alt="cart" />
    </a>
    <div
      class="opacity-0 invisible absolute bg-white right-0 top-20 w-full sm:w-96 shadow-md p-5 pt-12 rounded-bl-lg z-10"
      :class="{ active: store.cartActive }">
      <div class="absolute right-5 top-2">
        <img src="/img/xmark-solid.svg" alt="xmark" class="w-3 cursor-pointer" @click="cartClose" />
      </div>
      <ul class="group last:mb-0">
        <li v-for="(item, index) in store.cartData" :key="index" class="flex mb-5 last:mb-0 relative w-full">
          <div class="mr-5 overflow-hidden">
            <img :src="`http://localhost:1337${item.attributes.image.data.attributes.url}`" alt="phone"
              class="object-cover w-12 h-12 border cursor-pointer" />
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
            class="text-sm text-gray-700 font-bold cursor-pointer flex align-center absolute right-0 top-[calc(50%-7px)]">
            <img src="/img/trash-solid.svg" alt="" class="w-3" @click="deleteToCart(index)" />
          </div>
        </li>
      </ul>
      <div class="flex justify-between items-center mt-5">
        <div class="font-semibold text-md">
          Total : {{ store.cartTotalPrice }}$
        </div>
        <div
          class="flex justify-center font-semibold bg-gray-300 text-gray-900 hover:bg-gray-600 hover:text-white py-2 px-5 rounded-lg transition-colors cursor-pointer text-sm">
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
  data() {
    return {
      open: false
    }
  },
  mounted() {
    console.log(this.store.isActiveMenu)
  },
  watch:{
    'this.store.isActiveMenu'(newVal,oldVal){
console.log(newVal)
    }
  },
  methods: {
    hamburgerClick() {
      this.store.cartActive = false;
      this.store.isActiveMenu = !this.store.isActiveMenu;
    },
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
        // if (this.store.isActiveMenu) {
        //   const elem = this.$refs.hamBtn
        //   elem.click()
        //   this.store.cartActive = !this.store.cartActive;
        // }
      }
    },
    cartClose() {
      this.store.cartActive = false;
    },
  },
};
</script>
