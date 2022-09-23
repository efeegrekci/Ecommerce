<template>
  <VueSlickCarousel v-bind="settings">
    <div class="w-full overflow-hidden">
      <img
        src="/img/banners/phone-banner.jpg"
        class="object-cover object-center h-96 w-full"
        alt=""
      />
    </div>
    <div class="w-full overflow-hidden">
      <img
        src="/img/banners/laptop-banner.jpg"
        class="object-cover object-center h-96 w-full"
        alt=""
      />
    </div>
    <div class="w-full overflow-hidden">
      <img
        src="/img/banners/tshirt-banner.jpg"
        class="object-cover object-center h-96 w-full"
        alt=""
      />
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
      settings: {
        dots: true,
        dotsClass: "slick-dots custom-dot-class",
        edgeFriction: 0.35,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    };
  },
};
</script>
