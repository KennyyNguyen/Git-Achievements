import React from "react";
import { Alert, AlertIcon } from "@chakra-ui/react";

export default function TestAlert(props) {
  const alertMessage = props.message
    ? "Connection successful!"
    : "Connection failed.";

  return (
    <Alert status={props.message ? "success" : "error"} variant="left-accent">
      <AlertIcon boxSize="20px" />
      {alertMessage}
    </Alert>
  );
}
