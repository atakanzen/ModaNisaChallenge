import axios from 'axios';

// GET ToDos
export const getToDos = async () => {
  try {
    const res = await axios.get('http://localhost:5000/api/todos');
    return res.data;
  } catch (err) {
    console.error(err.message);
  }
};

// Mark toDo as Done
export const markToDo = async (id) => {
  try {
    await axios.put(`http://localhost:5000/api/todos/${id}`);
  } catch (err) {
    console.error(err);
  }
};

// Delete toDo
export const deleteToDo = async (id) => {
  try {
    await axios.delete(`http://localhost:5000/api/todos/${id}`);
  } catch (err) {
    console.error(err);
  }
};

// Add toDo
export const addToDo = async (text) => {
  try {
    await axios.post('http://localhost:5000/api/todos', { text });
  } catch (err) {
    console.error(err);
  }
};
