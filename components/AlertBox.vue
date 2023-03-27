<template>
  <div class="flex justify-center px-5 mt-16 overflow-hidden" id="alertBox" v-show="hidden">
    <div
      class="flex p-8 w-full lg:w-8/12 text-blue-800 bg-blue-50 dark:text-blue-400 dark:bg-gray-800 dark:border-blue-800 rounded-lg">
      <svg class="flex-shrink-0 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd"
          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
          clip-rule="evenodd"></path>
      </svg>
      <div class="ml-3 text-sm font-medium text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti ab tenetur reiciendis officiis corporis,
        obcaecati assumenda ipsam cupiditate temporibus nisi quam consequatur quas! Debitis neque totam pariatur possimus
        ab error?
      </div>
      <button type="button" @click="closeButton()"
        class="ml-auto -mx-1.5 -my-1.5 bg-blue-50 text-blue-500 rounded-lg focus:ring-blue-400 p-1.5 hover:bg-blue-200 inline-flex h-8 w-8 dark:bg-gray-800 dark:text-blue-400 dark:hover:bg-gray-700">
        <span class="sr-only">Dismiss</span>
        <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd"></path>
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "AlertBox",
  data() {
    return {
      hidden: true
    }
  },
  methods: {
    closeButton() {
      this.hidden = false
    }
  }
};
</script>
