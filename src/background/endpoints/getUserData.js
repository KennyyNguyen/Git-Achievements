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
  const userAvatarUrlRequest = currentUserData.avatar_url;
  const userNameRequest = currentUserData.name;

  const [userMail, userId, userAvatarUrl, userName] = await Promise.all([
    userMailRequest,
    userIdRequest,
    userAvatarUrlRequest,
    userNameRequest,
  ]);

  await browser.storage.local.set({
    userMail,
    userId,
    userAvatarUrl,
    userName,
  });

  return console.log("API Fetched successfully!");
};
