import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import UserAvatar from "./UserAvatar";
import UserName from "./UserName";

export default function ProfileDisplay() {
  return (
    <Flex direction="column" alignItems="center" justify="space-around" p="3">
      <UserName />
      <UserAvatar />
      <Text size="md">Recent achievements</Text>
      <Flex alignItems="center">Display of atleast three achievements!</Flex>
    </Flex>
  );
}
