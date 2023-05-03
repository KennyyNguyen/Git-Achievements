import React from "react";
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
  Flex,
} from "@chakra-ui/react";
import CreateFormDropdown from "./CreateFormDropdown";
import CreateAchievementSetForm from "./CreateAchievementSetForm";

export default function CreateModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen}>Create</Button>
      <Modal
        size="md"
        isOpen={isOpen}
        onClose={onClose}
        scrollBehavior="inside"
      >
        <ModalOverlay backdropFilter="blur(10px)" />
        <ModalContent>
          <ModalHeader>
            <Flex>
              Create an
              <CreateFormDropdown />
            </Flex>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <CreateAchievementSetForm />
          </ModalBody>
          <ModalFooter>
            <Button type="submit" mr="20px" form="achievementSetForm">
              Create
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
