import React, { useState, useEffect } from "react";
import { Heading } from "@chakra-ui/react";
import { api } from "../api/initGitlabApi";

export default function UserName() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [name, setName] = useState("");

  useEffect(() => {
    async function fetchUserName() {
      try {
        const userData = await api.Users.current();
        setName(userData.name);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchUserName();
  }, []);

  let content;
  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (name) {
    content = <Heading>{name}</Heading>;
  } else if (error) {
    content = <p>{error}</p>;
  }

  return content;
}
