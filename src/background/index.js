import * as browser from "webextension-polyfill";
import { getUserData } from "./endpoints/getUserData";
import { getProjectData } from "./endpoints/getProjectData";
import supabase from "../common/supabaseClient";

console.log("background script loaded");

browser.runtime.onMessage.addListener((message) => {
  if (message.type === "ping") {
    return Promise.resolve("pong");
  }

  if (message.type === "getUserData") {
    return new Promise(async (resolve) => {
      try {
        await getUserData();
        resolve(true);
      } catch (error) {
        console.log(error.message);
        resolve(false);
      }
    });
  }

  if (message.type === "getProjectData") {
    return new Promise(async (resolve, reject) => {
      try {
        const projectData = await getProjectData();
        resolve(projectData);
      } catch (error) {
        console.log(error.message);
        resolve(error);
      }
    });
  }

  if (message.type === "validateAchievementSetId") {
    return new Promise(async (resolve) => {
      try {
        const { data, error } = await supabase
          .from("achievement_sets")
          .select("achievement_set_id")
          .eq("achievement_set_id", message.achievement_set_id)
          .single();

        if (error || !data) {
          resolve({ valid: false });
        } else {
          resolve({ valid: true });
        }
      } catch (error) {
        console.error("Error while validating Achievement Set ID: ", error);
        resolve({ valid: false });
      }
    });
  }
});
