import React, { useState, useEffect } from "react";
import { Avatar } from "@chakra-ui/react";
import { api } from "../api/initGitlabApi";

export default function UserName() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [avatar, setAvatar] = useState("");

  useEffect(() => {
    async function fetchUserAvatar() {
      try {
        const userData = await api.Users.current();
        setAvatar(userData.avatar_url);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchUserAvatar();
  }, []);

  let content;
  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (avatar) {
    content = (
      <Avatar size="xl" name="User Avatar" bg="gray.500" src={avatar} />
    );
  } else if (error) {
    content = <p>{error}</p>;
  }

  return content;
}
