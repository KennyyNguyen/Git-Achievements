import React from "react";
import { Box, Center, Flex, Heading } from "@chakra-ui/react";
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
      <Flex alignItems="center" flexDirection="column">
        <Heading size="md">Recent achievements</Heading>
        Display of atleast three achievements
      </Flex>
    </Flex>
  );
}
