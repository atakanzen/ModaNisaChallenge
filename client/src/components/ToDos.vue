<template>
  <div class="max-w-7xl h-screen mx-auto px-4 sm:px-6 lg:px-8">
    <div class="max-w-3xl h-full flex items-center justify-center mx-auto">
      <div class="bg-white overflow-hidden w-full shadow rounded-lg">
        <div class="border-b border-gray-200 px-4 py-5 sm:px-6">
          <div class="text-center font-extrabold text-4xl text-blue-800">ToDos</div>
          <div>
            <label for="toDo" class="block text-xl font-medium leading-5 text-gray-700">Add ToDos</label>
            <div class="mt-2 flex rounded-md shadow-sm">
              <div class="relative flex-grow focus-within:z-10">
                <input
                  id="toDo"
                  v-model="toDoText"
                  class="form-input block w-full h-full rounded-none rounded-l-md pl-5 transition ease-in-out duration-150 sm:text-l sm:leading-5"
                  placeholder="Buy Milk."
                />
              </div>
              <button
                id="addToDo"
                v-on:click="onAdd(toDoText)"
                type="click"
                class="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 text-l leading-5 font-medium rounded-r-md text-gray-700 bg-gray-50 hover:text-gray-500 hover:bg-white focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
              >
                <span class="ml-2">Add</span>
              </button>
            </div>
          </div>
        </div>
        <div class="px-4 py-5 sm:p-6">
          <div v-if="this.todos.length > 0">
            <div :key="todo._id" v-for="todo in todos">
              <div class="flex items-center justify-between p-2 border-b border-gray-200">
                <p
                  id="toDoText"
                  class="todo-text text-lg"
                  v-bind:class="{ 'line-through': todo.isDone }"
                >{{ todo.text }}</p>
                <div class="flex items-center justify-center space-x-2">
                  <input
                    type="checkbox"
                    name="checkBox"
                    id="markToDo"
                    class="checkbox bg-gray-300"
                    style="width: 20px; height: 20px"
                    v-bind="{'checked' : todo.isDone}"
                    v-on:change="onChange(todo._id)"
                  />
                  <button
                    type="click"
                    id="deleteToDo"
                    v-on:click="onDelete(todo._id)"
                    class="todo-delete bg-red-700 rounded-lg p-1 text-white"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      class="text-white"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M9 2C8.62123 2 8.27497 2.214 8.10557 2.55279L7.38197 4H4C3.44772 4 3 4.44772 3 5C3 5.55228 3.44772 6 4 6L4 16C4 17.1046 4.89543 18 6 18H14C15.1046 18 16 17.1046 16 16V6C16.5523 6 17 5.55228 17 5C17 4.44772 16.5523 4 16 4H12.618L11.8944 2.55279C11.725 2.214 11.3788 2 11 2H9ZM7 8C7 7.44772 7.44772 7 8 7C8.55228 7 9 7.44772 9 8V14C9 14.5523 8.55228 15 8 15C7.44772 15 7 14.5523 7 14V8ZM12 7C11.4477 7 11 7.44772 11 8V14C11 14.5523 11.4477 15 12 15C12.5523 15 13 14.5523 13 14V8C13 7.44772 12.5523 7 12 7Z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div v-else>
            <div class="text-gray-700 leading-4">No ToDos yet, quick add one!</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

 <script>
import { addToDo, getToDos, markToDo, deleteToDo } from "../actions/todos";

export default {
  name: "App",
  methods: {
    async onAdd(text) {
      await addToDo(text);
      this.toDoText = "";
      await this.loadToDos();
    },
    async onChange(id) {
      await markToDo(id);
      this.todos = await getToDos();
    },
    async onDelete(id) {
      await deleteToDo(id);
      this.todos = await getToDos();
    },
    async loadToDos() {
      this.todos = await getToDos();
    }
  },
  data() {
    return {
      toDoText: "",
      todos: []
    };
  },
  async created() {
    if (process.env.NODE_ENV !== "test") {
      this.todos = await getToDos();
    }
  }
};
</script>

<style>
</style>
