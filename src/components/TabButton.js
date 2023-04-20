import { Box, Tab, useMultiStyleConfig, useTab } from "@chakra-ui/react";
import React from "react";

export default function TabButton(props) {
  const tabProps = useTab(props);
  const isSelected = !!tabProps["aria-selected"];

  const styles = useMultiStyleConfig("Tabs", tabProps);

  return (
    <Tab __css={styles.tab} {...tabProps}>
      <Box fontSize="2xl">{isSelected ? props.iconfill : props.iconline}</Box>
    </Tab>
  );
}
