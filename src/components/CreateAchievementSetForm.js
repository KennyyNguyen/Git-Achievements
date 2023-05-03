import React from "react";
import { VStack } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import supabase from "../common/supabaseClient";
import TextInput from "./TextInput";

export default function CreateAchievementSetForm() {
  const validationSchema = Yup.object({
    code: Yup.number()
      .max(9999, "Must be 4 digits or less")
      .typeError("Code must be number")
      .integer("Code must consist of only integers")
      .required("Code is required"),
    name: Yup.string().required("Name is required"),
    description: Yup.string().required("Description is required"),
  });

  return (
    <Formik
      initialValues={{ code: "", name: "", description: "" }}
      validationSchema={validationSchema}
      onSubmit={async (values, actions) => {
        console.log(values);
        const { data, error } = await supabase
          .from("achievement_sets")
          .insert(values)
          .select();
        if (error) {
          console.log(error);
        }
        if (data) {
          console.log("This is the data inserted in the database:", data);
          console.log("This is the id of the inserted object:", data[0].id);
          actions.resetForm();
        }
      }}
    >
      {(props) => (
        <Form id="achievementSetForm">
          <VStack spacing={7}>
            <TextInput
              label="Code"
              name="code"
              placeholder="Code to distribute"
            />
            <TextInput
              label="Name"
              name="name"
              placeholder="Name of achievement set"
            />
            <TextInput
              label="Description"
              name="description"
              placeholder="Short description of your project"
            />
          </VStack>
        </Form>
      )}
    </Formik>
  );
}
