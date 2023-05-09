import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";

export default function AddModal({ selectedProject }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen}>Add</Button>
      <Modal
        size="md"
        isOpen={isOpen}
        onClose={onClose}
        scrollBehavior="inside"
      >
        <ModalOverlay backdropFilter="blur(10px)" />
        <ModalContent>
          <ModalHeader>Add achivement set to repository</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {!selectedProject
              ? "You need to select a repository first"
              : `Selected repository: ${selectedProject.name}`}
          </ModalBody>
          <ModalFooter>
            <Button mr="20px" onClick={onClose}>
              Close
            </Button>
            <Button colorScheme="blue">Add</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
