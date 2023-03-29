import React from "react";
import {
  Box,
  Button,
  Icon,
  TabList,
  useTab,
  useMultiStyleConfig,
} from "@chakra-ui/react";
import {
  RiMedalLine,
  RiMedalFill,
  RiUser3Line,
  RiUser3Fill,
} from "react-icons/ri";

export default function Navbar() {
  const AchievementTab = React.forwardRef((props, ref) => {
    const tabProps = useTab({ ...props, ref });
    const isSelected = !!tabProps["aria-selected"];

    const styles = useMultiStyleConfig("Tabs", tabProps);

    return (
      <Button __css={styles.tab} {...tabProps}>
        <Box as="span" mr="2">
          {isSelected ? <Icon as={RiMedalFill} /> : <Icon as={RiMedalLine} />}
        </Box>
        {tabProps.children}
      </Button>
    );
  });

  const ProfileTab = React.forwardRef((props, ref) => {
    const tabProps = useTab({ ...props, ref });
    const isSelected = !!tabProps["aria-selected"];

    const styles = useMultiStyleConfig("Tabs", tabProps);

    return (
      <Button __css={styles.tab} {...tabProps}>
        <Box as="span" mr="2">
          {isSelected ? <Icon as={RiUser3Fill} /> : <Icon as={RiUser3Line} />}
        </Box>
        {tabProps.children}
      </Button>
    );
  });

  return (
    <TabList>
      <AchievementTab />
      <ProfileTab />
    </TabList>
  );
}
