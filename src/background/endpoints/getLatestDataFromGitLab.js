import * as browser from "webextension-polyfill";
import { getSettings } from "../../common/getSettings";
import { initGitlabApi } from "../../common/initGitlabApi";

export const getLatestDataFromGitLab = async () => {
  console.log("Start fetching data");

  const settings = await getSettings();
  const gitLabApi = initGitlabApi(settings);
  const currentUser = await gitLabApi.Users.current();

  const userData = {
    currentUser: currentUser,
  };

  await browser.storage.local.set({ userData });

  return console.log("API fetched successfully!" + { userData });
};
