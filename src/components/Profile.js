import React, { useCallback, useEffect, useState } from "react";
import * as browser from "webextension-polyfill";
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
import { updateSetting } from "../common/updateSetting";
import TestAlert from "./TestAlert";
import { getSettings } from "../common/getSettings";

export default function Profile() {
  const [show, setShow] = useState("");
  const [gitLabToken, setGitLabToken] = useState("");
  const [gitLabAddress, setGitLabAddress] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [testResults, setTestResults] = useState(null);

  useEffect(() => {
    getSettings().then((settings) => {
      setGitLabToken(settings.token);
      setGitLabAddress(settings.address);
    });
  }, []);

  const handleShowPassword = () => setShow(!show);

  const handleGitLabTokenChange = async (event) => {
    setGitLabToken(event.target.value);
    await updateSetting({ gitLabToken: event.target.value });
  };

  const handleGitLabAddressChange = async (event) => {
    setGitLabAddress(event.target.value);
    await updateSetting({ gitLabAddress: event.target.value });
  };

  const handleTestConnection = useCallback(() => {
    setIsLoading(true);
    browser.runtime
      .sendMessage({ type: "getUserData" })
      .then((result) => {
        setTestResults(result);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  }, []);

  return (
    <Flex direction="column" gap="3">
      <Heading>Profile</Heading>
      <FormControl isRequired>
        <FormLabel>GitLab Personal Access Token</FormLabel>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<Icon as={RiKey2Fill} color="gray.400" />}
          />
          <Input
            value={gitLabToken}
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
            value={gitLabAddress}
            placeholder="Ex: https://gitlab.stud.idi.ntnu.no"
            onChange={handleGitLabAddressChange}
          />
        </InputGroup>
      </FormControl>
      <Button
        isLoading={isLoading}
        loadingText="Testing"
        onClick={handleTestConnection}
      >
        Test connection
      </Button>
      {testResults !== null && <TestAlert message={testResults} />}
    </Flex>
  );
}
