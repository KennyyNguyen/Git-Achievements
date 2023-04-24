import * as browser from "webextension-polyfill";

export const getSettings = async () => {
  const settings = await browser.storage.local.get([
    "gitLabToken",
    "gitLabAddress",
  ]);

  return {
    token: settings.gitLabToken,
    address: settings.gitLabAddress || [0],
  };
};
