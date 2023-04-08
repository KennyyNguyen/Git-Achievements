import React from "react";
import { Flex, Heading } from "@chakra-ui/react";
import UserAvatar from "./UserAvatar";
import UserName from "./UserName";

export default function ProfileDisplay() {
  return (
    <Flex direction="column" alignItems="center" justify="space-around">
      <UserName />
      <UserAvatar />
      <Heading size="md">Recent achievements</Heading>
      <Flex alignItems="center">Display of atleast three achievements!</Flex>
    </Flex>
  );
}
