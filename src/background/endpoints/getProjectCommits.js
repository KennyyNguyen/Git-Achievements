import { getSettings } from "../../common/getSettings";
import { initGitlabApi } from "../../common/initGitlabApi";

export const getProjectCommits = async (projectId, author) => {
  const settings = await getSettings();
  const gitLabApi = initGitlabApi(settings);

  let page = 1;
  let perPage = 100;
  let projectCommits = [];
  let moreCommitsExist = true;

  while (moreCommitsExist) {
    const commits = await gitLabApi.Commits.all(projectId, {
      author: author,
      page: page,
      perPage: perPage,
    });

    if (commits.length > 0) {
      projectCommits = [...projectCommits, ...commits];
      page++;
    } else {
      moreCommitsExist = false;
    }
  }

  projectCommits.sort(
    (a, b) => new Date(b.committed_date) - new Date(a.committed_date)
  );

  return projectCommits;
};
