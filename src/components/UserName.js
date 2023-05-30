import React, { useState, useEffect } from "react";
import { Heading, Spinner } from "@chakra-ui/react";
import Browser from "webextension-polyfill";

export default function UserName() {
  const [status, setStatus] = useState({
    isLoading: true,
    error: null,
    name: "",
  });

  useEffect(() => {
    async function fetchUserName() {
      try {
        const name = await Browser.storage.local.get("userName");
        if (name.userName) {
          setStatus({
            isLoading: false,
            error: null,
            name: name.userName,
          });
        } else {
          setStatus({
            isLoading: false,
            error: "Failed to fetch data",
            name: "",
          });
        }
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
  return <Heading size="lg">{status.name}</Heading>;
}
