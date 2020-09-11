import { shallowMount } from '@vue/test-utils';

import ToDos from '@/components/ToDos';

let wrapper = null;

beforeEach(() => {
  wrapper = shallowMount(ToDos, {
    data() {
      return {
        todos: [
          {
            isDone: false,
            text: 'Test ToDo'
          }
        ]
      };
    }
  });
});

afterEach(() => {
  wrapper.destroy();
});

describe('Renders Adding ToDo section', () => {
  // Testing ToDo Input
  it('Has input with "toDo" id', () => {
    const toDoInput = wrapper.find('input[id="toDo"]');

    expect(toDoInput.exists()).toBe(true);
  });

  // Testing ToDo Button
  it('Has button with "addToDo" id', () => {
    const addButton = wrapper.find('button[id="addToDo"]');

    expect(addButton.exists()).toBe(true);
  });

  // Testing ToDo Items
  it('Renders ToDo items when items exists', () => {
    const toDoText = wrapper.find('p[id="toDoText"]');
    const markToDo = wrapper.find('input[id="markToDo"]');
    const deleteToDo = wrapper.find('button[id="deleteToDo"]');

    expect(toDoText.exists()).toBe(true);
    expect(markToDo.exists()).toBe(true);
    expect(deleteToDo.exists()).toBe(true);
  });
});
