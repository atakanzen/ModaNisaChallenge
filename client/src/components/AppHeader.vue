<template>
  <div class="fixed w-screen bg-blue-500">
    <div class="flex justify-between items-center px-4 py-4 space-x-4">
      <div class="flex items-center">
        <svg
          class="text-white h-8 w-8"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 5H7C5.89543 5 5 5.89543 5 7V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V7C19 5.89543 18.1046 5 17 5H15M9 5C9 6.10457 9.89543 7 11 7H13C14.1046 7 15 6.10457 15 5M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5M9 14L11 16L15 12"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <nav class="flex">
          <p class="text-2xl leading-6 font-semibold tracking-wider text-white">ToDos</p>
        </nav>
      </div>
      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <a
            href="https://www.twitter.com/atakanzzengin"
            target="_blank"
            class="inline-flex items-center justify-center px-4 py-2 text-lg text-white hover:text-gray-200 leading-6 font-medium"
          >Atakan Zengin</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppHeader"
};
</script>

<style>
</style>