import React, { useState, useEffect } from "react";
import { Avatar, Spinner } from "@chakra-ui/react";
import { getSettings } from "../common/getSettings";
import { initGitlabApi } from "../common/initGitlabApi";

export default function UserAvatar() {
  const [status, setStatus] = useState({
    isLoading: true,
    error: null,
    avatar: "",
  });

  useEffect(() => {
    async function fetchUserAvatar() {
      try {
        const settings = await getSettings();
        const gitlabApi = initGitlabApi(settings);
        const userData = await gitlabApi.Users.current();
        setStatus({
          isLoading: false,
          error: null,
          avatar: userData.avatar_url,
        });
      } catch (error) {
        setStatus({ isLoading: false, error: error.message, name: "" });
      }
    }
    fetchUserAvatar();
  }, []);

  if (status.isLoading) {
    return <Spinner />;
  }
  if (status.error) {
    return <p>{status.error}</p>;
  }
  return (
    <Avatar size="xl" name="User Avatar" bg="gray.500" src={status.avatar} />
  );
}
