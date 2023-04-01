<template>
  <ul class="addedToCart h-auto fixed bottom-0 right-0 w-full md:w-72 pt-5 z-20 animate-bounce">
    <li v-for="(item, index) in store.productName" :key="index" id="efe"
      class="bg-white shadow-lg border-t-4 border-green-500 p-4 rounded m-5 mt-0 flex flex-col items-center justify-center relative">
      <div class="text-gray-600 text-xs font-semibold mb-1">
        {{ item }}
      </div>
      <div class="text-gray-900 text-base font-semibold flex items-center">
        <img src="/img/cart.svg" alt="cart" class="w-8 xl:w-10 mr-2" />Added To
        Cart
      </div>
      <div class="absolute right-5 top-5">
        <img src="/img/xmark-solid.svg" alt="xmark" class="w-3 cursor-pointer" @click="addedCartClose(index)" />
      </div>
    </li>
  </ul>
</template>

<script>
import { useCartStore } from "@/stores/index";
export default {
  name: "Toast",
  setup() {
    const store = useCartStore();
    return {
      store,
    };
  },
  data() {
    return {
      carts: {},
    }
  },
  methods:{
    addedCartClose(index){
      if(index == 0){
        this.store.productName.shift()
      }else{
        this.store.productName.splice(index,index)
      }
    }
  }
};
</script>
