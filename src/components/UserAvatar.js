import React from "react";
import { Avatar } from "@chakra-ui/react";
import { useGetUserDataQuery } from "../api/apiSlice";

export default function UserAvatar() {
  const {
    data: userData,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetUserDataQuery();

  let content;
  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (isSuccess) {
    content = (
      <Avatar
        size="xl"
        name="User Avatar"
        bg="gray.500"
        src={userData.avatar_url}
      />
    );
  } else if (isError) {
    content = <p>{error}</p>;
  }

  return content;
}
