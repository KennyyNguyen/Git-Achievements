import React, { useState, useEffect } from "react";
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";

export default function CreateAchievementModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex>
      <Button onClick={onOpen}>Create achievement set</Button>
      <Modal size="md" isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create an achievement set</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Code</FormLabel>
              <Input placeholder="3214" />
              <FormLabel>Name</FormLabel>
              <Input placeholder="ITGK-project" />
              <FormLabel>Description</FormLabel>
              <Input placeholder="A school project in ITGK" />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button>Create</Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  );
}
