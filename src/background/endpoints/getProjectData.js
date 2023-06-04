import { getSettings } from "../../common/getSettings";
import { initGitlabApi } from "../../common/initGitlabApi";

export const getProjectData = async () => {
  const settings = await getSettings();
  const gitLabApi = initGitlabApi(settings);
  const projectData = await gitLabApi.Projects.all({ owned: true });

  return projectData;
};
