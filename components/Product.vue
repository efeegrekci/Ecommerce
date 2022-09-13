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
        v-for="(item, index) in products"
        :key="index"
        class="w-full flex items-center justify-center flex-col py-5 group"
      >
        <a href="javascript:;" class="mb-3">
          <div class="text-center font-normal mb-3 px-5 text-sm text-gray-700">
            {{ item.name }}
          </div>
          <div class="flex justify-center mb-3 overflow-hidden">
            <img
              :src="item.imageLink"
              alt="Product"
              class="hover:scale-110 transition-all"
            />
          </div>
          <div class="text-center font-bold text-xl text-gray-700">
            {{ item.price }}$
          </div>
        </a>
        <a
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
          "
          @click="addToCart(item)"
          >Add to Cart</a
        >
      </li>
    </ul>

    <div
      class="
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
    >
      <div class="absolute right-5 top-5">
        <img src="img/xmark-solid.svg" alt="xmark" class="w-3 cursor-pointer" />
      </div>
      <ul class="group last:mb-0">
        <li
          v-for="(item, index) in cartData"
          :key="index"
          class="flex mb-5 last:mb-0 relative w-full"
        >
          <div class="mr-5">
            <img
              :src="item.imageLink"
              alt="phone"
              class="w-12 bordercursor-pointer"
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
    </div>
  </section>
</template>

<script>
export default {
  name: "Product",
  props: {
    cartData: {
      type: Array,
      default: [],
    },
  },
  data() {
    return {
      products: [
        {
          id: 1,
          imageLink: "/img/phone.jpg",
          name: "Apple Iphone 13 256 GB",
          price: 300,
        },
        {
          id: 2,
          imageLink: "/img/phone.jpg",
          name: "Apple Iphone 13 128 GB",
          price: 250,
        },
        {
          id: 3,
          imageLink: "/img/phone.jpg",
          name: "Apple Iphone 13 128 GB",
          price: 225,
        },
        {
          id: 4,
          imageLink: "/img/phone.jpg",
          name: "Apple Iphone 13 Pro 256 GB",
          price: 350,
        },
        {
          id: 5,
          imageLink: "/img/phone.jpg",
          name: "Apple Iphone 13 256 GB",
          price: 300,
        },
        {
          id: 6,
          imageLink: "/img/phone.jpg",
          name: "Apple Iphone 13 128 GB",
          price: 250,
        },
        {
          id: 7,
          imageLink: "/img/phone.jpg",
          name: "Apple Iphone 13 128 GB",
          price: 225,
        },
        {
          id: 8,
          imageLink: "/img/phone.jpg",
          name: "Apple Iphone 13 Pro 256 GB",
          price: 350,
        },
      ],
    };
  },
  methods: {
    addToCart(product) {
      if (this.cartData.length == 7) {
        alert("Daha Fazla Ürün Ekleyemezsiniz");
      } else {
        this.cartData.forEach((element) => {
          if (product.id == element.id) {
            console.log("Aynısını buldum" + element.id);
          }
        });
        var newProduct = product;
        newProduct["count"] = 1;
        this.cartData.push(newProduct);
        localStorage.setItem("cart", JSON.stringify(this.cartData));
      }
    },
    deleteToCart(index) {
      this.cartData.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(this.cartData));
      if (this.cartData.length < 1) {
        localStorage.removeItem("cart");
      }
    },
  },
};
</script>
