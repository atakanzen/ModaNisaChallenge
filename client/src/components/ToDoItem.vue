<template>
  <div class="flex items-center justify-between">
    <p class="todo-text">ToDo Text</p>
    <div class="flex items-center space-x-2">
      <input type="checkbox" name="checkBox" id="checkBox" class="checkbox bg-gray-300" />
      <button
        type="click"
        class="todo-delete bg-red-700 rounded-lg p-1 text-sm text-white mt-1"
      >Delete</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ToDoItem"
};
</script>

<style>
</style>