import * as browser from "webextension-polyfill";
import { getUserData } from "./endpoints/getUserData";
import { getProjectData } from "./endpoints/getProjectData";
import { validateAchievementSetId } from "./endpoints/validateAchievementSetId";
import { getAchievements } from "./endpoints/getAchievements";

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
        reject(error);
      }
    });
  }

  if (message.type === "validateAchievementSetId") {
    return new Promise(async (resolve, reject) => {
      try {
        const validationResponse = await validateAchievementSetId(
          message.achievement_set_id
        );
        resolve(validationResponse);
      } catch (error) {
        console.error("Error while validating Achievement Set ID: ", error);
        reject({ valid: false });
      }
    });
  }

  if (message.type === "getAchievements") {
    return new Promise(async (resolve, reject) => {
      try {
        const achievements = await getAchievements(message.projectId);
        resolve(achievements);
      } catch (error) {
        console.log(error.message);
        reject(error);
      }
    });
  }
});
