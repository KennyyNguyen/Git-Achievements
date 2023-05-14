import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import TextInput from "./TextInput";
import { updateSetting } from "../common/updateSetting";
import browser from "webextension-polyfill";
import supabase from "../common/supabaseClient";

export default function AddAchievementSetForm({ selectedProject }) {
  const validationSchema = Yup.object({
    achievement_set_id: Yup.number()
      .min(1, "Must be a positive number")
      .typeError("ID must be number")
      .integer("ID must consist of only integers")
      .required("ID is required"),
  });

  return (
    <Formik
      initialValues={{ achievement_set_id: "" }}
      validationSchema={validationSchema}
      onSubmit={async (values, actions) => {
        const { data, error } = await supabase
          .from("achievement_sets")
          .select("achievement_set_id")
          .eq("achievement_set_id", values.achievement_set_id)
          .single();

        if (error || !data) {
          actions.setFieldError(
            "achievement_set_id",
            "The entered ID does not exist"
          );
          return;
        }

        const achievementSetRepositoryMapping = {
          [selectedProject.name]: values.achievement_set_id,
        };
        await updateSetting(achievementSetRepositoryMapping);
        const object = await browser.storage.local.get({
          achievementSetRepositoryMapping,
        });
        console.log(object);
        actions.resetForm();
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
