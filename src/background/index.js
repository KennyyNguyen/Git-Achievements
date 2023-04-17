import * as browser from "webextension-polyfill";

console.log("background script loaded");

const handleMessage = (message) => {
  if (message.type === "ping") {
    return Promise.resolve(true);
  }
  console.log("pong");
};

browser.runtime.onMessage.addListener(handleMessage);
