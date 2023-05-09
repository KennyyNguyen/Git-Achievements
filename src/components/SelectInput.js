import React from "react";
import { useField } from "formik";
import {
  FormControl,
  FormLabel,
  Select,
  FormErrorMessage,
} from "@chakra-ui/react";

export default function SelectInput({ label, ...props }) {
  const [field, meta] = useField(props);
  const isError = meta.touched && meta.error;

  return (
    <FormControl isInvalid={isError} isRequired>
      <FormLabel>{label}</FormLabel>
      <Select {...field} {...props} />
      <FormErrorMessage>{meta.error}</FormErrorMessage>
    </FormControl>
  );
}
