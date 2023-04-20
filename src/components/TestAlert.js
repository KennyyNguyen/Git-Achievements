import React from "react";
import { Alert, AlertIcon, AlertTitle } from "@chakra-ui/react";

export default function TestAlert(props) {
  return (
    <Alert
      status="success"
      variant="subtle"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
    >
      <AlertIcon boxSize="30px" mr={0} />
      <AlertTitle fontSize="md">{props.message}</AlertTitle>
    </Alert>
  );
}
