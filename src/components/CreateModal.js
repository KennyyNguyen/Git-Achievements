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
  Flex,
} from "@chakra-ui/react";
import CreateFormDropdown from "./CreateFormDropdown";
import CreateAchievementSetForm from "./CreateAchievementSetForm";
import CreateAchievementForm from "./CreateAchievementForm";

export default function CreateModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedForm, setSelectedForm] = useState("Achievement Set");

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
            <Flex alignItems="center">
              Create an&nbsp;
              <CreateFormDropdown
                selectedForm={selectedForm}
                setSelectedForm={setSelectedForm}
              />
            </Flex>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {selectedForm === "Achievement Set" ? (
              <CreateAchievementSetForm />
            ) : (
              <CreateAchievementForm />
            )}
          </ModalBody>
          <ModalFooter>
            <Button mr="20px" onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue" type="submit" form="achievementForm">
              Create
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
