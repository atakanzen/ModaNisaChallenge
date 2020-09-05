import { shallowMount } from '@vue/test-utils';
import AddToDo from '@/components/AddToDo.vue';

// A text input with a button to add ToDo Item in the list.

let wrapper = null;

beforeEach(() => {
  wrapper = shallowMount(AddToDo);
});

afterEach(() => {
  wrapper.destroy();
});

describe('Renders Add ToDo Component', () => {
  // Testing ToDo Text Input
  it('Has TextBox Input', () => {
    const input = wrapper.find('.text-input');

    expect(input.exists()).toBe(true);
  });
  // Testing Add ToDo Button
  it('Has Add Button', () => {
    const button = wrapper.find('.add-button');

    expect(button.exists()).toBe(true);
  });
});
