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
  Text,
  Flex,
} from "@chakra-ui/react";
import AddAchievementSetForm from "./AddAchievementSetForm";

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
            {!selectedProject ? (
              <Text color="tomato">You need to select a repository first</Text>
            ) : (
              <>
                <Flex mb="10px">
                  <Text>Selected repository:&nbsp;</Text>
                  <Text as="b">{selectedProject.name}</Text>
                </Flex>
                <Flex>
                  <AddAchievementSetForm selectedProject={selectedProject} />
                </Flex>
              </>
            )}
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Cancel</Button>
            {selectedProject && (
              <Button
                type="submit"
                form="addAchievementSetForm"
                ml="20px"
                colorScheme="blue"
              >
                Add
              </Button>
            )}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
