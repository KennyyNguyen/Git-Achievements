import React from "react";
import {
  Avatar,
  Box,
  WrapItem,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@chakra-ui/react";

export default function AchievementBadge(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <WrapItem display="flex" flexDirection="column" alignItems="center">
      <Box as="Button" onClick={onOpen}>
        <Avatar name={props.achievement.name} />
      </Box>
      <Box as="Button" onClick={onOpen}>
        <Text fontSize="sm">{props.achievement.name}</Text>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay backdropFilter="blur(10px)" />
        <ModalContent>
          <ModalHeader>{props.achievement.name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Avatar name={props.achievement.name} />
            <Text>Sint pariatur anim id eiusmod ut Lorem anim occaecat.</Text>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </WrapItem>
  );
}
