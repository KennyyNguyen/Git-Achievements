import React from "react";
import { Container, Divider, Flex, Tabs } from "@chakra-ui/react";
import Navbar from "./Navbar";
import ProfileDisplay from "./ProfileDisplay";
import MainDisplay from "./MainDisplay";

export default function Popup() {
  return (
    <>
      <Container>
        <Flex>
          <Flex w="sm" h="sm" justify="space-between">
            <ProfileDisplay />
            <Divider orientation="vertical" />
          </Flex>
          <Flex w="sm" h="sm">
            <Tabs isFitted variant="line">
              <MainDisplay />
              <Divider orientation="horizontal" />
              <Navbar />
            </Tabs>
          </Flex>
        </Flex>
      </Container>
    </>
  );
}
