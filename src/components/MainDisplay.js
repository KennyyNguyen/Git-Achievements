import React from "react";
import { TabPanels, TabPanel } from "@chakra-ui/react";
import Profile from "./Profile";

export default function Achievements() {
  return (
    <TabPanels>
      <TabPanel>
        <p>Achievements!</p>
      </TabPanel>
      <TabPanel>
        <Profile />
      </TabPanel>
    </TabPanels>
  );
}
