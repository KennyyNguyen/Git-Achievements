import React from "react";
import { Box, Container, Divider, Flex, Tabs } from "@chakra-ui/react";
import Navbar from "./Navbar";
import ProfileDisplay from "./ProfileDisplay";
import Achievements from "./Achievements";

export default function Popup() {
  return (
    <>
      <Container>
        <Flex height="100px">
          <ProfileDisplay />
          <Divider orientation="vertical" />
          <Box>
            <Tabs isFitted variant="unstyled">
              <Achievements />
              <Divider orientation="horizontal" />
              <Navbar />
            </Tabs>
          </Box>
        </Flex>
      </Container>
    </>
  );
}
