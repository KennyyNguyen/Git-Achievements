import React, { useEffect, useState } from "react";
import { Flex, Wrap, Button } from "@chakra-ui/react";
import ProjectDropdownMenu from "./ProjectDropdownMenu";
import CreateModal from "./CreateModal";
import AddModal from "./AddModal";
import AchievementBadge from "./achievementBadge";
import browser from "webextension-polyfill";

export default function Achievements() {
  const [fetchError, setFetchError] = useState(null);
  const [achievements, setAchievements] = useState([]);
  const [selectedProject, setSelectedProject] = useState("");

  useEffect(() => {
    async function fetchAchievements() {
      try {
        const results = await browser.runtime.sendMessage({
          type: "getAchievements",
        });
        setAchievements(results);
        setFetchError(null);
      } catch {
        setFetchError("Could not fetch the achievements");
        setAchievements(null);
      }
    }
    fetchAchievements();
  }, []);

  return (
    <Flex direction="column">
      <ProjectDropdownMenu
        selectedProject={selectedProject}
        setSelectedProject={setSelectedProject}
      />
      {fetchError && <p>{fetchError}</p>}
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
