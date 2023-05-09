import React, { useState, useEffect } from "react";
import { VStack, useToast } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import supabase from "../common/supabaseClient";
import TextInput from "./TextInput";

export default function CreateAchievementSetForm() {
  const [insertStatus, setInsertStatus] = useState(null);
  const [achievementId, setAchievementId] = useState("");

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    description: Yup.string().required("Description is required"),
  });

  const toast = useToast();

  useEffect(() => {
    if (insertStatus === true) {
      toast({
        title: "New achievement set created!",
        description: `Write down the achievement ID: ${achievementId}`,
        status: "success",
        duration: 30000,
        isClosable: true,
      });
      setInsertStatus(null);
    } else if (insertStatus === false) {
      toast({
        title: "Error!",
        description: "Could not create new achievement set",
        status: "error",
        duration: 30000,
        isClosable: true,
      });
      setInsertStatus(null);
    }
  }, [insertStatus, toast, achievementId]);

  return (
    <Formik
      initialValues={{ name: "", description: "" }}
      validationSchema={validationSchema}
      onSubmit={async (values, actions) => {
        const { data, error } = await supabase
          .from("achievement_sets")
          .insert(values)
          .select();
        if (error) {
          console.log(error);
          setInsertStatus(false);
        }
        if (data) {
          setAchievementId(data[0].achievement_set_id);
          actions.resetForm();
          setInsertStatus(true);
        }
      }}
    >
      {(props) => (
        <Form id="achievementForm">
          <VStack spacing={7}>
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
