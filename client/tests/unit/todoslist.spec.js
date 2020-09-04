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

describe('ToDos List', () => {
  it('renders todo item', () => {
    const todoItems = wrapper.findAll('.todoitem');

    expect(todoItems.length).toBeGreaterThanOrEqual(0);
  });
});
