import React, { useState, useEffect } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import TextInput from "./TextInput";
import { updateSetting } from "../common/updateSetting";
import browser from "webextension-polyfill";
import { useToast } from "@chakra-ui/react";

export default function AddAchievementSetForm({ selectedProject }) {
  const [storeStatus, setStoreStatus] = useState();

  const validationSchema = Yup.object({
    achievement_set_id: Yup.number()
      .min(1, "Must be a positive number")
      .typeError("ID must be number")
      .integer("ID must consist of only integers")
      .required("ID is required"),
  });

  const toast = useToast();

  useEffect(() => {
    if (storeStatus === true) {
      toast({
        title: "Success!",
        description: `You have added an achievement set to ${selectedProject.name}`,
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      setStoreStatus(null);
    } else if (storeStatus === false) {
      toast({
        title: "Error!",
        description: "An error occurred while submitting the form.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      setStoreStatus(null);
    }
  }, [storeStatus, toast, selectedProject.name]);

  return (
    <Formik
      initialValues={{ achievement_set_id: "" }}
      validationSchema={validationSchema}
      onSubmit={async (values, actions) => {
        try {
          const response = await browser.runtime.sendMessage({
            type: "validateAchievementSetId",
            achievement_set_id: values.achievement_set_id,
          });

          if (!response.valid) {
            actions.setFieldError(
              "achievement_set_id",
              "The entered ID does not exist. Please enter a valid ID."
            );
            return;
          }

          const repositoryAchievementSetMapping = {
            [selectedProject.name]: values.achievement_set_id,
          };
          await updateSetting(repositoryAchievementSetMapping);
          setStoreStatus(true);
          actions.resetForm();
        } catch (error) {
          console.error(error);
          setStoreStatus(false);
        }
      }}
    >
      {(props) => (
        <Form id="addAchievementSetForm">
          <TextInput
            label="Achievement set ID"
            name="achievement_set_id"
            placeholder="ID of achievement set"
          />
        </Form>
      )}
    </Formik>
  );
}
