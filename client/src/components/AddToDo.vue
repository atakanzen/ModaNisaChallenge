<template>
  <div>
    <input
      type="text"
      name="toDo"
      id="toDo"
      v-model="toDoText"
      class="text-l font-semibold text-input"
      placeholder="Buy Milk."
    />
    <button v-on:click="addToDo" type="click" class="add-button">Add</button>
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