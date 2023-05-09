import React, { useEffect, useState } from "react";
import { Flex, Wrap, Button } from "@chakra-ui/react";
import ProjectDropdownMenu from "./ProjectDropdownMenu";
import CreateModal from "./CreateModal";
import AddModal from "./AddModal";
import supabase from "../common/supabaseClient";
import AchievementBadge from "./achievementBadge";

export default function Achievements() {
  const [fetchError, setFetchError] = useState(null);
  const [achievements, setAchievements] = useState(null);
  const [selectedProject, setSelectedProject] = useState("");

  useEffect(() => {
    async function fetchAchievements() {
      const { data, error } = await supabase.from("achievements").select();
      if (error) {
        setFetchError("Could not fetch the achivements");
        setAchievements(null);
      }
      if (data) {
        setAchievements(data);
        setFetchError(null);
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
