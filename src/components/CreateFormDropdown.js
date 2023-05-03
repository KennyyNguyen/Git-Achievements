import React, { useState } from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Icon,
} from "@chakra-ui/react";
import { RiArrowDownSLine } from "react-icons/ri";

export default function CreateFormDropdown() {
  const [selectedForm, setSelectedForm] = useState(null);

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<Icon as={RiArrowDownSLine} />}>
        Achievement
      </MenuButton>
      <MenuList>
        <MenuItem>Achievement</MenuItem>
        <MenuItem>Achievement set</MenuItem>
      </MenuList>
    </Menu>
  );
}
