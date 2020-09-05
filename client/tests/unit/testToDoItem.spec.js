import { shallowMount } from '@vue/test-utils';
import ToDoItem from '@/components/ToDoItem.vue';

// Displays ToDo data with a delete button and a checkbox.

let wrapper = null;

beforeEach(() => {
  wrapper = shallowMount(ToDoItem);
});

afterEach(() => {
  wrapper.destroy();
});

describe('Renders ToDo Item', () => {
  // Testing ToDo Checkbox
  it('Has ToDo Checkbox', () => {
    const checkbox = wrapper.find('.checkbox');

    expect(checkbox.exists()).toBe(true);
  });

  // Testing ToDo Text
  it('Has ToDo Data', () => {
    const toDo = wrapper.find('.todo-text');

    expect(toDo.exists()).toBe(true);
  });

  // Testing Delete ToDo Button
  it('Has Delete ToDo Button', () => {
    const deleteBtn = wrapper.find('.todo-delete');

    expect(deleteBtn.exists()).toBe(true);
  });
});
