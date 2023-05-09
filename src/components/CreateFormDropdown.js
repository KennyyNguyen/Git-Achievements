import React from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Icon,
} from "@chakra-ui/react";
import { RiArrowDownSLine } from "react-icons/ri";

export default function CreateFormDropdown({ selectedForm, setSelectedForm }) {
  const handleMenuItemClick = (form) => {
    setSelectedForm(form);
  };

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<Icon as={RiArrowDownSLine} />}>
        {selectedForm}
      </MenuButton>
      <MenuList>
        <MenuItem onClick={() => handleMenuItemClick("Achievement Set")}>
          Achievement Set
        </MenuItem>
        <MenuItem onClick={() => handleMenuItemClick("Achievement")}>
          Achievement
        </MenuItem>
      </MenuList>
    </Menu>
  );
}
