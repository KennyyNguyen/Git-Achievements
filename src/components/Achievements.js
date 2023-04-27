import React, { useEffect, useState } from "react";
import { Flex, Wrap } from "@chakra-ui/react";
import ProjectDropdownMenu from "./ProjectDropdownMenu";
import CreateAchievementModal from "./CreateAchievementModal";
import supabase from "../common/supabaseClient";
import AchievementBadge from "./achievementBadge";

export default function Achievements() {
  const [fetchError, setFetchError] = useState(null);
  const [achievements, setAchievements] = useState(null);

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
      <ProjectDropdownMenu />
      {fetchError && <p>{fetchError}</p>}
      {achievements && (
        <Wrap spacing="5%" justify="center" py={4}>
          {achievements.map((achievement) => (
            <AchievementBadge key={achievement.id} achievement={achievement} />
          ))}
        </Wrap>
      )}
      <Flex justifyContent="space-between">
        <CreateAchievementModal />
        <p>Pagination</p>
      </Flex>
    </Flex>
  );
}
