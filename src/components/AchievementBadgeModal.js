import React, { useState } from "react";
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
  AvatarBadge,
} from "@chakra-ui/react";

export default function AchievementBadgeModal(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [achieved, setAchieved] = useState(false);

  return (
    <>
      <WrapItem
        width="25%"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Avatar name={props.achievement.name} as="button" onClick={onOpen}>
          <AvatarBadge
            boxSize="1.25em"
            bg={achieved ? "green.500" : "red.500"}
          />
        </Avatar>
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
            w="100%"
          >
            <Avatar size="xl" name={props.achievement.name} />
            <Text p={4}>{props.achievement.description}</Text>
            <Box>
              <Progress
                value={(100 / Object.values(props.achievement.criteria)[0]) * 2}
              />
              <Text>
                {`Et tall vi regner ut / ${
                  Object.values(props.achievement.criteria)[0]
                } ${Object.keys(props.achievement.criteria)[0].replace(
                  /_/g,
                  " "
                )}`}
              </Text>
            </Box>
          </ModalBody>
          <ModalFooter />
        </ModalContent>
      </Modal>
    </>
  );
}
