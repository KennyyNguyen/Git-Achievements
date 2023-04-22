import * as browser from "webextension-polyfill";
import { getLatestDataFromGitLab } from "./endpoints/getLatestDataFromGitLab";

console.log("background script loaded");

browser.runtime.onMessage.addListener((message) => {
  if (message.type === "ping") {
    return Promise.resolve("pong");
  }

  if (message.type === "getLatestDataFromGitLab") {
    return new Promise(async (resolve) => {
      try {
        await getLatestDataFromGitLab();
        resolve(true);
      } catch (error) {
        console.log(error.message);
        resolve(false);
      }
    });
  }
});
