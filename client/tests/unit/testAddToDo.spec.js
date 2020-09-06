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
  it('Has TextBox Input', () => {
    const input = wrapper.find('input');

    expect(input.exists()).toBe(true);
  });

  it('Has Add Button', () => {
    const button = wrapper.find('button');

    expect(button.exists()).toBe(true);
  });

  it('Calls AddToDo Function', () => {
    const spy = jest.spyOn(wrapper.vm, 'addToDo');

    wrapper.vm.addToDo();

    expect(spy).toHaveBeenCalled();
  });
});
