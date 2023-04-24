import React from "react";
import { Avatar, WrapItem, Text } from "@chakra-ui/react";

export default function AchievementBadge(props) {
  return (
    <WrapItem display="flex" flexDirection="column" alignItems="center">
      <Avatar name={props.achievement.name} />
      <Text fontSize="sm">{props.achievement.name}</Text>
    </WrapItem>
  );
}
