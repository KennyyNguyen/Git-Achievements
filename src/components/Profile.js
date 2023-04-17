import React, { useCallback, useState } from "react";
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
//import { api } from "../common/initGitlabApi";
import { updateSetting } from "../common/updateSetting";
import TestAlert from "./TestAlert";

export default function Profile() {
  const [show, setShow] = useState("");
  const [gitLabToken, setGitLabToken] = useState("");
  const [gitLabAddress, setGitLabAddress] = useState("");
  const [connectionStatus, setConnectionStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [testResults, setTestResults] = useState(null);

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
      .sendMessage({ type: "ping" })
      .then((result) => {
        setTestResults(result);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  }, []);

  // const handleTestConnection = async () => {
  //   try {
  //     if (!gitLabToken || !gitLabAddress) {
  //       throw new Error(
  //         "Please provide a personal access token and host address"
  //       );
  //     }
  //     const testApi = api(gitLabAddress, gitLabToken);
  //     const testFetch = await testApi.Users.current();
  //     console.log(testFetch.avatar_url);
  //     if (testFetch.avatar_url === undefined) {
  //       setConnectionStatus("Connection FAILED");
  //       alert(connectionStatus);
  //     }
  //   } catch (error) {
  //     setConnectionStatus("Connection error: " + error.message);
  //   }
  // };

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
            placeholder="Ex: https://gitlab.stud.idi.ntnu.no/api/v4/"
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
      <>{testResults && <TestAlert message={testResults} />}</>
    </Flex>
  );
}
