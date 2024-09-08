import React, { useState } from 'react';
import { Box, Heading } from '@chakra-ui/react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([]);
  const [todoToEdit, setTodoToEdit] = useState(null);

  const addOrUpdateTodo = (text) => {
    if (todoToEdit) {
      setTodos(todos.map(todo => todo.id === todoToEdit.id ? { ...todo, text } : todo));
      setTodoToEdit(null);
    } else {
      setTodos([...todos, { id: Date.now(), text }]);
    }
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const editTodo = (todo) => {
    setTodoToEdit(todo);
  };

  return (
    <Box p={4}>
      <Heading mb={6}>Todo List</Heading>
      <TodoForm onSubmit={addOrUpdateTodo} todoToEdit={todoToEdit} />
      <TodoList todos={todos} onDelete={deleteTodo} onEdit={editTodo} />
    </Box>
  );
}

export default App;
