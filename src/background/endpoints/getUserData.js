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
  const userAvatarRequest = currentUserData.avatar_url;
  const userNameRequest = currentUserData.name;

  const [mail, id, avatar, name] = await Promise.all([
    userMailRequest,
    userIdRequest,
    userAvatarRequest,
    userNameRequest,
  ]);

  await browser.storage.local.set({ mail, id, avatar, name });

  return console.log("API Fetched successfully!");
};
