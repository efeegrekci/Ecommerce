<template>
  <header
    class="
      w-full
      bg-white
      h-20
      flex
      items-center
      justify-between
      px-20
      mb-10
      shadow-md
    "
  >
    <a href="javascript:;" class="overflow-hidden">
      <img src="img/logo.png" class="w-10" alt="logo" />
    </a>
    <ul class="flex gap-10">
      <li>
        <NuxtLink
          to="/"
          class="
            text-gray-900
            font-semibold
            hover:text-gray-400
            transition-colors
          "
          >Home</NuxtLink
        >
      </li>
      <li>
        <NuxtLink
          to="/categories"
          class="
            text-gray-900
            font-semibold
            hover:text-gray-400
            transition-colors
          "
          >Categories</NuxtLink
        >
      </li>
      <li>
        <NuxtLink
          to="/detail"
          class="
            text-gray-900
            font-semibold
            hover:text-gray-400
            transition-colors
          "
          >About</NuxtLink
        >
      </li>
    </ul>
    <a href="javascript:;" class="font-bold relative" @click="cartOpen()">
      <div
        class="
          text-xs
          bg-red-600
          text-white
          absolute
          -right-2
          -top-1
          rounded-full
          flex
          justify-center
          items-center
          w-5
          h-5
        "
      >
        {{ store.cartData.length }}
      </div>
      <img src="img/cart.svg" class="w-10" alt="cart" />
    </a>
    <div
      class="
        opacity-0
        invisible
        absolute
        bg-white
        right-0
        top-20
        w-96
        shadow-md
        p-5
        pr-12
        pt-12
        rounded-bl-lg
      "
      :class="{ active: store.cartActive }"
    >
      <div class="absolute right-5 top-5">
        <img
          src="img/xmark-solid.svg"
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
              :src="item.image"
              alt="phone"
              class="object-cover w-12 h-12 border cursor-pointer"
            />
          </div>
          <div class="mr-5">
            <div class="text-sm text-gray-700 mb-2">{{ item.name }}</div>
            <div class="flex">
              <div class="text-sm text-gray-700 text-right font-bold mr-5">
                {{ item.price }}$
              </div>
              <div class="text-sm text-gray-700 text-right font-bold">
                x{{ item.count }}
              </div>
            </div>
          </div>
          <div
            class="
              text-sm text-gray-700
              font-bold
              cursor-pointer
              flex
              align-center
              absolute
              right-0
            "
          >
            <img
              src="img/trash-solid.svg"
              alt=""
              class="w-3"
              @click="deleteToCart(index)"
            />
          </div>
        </li>
      </ul>
      <div class="font-semibold text-md mt-5">
        Total : {{ store.cartTotalPrice }}$
      </div>
    </div>
  </header>
</template>

<script>
import { useCounterStore } from "@/stores/counter";
export default {
  name: "Header",
  setup() {
    const store = useCounterStore();

    return {
      store,
    };
  },
  methods: {
    cartOpen() {
      this.store.cartActive = !this.store.cartActive;
    },
    deleteToCart(index) {
      this.store.cartData.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(this.store.cartData));
      if (this.store.cartData.length < 1) {
        localStorage.removeItem("cart");
      }
    },
    cartClose() {
      this.store.cartActive = false;
    },
  },
};
</script>
