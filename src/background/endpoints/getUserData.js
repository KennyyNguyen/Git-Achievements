import * as browser from "webextension-polyfill";
import { getSettings } from "../../common/getSettings";
import { initGitlabApi } from "../../common/initGitlabApi";

export const getUserData = async () => {
  console.log("Start fetching user data");

  const settings = await getSettings();
  const gitLabApi = initGitlabApi(settings);
  const currentUserData = await gitLabApi.Users.current();

  const userMailRequest = currentUserData.email;
  const userIdRequest = currentUserData.id;

  const [mail, id] = await Promise.all([userMailRequest, userIdRequest]);

  await browser.storage.local.set({ mail, id });

  return console.log("API Fetched successfully!");
};
