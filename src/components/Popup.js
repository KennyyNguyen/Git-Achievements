import React from "react";
import { Box, Container, Divider, Flex } from "@chakra-ui/react";
import Navbar from "./Navbar";

export default function Popup() {
  return (
    <>
      <Container bg="red.200">
        <Flex bg="purple.100">
          <Box bg="blue.100">Box1</Box>
          <Divider orientation="vertical" />
          <Box bg="blue">
            Box2
            <Divider orientation="horizontal" />
            <Navbar />
          </Box>
        </Flex>
      </Container>
    </>
  );
}
