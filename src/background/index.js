import * as browser from "webextension-polyfill";
import { getUserData } from "./endpoints/getUserData";
import { getProjectData } from "./endpoints/getProjectData";

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
    return new Promise(async (resolve) => {
      try {
        const projectData = await getProjectData();
        resolve(projectData);
      } catch (error) {
        console.log(error.message);
        resolve(false);
      }
    });
  }
});
