import React, { useState, useEffect } from "react";
import { Heading, Spinner } from "@chakra-ui/react";
import { getSettings } from "../common/getSettings";
import { initGitlabApi } from "../common/initGitlabApi";

export default function UserName() {
  const [status, setStatus] = useState({
    isLoading: true,
    error: null,
    name: "",
  });

  useEffect(() => {
    async function fetchUserName() {
      try {
        const settings = await getSettings();
        const gitlabApi = initGitlabApi(settings);
        const userData = await gitlabApi.Users.current();
        setStatus({ isLoading: false, error: null, name: userData.name });
      } catch (error) {
        setStatus({ isLoading: false, error: error.message, name: "" });
      }
    }
    fetchUserName();
  }, []);

  if (status.isLoading) {
    return <Spinner />;
  }
  if (status.error) {
    return <p>{status.error}</p>;
  }
  return <Heading>{status.name}</Heading>;
}
