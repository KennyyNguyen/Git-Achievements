import React, { useEffect, useState } from "react";
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

export default function AchievementBadgeModal({ achievement, commitsPerDay }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [achieved, setAchieved] = useState(false);
  const today = new Date().toISOString().split("T")[0];

  useEffect(() => {
    let todayCommits = commitsPerDay[today] || 0;
    if (
      achievement.criteria.commits &&
      todayCommits >= achievement.criteria.commits
    ) {
      setAchieved(true);
      console.log(todayCommits);
    }
  }, [achievement, commitsPerDay]);

  return (
    <>
      <WrapItem
        width="25%"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Avatar name={achievement.name} as="button" onClick={onOpen}>
          <AvatarBadge
            boxSize="1.25em"
            bg={achieved ? "green.500" : "red.500"}
          />
        </Avatar>
        <Text fontSize="sm" as="button" onClick={onOpen}>
          {achievement.name}
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
          <ModalHeader>{achievement.name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody
            d="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            textAlign="center"
            w="100%"
          >
            <Avatar size="xl" name={achievement.name} />
            <Text p={4}>{achievement.description}</Text>
            <Box>
              <Progress
                value={
                  (100 * (commitsPerDay[today] || 0)) /
                  Object.values(achievement.criteria)[0]
                }
              />
              <Text>
                {`${commitsPerDay[today] || 0} / ${
                  Object.values(achievement.criteria)[0]
                } ${Object.keys(achievement.criteria)[0].replace(/_/g, " ")}`}
              </Text>
            </Box>
          </ModalBody>
          <ModalFooter />
        </ModalContent>
      </Modal>
    </>
  );
}
