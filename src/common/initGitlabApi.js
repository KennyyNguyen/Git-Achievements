import { Gitlab } from "@gitbeaker/browser";

export const initGitlabApi = (settings) => {
  if (!settings) {
    console.log("COULD NOT FETCH SETTINGS");
  }

  return new Gitlab({
    host: settings.address,
    token: settings.token,
    requestTimeout: 10000,
  });
};
