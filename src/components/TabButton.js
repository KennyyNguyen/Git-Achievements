import { Box, Button, useMultiStyleConfig, useTab } from "@chakra-ui/react";
import React from "react";

export default function TabButton(props) {
  const tabProps = useTab(props);
  const isSelected = !!tabProps["aria-selected"];

  const styles = useMultiStyleConfig("Tabs", tabProps);

  return (
    <Button __css={styles.tab} {...tabProps}>
      <Box as="span" display="flex" justifyContent="center" alignItems="center">
        {isSelected ? props.iconFill : props.iconLine}
      </Box>
    </Button>
  );
}
