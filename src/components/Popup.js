import React from "react";
import { Box, Container, Divider, Flex, Tabs } from "@chakra-ui/react";
import Navbar from "./Navbar";
import ProfileDisplay from "./ProfileDisplay";
import MainDisplay from "./MainDisplay";

export default function Popup() {
  return (
    <>
      <Container>
        <Flex bg="tomato" w="max" h="max">
          <Flex justify="space-between">
            <ProfileDisplay />
            <Divider orientation="vertical" />
          </Flex>
          <Flex>
            <Tabs
              w="sm"
              h="sm"
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
