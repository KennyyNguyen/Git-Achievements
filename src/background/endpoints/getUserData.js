import * as browser from "webextension-polyfill";
import { getSettings } from "../../common/getSettings";
import { initGitlabApi } from "../../common/initGitlabApi";

export const getUserData = async () => {
  console.log("Start fetching data");

  const settings = await getSettings();
  const gitLabApi = initGitlabApi(settings);
  const currentUser = await gitLabApi.Users.current();

  const userMailRequest = currentUser.email;
  const userIdRequest = currentUser.id;

  const [mail, id] = await Promise.all([userMailRequest, userIdRequest]);

  await browser.storage.local.set({ mail, id });

  return console.log("API Fetched successfully!");
};
