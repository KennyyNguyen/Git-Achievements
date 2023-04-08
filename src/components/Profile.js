import React, { useState } from "react";
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import { RiKey2Fill, RiGitlabFill } from "react-icons/ri";

export default function Profile() {
  const [show, setShow] = useState("");
  const handleClick = () => setShow(!show);

  return (
    <Flex direction="column">
      <Heading>Profile</Heading>
      <FormControl>
        <FormLabel>Personal GitLab Token</FormLabel>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<Icon as={RiKey2Fill} color="gray.400" />}
          />
          <Input
            placeholder="Your GitLab token"
            type={show ? "text" : "password"}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
        <FormLabel>GitLab Host Address</FormLabel>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<Icon as={RiGitlabFill} color="gray.400" />}
          />
          <Input placeholder="Ex: https://gitlab.stud.idi.ntnu.no/api/v4/" />
        </InputGroup>
      </FormControl>
    </Flex>
  );
}
