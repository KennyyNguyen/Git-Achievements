import React from "react";
import { Box, Flex, Heading } from "@chakra-ui/react";
import UserAvatar from "./UserAvatar";

export default function ProfileDisplay() {
  return (
    <Flex
      direction="column"
      width="100%"
      justify="space-around"
      alignItems="center"
    >
      <Heading>Ola Nordmann</Heading>
      <UserAvatar />
      <Box bg="red" color="white">
        Recent Achievements
      </Box>
    </Flex>
  );
}
