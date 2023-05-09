import React, { useState, useEffect } from "react";
import { VStack, useToast } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import supabase from "../common/supabaseClient";
import TextInput from "./TextInput";
import SelectInput from "./SelectInput";
import NumericInputField from "./NumericInputField";

export default function CreateAchievementForm() {
  const [insertStatus, setInsertStatus] = useState(null);

  const validationSchema = Yup.object({
    achievement_set_id: Yup.number()
      .min(1, "Must be a positive number")
      .typeError("ID must be number")
      .integer("ID must consist of only integers")
      .required("ID is required"),
    name: Yup.string().required("Name is required"),
    description: Yup.string().required("Description is required"),
    criteria: Yup.string().required("Criteria is required"),
    number: Yup.number()
      .max(99, "Must be 2 digits or less")
      .required("Number is required"),
  });

  const toast = useToast();

  useEffect(() => {
    if (insertStatus === true) {
      toast({
        title: "Success!",
        description: "You have successfully created a new achievement.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      setInsertStatus(null);
    } else if (insertStatus === false) {
      toast({
        title: "Error!",
        description: "Achievement set ID does not exist.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      setInsertStatus(null);
    }
  }, [insertStatus, toast]);

  return (
    <Formik
      initialValues={{
        achievement_set_id: "",
        name: "",
        description: "",
        criteria: "",
        number: "",
      }}
      validationSchema={validationSchema}
      onSubmit={async (values, actions) => {
        const criteria = {
          [values.criteria]: values.number,
        };

        const achievementToInsert = {
          achievement_set_id: values.achievement_set_id,
          name: values.name,
          description: values.description,
          criteria: criteria,
        };

        const { data, error } = await supabase
          .from("achievements")
          .insert(achievementToInsert)
          .select();
        if (error) {
          console.log(error);
          setInsertStatus(false);
        }
        if (data) {
          actions.resetForm();
          setInsertStatus(true);
        }
      }}
    >
      {(props) => (
        <Form id="achievementForm">
          <VStack spacing={7}>
            <TextInput
              label="Achievement set ID"
              name="achievement_set_id"
              placeholder="ID of achievement set"
            />
            <TextInput
              label="Name"
              name="name"
              placeholder="Name of achievement"
            />
            <TextInput
              label="Description"
              name="description"
              placeholder="Short description of your achievement"
            />
            <SelectInput
              label="Criteria"
              name="criteria"
              placeholder="Select a criteria"
            >
              <option value="commits">Commit(s)</option>
              <option value="merge_requests">Merge request(s)</option>
            </SelectInput>
            <NumericInputField
              min={1}
              max={99}
              label="Number of criteria"
              name="number"
              placeholder="Enter a number"
            />
          </VStack>
        </Form>
      )}
    </Formik>
  );
}
