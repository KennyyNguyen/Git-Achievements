import React from "react";
import { useField } from "formik";
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
    <FormControl isInvalid={isError}>
      <FormLabel htmlFor={props.id || props.name}>{label}</FormLabel>
      <Input {...field} {...props} className="text-input" />
      {isError && <FormErrorMessage>{meta.error}</FormErrorMessage>}
    </FormControl>
  );
}
