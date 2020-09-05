<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="max-w-3xl mx-auto">
      <div class="bg-white overflow-hidden shadow rounded-lg">
        <div class="border-b border-gray-200 px-4 py-5 sm:px-6">
          <div class="text-center font-extrabold text-4xl text-teal-800">ToDos</div>
          <AddToDo />
        </div>
        <div class="px-4 py-5 sm:p-6">
          <ToDosList />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AddToDo from "@/components/AddToDo.vue";
import ToDosList from "@/components/ToDosList.vue";

export default {
  name: "App",
  components: {
    AddToDo,
    ToDosList
  }
};
</script>

<style>
</style>
