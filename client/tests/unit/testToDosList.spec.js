import { shallowMount } from '@vue/test-utils';
import ToDosList from '@/components/ToDosList.vue';

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
    const todoItems = wrapper.findAll('.todoitem');

    expect(todoItems.exists()).toBe(true);
  });
});
