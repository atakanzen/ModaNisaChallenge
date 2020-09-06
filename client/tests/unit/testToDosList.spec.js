import { shallowMount } from '@vue/test-utils';
import ToDosList from '@/components/ToDosList.vue';
import ToDoItem from '@/components/ToDoItem.vue';

// Displays ToDo Item List.

let wrapper = null;

beforeEach(() => {
  wrapper = shallowMount(ToDosList);
});

afterEach(() => {
  wrapper.destroy();
});

describe('Renders ToDos List', () => {
  it('Renders ToDo Items', () => {
    const todoItems = wrapper.findAllComponents(ToDoItem);

    expect(todoItems.exists()).toBe(true);
  });
});
