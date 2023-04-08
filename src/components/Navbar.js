import React from "react";
import { TabList } from "@chakra-ui/react";
import {
  RiMedalLine,
  RiMedalFill,
  RiUser3Line,
  RiUser3Fill,
} from "react-icons/ri";
import TabButton from "./TabButton";

export default function Navbar() {
  return (
    <TabList>
      <TabButton iconFill={<RiMedalFill />} iconLine={<RiMedalLine />} />
      <TabButton iconFill={<RiUser3Fill />} iconLine={<RiUser3Line />} />
    </TabList>
  );
}
