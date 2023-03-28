import { TabList, Tab } from "@chakra-ui/react";
import React from "react";

export default function Navbar() {
  return (
    <TabList>
      <Tab>Achievements</Tab>
      <Tab>Profile</Tab>
    </TabList>
  );
}
