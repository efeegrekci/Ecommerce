<template>
  <div class="w-full">
    <div
      class="
        w-full
        flex flex-col
        items-center
        px-5
        py-12
        lg:pt-24
        lg:pb-36
        lg:container
      "
    >
      <!-- 404 -->
      <template v-if="error.statusCode === 404">
        <h1 class="w-full flex flex-col text-center">
          <span class="w-full">
            {{ error.statusCode }}
          </span>

          <span class="w-full mt-4 lg:mt-8">
            Sorry, we couldn't <br />
            find this page.
          </span>
        </h1>
        <div class="w-full flex justify-center mt-8 lg:mt-16">
          <NuxtLink class="button btn-primary" to="/">Homepage</NuxtLink>
        </div>
      </template>
      <!-- 404 -->

      <!-- 500 -->
      <template v-else-if="error.statusCode === 500">
        <h1 class="w-full flex flex-col text-center">
          <span class="w-full">
            {{ error.statusCode }}
          </span>

          <span class="w-full mt-4 lg:mt-8">
            There is an unexpected error.
            <br />
            <span class="text-lg lg:text-3xl">
              Please try again in a while time.
            </span>
          </span>
        </h1>
        <div class="w-full flex justify-center mt-8 lg:mt-16">
          <NuxtLink class="button btn-primary" to="/">Homepage</NuxtLink>
        </div>
      </template>
      <!-- 500 -->

      <!-- 403 -->
      <template v-else-if="error.statusCode === 403">
        <h1 class="w-full flex flex-col text-center">
          <span class="w-full">
            {{ error.statusCode }}
          </span>

          <span class="w-full mt-4 lg:mt-8"> Access permission denied. </span>
        </h1>
        <div class="w-full flex justify-center mt-8 lg:mt-16">
          <NuxtLink class="button btn-primary" to="/">Homepage</NuxtLink>
        </div>
      </template>
      <!-- 403 -->

      <!-- 503 -->
      <template v-else-if="error.statusCode === 503">
        <h1 class="w-full flex flex-col text-center">
          <span class="w-full">
            {{ error.statusCode }}
          </span>
          <span class="w-full mt-4 lg:mt-8">
            Our servers are under maintenance.
            <br />
            After a while try again.</span
          >
        </h1>
      </template>
      <!-- 503 -->

      <!-- 520 -->
      <template v-else-if="error.statusCode === 520">
        <h1 class="w-full flex flex-col text-center">
          <span class="w-full">
            {{ error.statusCode }}
          </span>
          <span class="w-full mt-4 lg:mt-8">
            We are updating our interface to serve you better.
            <br />
            Try again in a few minutes.
          </span>
        </h1>
      </template>
      <!-- 520 -->

      <!-- Other -->
      <template v-else>
        <h1 class="w-full flex flex-col text-center">
          <span class="w-full"> An error occurred. </span>
        </h1>
      </template>
      <!-- Other -->
    </div>
  </div>
</template>

<script>
export default {
  name: "error",
  props: {
    error: {
      type: Object,
      default: () => {
        "error";
      },
    },
  },
};
</script>