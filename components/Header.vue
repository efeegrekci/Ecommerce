<template>
  <header class="w-full bg-white h-20 flex items-center justify-between px-20 mb-10 shadow-md">
    <a href="javascript:;" class="overflow-hidden">
      <img src="img/logo.png" class="w-10" alt="logo">
    </a>
    <ul class="flex gap-10">
      <li>
        <NuxtLink to="/" class="text-gray-900 font-semibold hover:text-gray-400 transition-colors">Home</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/categories" class="text-gray-900 font-semibold hover:text-gray-400 transition-colors">Categories</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/detail" class="text-gray-900 font-semibold hover:text-gray-400 transition-colors">About</NuxtLink>
      </li>
    </ul>
      <a href="javascript:;" class="font-bold relative">
        <div class="text-xs bg-red-600 text-white absolute -right-2 -top-1 rounded-full flex justify-center items-center w-5 h-5"></div>
        <img src="img/cart.svg" class="w-10" alt="cart">
      </a>
  </header>
</template>

<script>

export default {
  name: 'Header',
}
</script>
