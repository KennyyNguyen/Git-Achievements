import React, { useState, useEffect } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import TextInput from "./TextInput";
import { updateSetting } from "../common/updateSetting";
import Browser from "webextension-polyfill";

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
        const achievementSetRepositoryMapping = {
          [selectedProject.name]: values.achievement_set_id,
        };
        await updateSetting(achievementSetRepositoryMapping);
        const object = await Browser.storage.local.get({
          achievementSetRepositoryMapping,
        });
        console.log(object);
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
