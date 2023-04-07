import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import UserAvatar from "./UserAvatar";
import UserName from "./UserName";

export default function ProfileDisplay() {
  return (
    <Flex
      direction="column"
      width="100%"
      justify="space-around"
      alignItems="center"
    >
      <UserName />
      <UserAvatar />
      <Box bg="red" color="white">
        Recent Achievements
      </Box>
    </Flex>
  );
}
