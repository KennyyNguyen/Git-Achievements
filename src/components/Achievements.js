import React, { useEffect, useState } from "react";
import { Flex, Wrap, Text } from "@chakra-ui/react";
import ProjectDropdownMenu from "./ProjectDropdownMenu";
import CreateModal from "./CreateModal";
import AddModal from "./AddModal";
import AchievementBadge from "./achievementBadge";
import browser from "webextension-polyfill";
import { Counter } from "./Counter";

export default function Achievements() {
  const [fetchError, setFetchError] = useState(null);
  const [achievements, setAchievements] = useState([]);
  const [selectedProject, setSelectedProject] = useState("");

  useEffect(() => {
    getAchievements();
  }, [selectedProject]);

  useEffect(() => {
    const handleLocalStorageChange = async (event) => {
      if (event.key === selectedProject.name) {
        getAchievements();
        const updatedProject = await browser.storage.local.get(event.key);
        setSelectedProject(updatedProject);
      }
    };
    window.addEventListener("storage", handleLocalStorageChange);
    return () =>
      window.removeEventListener("storage", handleLocalStorageChange);
  }, [selectedProject]);

  const getAchievements = async () => {
    try {
      if (selectedProject) {
        const projectObject = await browser.storage.local.get(
          selectedProject.name
        );
        const projectId = projectObject[selectedProject.name];
        const results = await browser.runtime.sendMessage({
          type: "getAchievements",
          projectId: projectId,
        });
        setAchievements(results);
        setFetchError(null);
      }
    } catch {
      setFetchError("This repository does not have any achievement sets.");
      setAchievements(null);
    }
  };

  return (
    <Flex direction="column">
      <ProjectDropdownMenu
        selectedProject={selectedProject}
        setSelectedProject={setSelectedProject}
      />
      <Counter />
      {fetchError && <Text color="tomato">{fetchError}</Text>}
      {achievements && (
        <Wrap spacing="5%" justify="center" py={4}>
          {achievements.map((achievement) => (
            <AchievementBadge
              key={achievement.achievement_id}
              achievement={achievement}
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
