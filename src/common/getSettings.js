import * as browser from "webextension-polyfill";

export const getSettings = async () => {
  const settings = await browser.storage.local.get([
    "gitLabToken",
    "gitLabAddress",
  ]);
  console.log(settings);

  return {
    token: settings.gitLabToken,
    address: settings.gitLabAddress || [0],
  };
};
