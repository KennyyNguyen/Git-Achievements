import React from "react";
import { Heading } from "@chakra-ui/react";
import { useGetUserDataQuery } from "../api/apiSlice";

export default function UserName() {
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
    content = <Heading>{userData.name}</Heading>;
  } else if (isError) {
    content = <p>{error}</p>;
  }

  return content;
}
