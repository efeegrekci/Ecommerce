<template>
  <VueSlickCarousel class="cursor-pointer" v-bind="settings" v-if="sliderData.length > 0">
    <div class="w-full overflow-hidden relative" v-for="(item, index) in sliderData" :key="index"
      @click="$nuxt.$router.push({ path: item.attributes.url })">
      <div class="pointer-events-none">
        <img :src="'http://localhost:1337' + item.attributes.image.data.attributes.url"
          class="object-cover object-center object-left h-56 lg:h-96 w-full"
          :alt="item.attributes.image.data.attributes.name" />
      </div>
    </div>
  </VueSlickCarousel>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  name: "Slider",
  components: {
    VueSlickCarousel,
  },
  data() {
    return {
      sliderData: [],
      settings: {
        dots: true,
        dotsClass: "slick-dots custom-dot-class",
        edgeFriction: 0.35,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        infinite: true,
      },
    };
  },
  async fetch() {
    try {
      const { data } = await this.$axios.get(`api/banners?populate=*`);
      this.sliderData = data.data;
    } catch (ex) { }
  },
};
</script>
