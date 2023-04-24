import React from "react";
import { Box, Text } from "@chakra-ui/react";

export default function AchievementBadge(props) {
  console.log("achievement prop:", props.achievement);
  return (
    <Box>
      <Text fontSize="sm">{props.achievement.name}</Text>
      <Text fontSize="xs">{props.achievement.description}</Text>
    </Box>
  );
}
