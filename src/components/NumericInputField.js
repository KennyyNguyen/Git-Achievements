import React from "react";
import { useField, Field } from "formik";
import {
  FormControl,
  FormLabel,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberDecrementStepper,
  NumberIncrementStepper,
  FormErrorMessage,
} from "@chakra-ui/react";

export default function NumericInputField({ label, ...props }) {
  const [field, meta, helpers] = useField(props);
  const isError = meta.touched && meta.error;

  const handleChange = (value) => {
    helpers.setValue(value);
  };

  return (
    <FormControl isInvalid={isError} isRequired>
      <FormLabel>{label}</FormLabel>
      <NumberInput
        {...field}
        {...props}
        value={field.value}
        onChange={handleChange}
      >
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
      <FormErrorMessage>{meta.error}</FormErrorMessage>
    </FormControl>
  );
}
