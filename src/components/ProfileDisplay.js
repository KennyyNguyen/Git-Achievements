import { Box, Flex } from "@chakra-ui/react";
import React from "react";

export default function ProfileDisplay() {
  return (
    <Flex
      direction="column"
      justify="space-around"
      bg="blue"
      w="100%"
      color="white"
    >
      <Box bg="tomato" w="100%" color="white">
        Avatar
      </Box>
      <Box bg="red" w="100%" color="white">
        Recent Achievements
      </Box>
    </Flex>
  );
}
