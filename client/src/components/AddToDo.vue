<template>
  <div>
    <label for="toDo" class="block text-sm font-medium leading-5 text-gray-700">Add ToDo</label>
    <div class="mt-1 flex rounded-md shadow-sm">
      <div class="relative flex-grow focus-within:z-10">
        <input
          id="toDo"
          class="text-input transition ease-in-out duration-150 sm:text-sm sm:leading-5"
          placeholder="Buy Milk."
        />
      </div>
      <button
        class="add-button hover:text-gray-500 hover:bg-white focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
      >
        <span class="ml-2">Add</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddToDo"
};
</script>

<style>
.text-input {
  @apply form-input block w-full rounded-none rounded-l-md pl-10;
}
.add-button {
  @apply -ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-r-md text-gray-700 bg-gray-50;
}
</style>