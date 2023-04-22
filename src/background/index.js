import * as browser from "webextension-polyfill";
import { getUserData } from "./endpoints/getUserData";

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
});
