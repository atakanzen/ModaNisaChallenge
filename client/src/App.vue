<template>
  <div class="max-w-7xl h-screen mx-auto px-4 sm:px-6 lg:px-8">
    <div class="max-w-3xl h-full flex items-center justify-center mx-auto">
      <div class="bg-white overflow-hidden w-full shadow rounded-lg">
        <div class="border-b border-gray-200 px-4 py-5 sm:px-6">
          <div class="text-center font-extrabold text-4xl text-blue-800">ToDos</div>
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
