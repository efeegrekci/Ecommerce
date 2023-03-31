<template>
  <section>
    <Slider />
    <Product pageSize="4" :loadMoreButton="false" />
    <AlertBox />
  </section>
</template>

<script>
export default {
  name: "IndexPage",
  layout: "default",
};
</script>
