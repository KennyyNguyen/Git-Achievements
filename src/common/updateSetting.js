import * as browser from "webextension-polyfill";

export const updateSetting = async (objectToStore) => {
  await browser.storage.local.set(objectToStore);
  console.log("Setting updated!");
};
