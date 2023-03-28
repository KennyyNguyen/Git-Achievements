import React from "react";
import { TabPanels, TabPanel } from "@chakra-ui/react";

export default function Achievements() {
  return (
    <TabPanels>
      <TabPanel>
        <p>Achievements!</p>
      </TabPanel>
      <TabPanel>
        <p>Profile!</p>
      </TabPanel>
    </TabPanels>
  );
}
