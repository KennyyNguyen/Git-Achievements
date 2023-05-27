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
  useDisclosure,
  Progress,
} from "@chakra-ui/react";

export default function AchievementBadge(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <WrapItem
        width="25%"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Avatar name={props.achievement.name} as="button" onClick={onOpen} />
        <Text fontSize="sm" as="button" onClick={onOpen}>
          {props.achievement.name}
        </Text>
      </WrapItem>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay backdropFilter="blur(10px)" />
        <ModalContent
          d="flex"
          justifyContent="center"
          alignItems="center"
          mt="2rem"
        >
          <ModalHeader>{props.achievement.name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody
            d="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            textAlign="center"
          >
            <Avatar size="xl" name={props.achievement.name} />
            <Text p={4}>
              Sint pariatur anim id eiusmod ut Lorem anim occaecat. Fugiat velit
              labore reprehenderit dolor.
            </Text>
            <Box>
              <Progress value={80} />
              <Text>Criteria: 8/10</Text>
            </Box>
          </ModalBody>
          <ModalFooter />
        </ModalContent>
      </Modal>
    </>
  );
}
