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
      :class="{ active: isActive }"
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
          v-for="(item, index) in cartData"
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
      <div class="font-semibold text-md mt-5">Total : {{ cartTotalPrice }}$</div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Product",
  data() {
    return {
      productData: {},
      cartData: [],
      cartTotalPrice: 0,
      isActive: false,
    };
  },
  async fetch() {
    try {
      const { data } = await this.$axios.get(`/63231094390f92a401803bfa`);
      this.productData = data.products;
    } catch (ex) {}
  },
  mounted() {
    if (localStorage.getItem("cart") !== null) {
      this.cartData = JSON.parse(localStorage.getItem("cart"));
    }
  },
  methods: {
    addToCart(product) {
      this.isActive = true;

      let isNotSame = true;
      this.cartData.forEach((element, index) => {
        if (product.id == element.id) {
          product.count = element.count + 1;
          this.$set(this.cartData, index, product);
          isNotSame = false;
        }
      });

      if (isNotSame) {
        product["count"] = 1;
        this.cartData.push(product);
      }

      localStorage.setItem("cart", JSON.stringify(this.cartData));
    },
    deleteToCart(index) {
      this.cartData.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(this.cartData));
      if (this.cartData.length < 1) {
        localStorage.removeItem("cart");
      }
    },
    cartClose() {
      this.isActive = false;
    },
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
