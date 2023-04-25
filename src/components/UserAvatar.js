import React, { useState, useEffect } from "react";
import { Avatar, Spinner } from "@chakra-ui/react";
import Browser from "webextension-polyfill";

export default function UserAvatar() {
  const [status, setStatus] = useState({
    isLoading: true,
    error: null,
    avatar: "",
  });

  useEffect(() => {
    async function fetchUserAvatar() {
      try {
        const avatar = await Browser.storage.local.get("avatar");
        if (avatar.avatar) {
          setStatus({
            isLoading: false,
            error: null,
            avatar: avatar.avatar,
          });
        } else {
          setStatus({
            isLoading: false,
            error: "Failed to fetch data",
            avatar: "",
          });
        }
      } catch (error) {
        setStatus({ isLoading: false, error: error.message, avatar: "" });
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
    <Avatar size="lg" name="User Avatar" bg="gray.500" src={status.avatar} />
  );
}
