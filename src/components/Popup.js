import React from "react";
import { Box, Container, Divider, Flex, Tabs } from "@chakra-ui/react";
import Navbar from "./Navbar";
import ProfileDisplay from "./ProfileDisplay";
import MainDisplay from "./MainDisplay";

export default function Popup() {
  return (
    <>
      <Container maxW="container.xl" p="0">
        <Flex h="400px">
          <ProfileDisplay />
          <Divider orientation="vertical" />
          <Flex flex={1}>
            <Tabs
              w="400px"
              isFitted
              variant="line"
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
            >
              <MainDisplay />
              <Box>
                <Divider orientation="horizontal" />
                <Navbar />
              </Box>
            </Tabs>
          </Flex>
        </Flex>
      </Container>
    </>
  );
}
