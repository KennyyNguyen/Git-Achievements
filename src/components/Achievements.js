import React, { useEffect, useState } from "react";
import { Flex, Wrap, Text } from "@chakra-ui/react";
import ProjectDropdownMenu from "./ProjectDropdownMenu";
import CreateModal from "./CreateModal";
import AddModal from "./AddModal";
import AchievementBadgeModal from "./AchievementBadgeModal";
import browser from "webextension-polyfill";
import { calculateCommitsPerDay } from "../common/calculateCommitsPerDay";

export default function Achievements() {
  const [fetchError, setFetchError] = useState(null);
  const [achievements, setAchievements] = useState([]);
  const [selectedProject, setSelectedProject] = useState("");
  const [commits, setCommits] = useState([]);
  const [commitsPerDay, setCommitsPerDay] = useState(0);

  useEffect(() => {
    getAchievementsFromDatabase();
    getProjectCommits();
  }, [selectedProject]);

  // useEffect(() => {
  //   const handleLocalStorageChange = async (event) => {
  //     if (event.key === selectedProject.name) {
  //       getAchievementsFromDatabase();
  //       const updatedProject = await browser.storage.local.get(event.key);
  //       setSelectedProject(updatedProject);
  //       console.log("This first part");
  //     }
  //   };
  //   console.log("This second part");
  //   window.addEventListener("storage", handleLocalStorageChange);
  //   return () =>
  //     window.removeEventListener("storage", handleLocalStorageChange);
  // }, [selectedProject]);

  const getAchievementsFromDatabase = async () => {
    try {
      if (selectedProject) {
        const repositoryAchievementSetMappingObject =
          await browser.storage.local.get(selectedProject.name);

        const achievementSetId =
          repositoryAchievementSetMappingObject[selectedProject.name];

        const results = await browser.runtime.sendMessage({
          type: "getAchievements",
          projectId: achievementSetId,
        });
        setAchievements(results);

        setFetchError(null);
      }
    } catch {
      setFetchError("This repository does not have any achievement sets.");
      setAchievements(null);
    }
  };

  const getProjectCommits = async () => {
    try {
      const userMailObject = await browser.storage.local.get("userMail");
      const projectCommits = await browser.runtime.sendMessage({
        type: "getProjectCommits",
        projectId: selectedProject.id,
        author: userMailObject.userMail,
      });
      setCommits(projectCommits);
      const commitsPerDayCalc = calculateCommitsPerDay(projectCommits);
      setCommitsPerDay(commitsPerDayCalc);
    } catch (error) {
      setFetchError("Failed to fetch project commits: " + error);
    }
  };

  return (
    <Flex direction="column">
      <ProjectDropdownMenu
        selectedProject={selectedProject}
        setSelectedProject={setSelectedProject}
      />
      {fetchError && <Text color="tomato">{fetchError}</Text>}
      {achievements && (
        <Wrap spacing="5%" justify="center" py={4}>
          {achievements.map((achievement) => (
            <AchievementBadgeModal
              key={achievement.achievement_id}
              achievement={achievement}
              commitsPerDay={commitsPerDay}
            />
          ))}
        </Wrap>
      )}
      <p>Pagination</p>
      <Flex justifyContent="space-around">
        <CreateModal />
        <AddModal selectedProject={selectedProject} />
      </Flex>
    </Flex>
  );
}
