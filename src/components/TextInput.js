import React from "react";
import { useField, Field } from "formik";
import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
} from "@chakra-ui/react";

export default function TextInput({ label, ...props }) {
  const [field, meta] = useField(props);
  const isError = meta.touched && meta.error;

  return (
    <FormControl isInvalid={isError} isRequired>
      <FormLabel>{label}</FormLabel>
      <Input as={Field} {...field} {...props} />
      <FormErrorMessage>{meta.error}</FormErrorMessage>
    </FormControl>
  );
}
