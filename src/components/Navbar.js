import { Box, Container, Flex } from "@chakra-ui/react";
import React from "react";

export default function Navbar() {
  return (
    <>
      <Container>
        <Flex>
          <Box>Achievements</Box>
          <Box>Profiles</Box>
        </Flex>
      </Container>
    </>
  );
}
