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
import { api } from "../api/initGitlabApi";
import updateSetting from "../common/settings";

export default function Profile() {
  const [show, setShow] = useState("");
  const [gitLabToken, setGitLabToken] = useState("");
  const [host, setHost] = useState("");
  const [connectionStatus, setConnectionStatus] = useState("");

  const handleShowPassword = () => setShow(!show);

  const handleGitLabTokenChange = async (event) => {
    setGitLabToken(event.target.value);
    await updateSetting({ gitLabToken: event.target.value });
  };

  const handleHostChange = (event) => setHost(event.target.value);

  const handleTestConnection = async () => {
    try {
      if (!gitLabToken || !host) {
        throw new Error(
          "Please provide a personal access token and host address"
        );
      }
      const testApi = api(host, gitLabToken);
      const testFetch = await testApi.Users.current();
      console.log(testFetch.avatar_url);
      if (testFetch.avatar_url === undefined) {
        setConnectionStatus("Connection FAILED");
        alert(connectionStatus);
      }
    } catch (error) {
      setConnectionStatus("Connection error: " + error.message);
    }
  };

  return (
    <Flex direction="column">
      <Heading>Profile</Heading>
      <FormControl isRequired>
        <FormLabel>GitLab Personal Access Token</FormLabel>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<Icon as={RiKey2Fill} color="gray.400" />}
          />
          <Input
            placeholder="Your GitLab token"
            type={show ? "text" : "password"}
            onChange={handleGitLabTokenChange}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleShowPassword}>
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
          <Input
            placeholder="Ex: https://gitlab.stud.idi.ntnu.no/api/v4/"
            onChange={handleHostChange}
          />
        </InputGroup>
      </FormControl>
      <Button onClick={handleTestConnection}>Test connection</Button>
      <p>{connectionStatus}</p>
    </Flex>
  );
}
