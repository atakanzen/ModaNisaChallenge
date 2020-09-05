<template>
  <div>
    <div>
      <label for="toDo" class="block text-xl font-medium leading-5 text-gray-700">Add ToDos</label>
      <div class="mt-2 flex rounded-md shadow-sm">
        <div class="relative flex-grow focus-within:z-10">
          <input
            id="toDo"
            v-model="toDoText"
            class="form-input block w-full h-full rounded-none rounded-l-md pl-10 transition ease-in-out duration-150 sm:text-l sm:leading-5"
            placeholder="Buy Milk."
          />
        </div>
        <button
          v-on:click="addToDo"
          type="click"
          class="-ml-px add-button relative inline-flex items-center px-4 py-2 border border-gray-300 text-l leading-5 font-medium rounded-r-md text-gray-700 bg-gray-50 hover:text-gray-500 hover:bg-white focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
        >
          <span class="ml-2">Add</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddToDo",
  data() {
    return {
      toDoText: ""
    };
  },
  methods: {
    addToDo() {
      // POST request to API with input data
      console.log("Spy me!");
    }
  }
};
</script>

<style>
</style>