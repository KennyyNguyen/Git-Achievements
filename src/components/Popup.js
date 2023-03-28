import React from "react";
import { Box, Container, Divider, Flex } from "@chakra-ui/react";
import Navbar from "./Navbar";
import ProfileDisplay from "./ProfileDisplay";

export default function Popup() {
  return (
    <>
      <Container bg="red.200">
        <Flex bg="purple.100">
          <ProfileDisplay />
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
