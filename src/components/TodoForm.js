import React, { useState, useEffect } from 'react';
import { Button, Input, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure } from '@chakra-ui/react';

function TodoForm({ onSubmit, todoToEdit }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    if (todoToEdit) {
      setInputValue(todoToEdit.text);
      onOpen();
    }
  }, [todoToEdit, onOpen]);

  const handleSubmit = () => {
    onSubmit(inputValue);
    setInputValue('');
    onClose();
  };

  return (
    <>
      <Button onClick={onOpen} colorScheme="teal" mb={4}>Add Todo</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{todoToEdit ? 'Edit Todo' : 'Add Todo'}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input
              placeholder="Enter todo"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleSubmit}>
              {todoToEdit ? 'Update' : 'Add'}
            </Button>
            <Button variant="ghost" onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default TodoForm;
