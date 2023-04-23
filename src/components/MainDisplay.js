import React from "react";
import { TabPanels, TabPanel } from "@chakra-ui/react";
import Profile from "./Profile";
import Achievements from "./Achievements";

export default function MainDisplay() {
  return (
    <TabPanels>
      <TabPanel>
        <Achievements />
      </TabPanel>
      <TabPanel>
        <Profile />
      </TabPanel>
    </TabPanels>
  );
}
