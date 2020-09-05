<template>
  <div>
    <ToDoItem />
    <ToDoItem />
    <ToDoItem />
  </div>
</template>

<script>
import ToDoItem from "@/components/ToDoItem.vue";

export default {
  name: "ToDosList",
  components: {
    ToDoItem
  }
};
</script>

<style>
</style>