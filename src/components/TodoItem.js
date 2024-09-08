import React from 'react';
import { Box, Button, Text } from '@chakra-ui/react';

function TodoItem({ todo, onDelete, onEdit }) {
  return (
    <Box display="flex" alignItems="center" justifyContent="space-between" p={3} borderWidth="1px" borderRadius="md" mb={2}>
      <Text>{todo.text}</Text>
      <Box>
        <Button size="sm" colorScheme="blue" mr={2} onClick={() => onEdit(todo)}>Edit</Button>
        <Button size="sm" colorScheme="red" onClick={() => onDelete(todo.id)}>Delete</Button>
      </Box>
    </Box>
  );
}

export default TodoItem;
