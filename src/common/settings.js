import * as browser from "webextension-polyfill";

export default async function updateSetting(objectToStore) {
  await browser.storage.local.set(objectToStore);
  console.log("Settings updated!");
}
