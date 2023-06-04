export const calculateCommitsPerDay = (commits) => {
  const dateCounts = {};

  for (const commit of commits) {
    const date = new Date(commit.committed_date).toISOString().split("T")[0];
    if (date in dateCounts) {
      dateCounts[date]++;
    } else {
      dateCounts[date] = 1;
    }
  }

  return dateCounts;
};
