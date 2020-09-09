import axios from 'axios';

// GET ToDos
export const getToDos = async () => {
  try {
    const res = await axios.get('/api/todos');
    return res.data;
  } catch (err) {
    console.error(err.message);
  }
};

// Mark toDo as Done
export const markToDo = async (id) => {
  try {
    await axios.put(`/api/todos/${id}`);
  } catch (err) {
    console.error(err);
  }
};

// Delete toDo
export const deleteToDo = async (id) => {
  try {
    await axios.delete(`/api/todos/${id}`);
  } catch (err) {
    console.error(err);
  }
};

// Add toDo
export const addToDo = async (text) => {
  try {
    await axios.post('/api/todos', { text });
  } catch (err) {
    console.error(err);
  }
};
