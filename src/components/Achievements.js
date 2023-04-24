import React, { useEffect, useState } from "react";
import { Flex, Box } from "@chakra-ui/react";
import ProjectDropdownMenu from "./ProjectDropdownMenu";
import CreateAchievement from "./CreateAchievement";
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
      <Flex>
        {fetchError && <p>{fetchError}</p>}
        {achievements && (
          <Box>
            {achievements.map((achievement) => (
              <AchievementBadge
                key={achievement.id}
                achievement={achievement}
              />
            ))}
          </Box>
        )}
      </Flex>
      <Flex justifyContent="space-between">
        <CreateAchievement />
        <p>Pagination</p>
      </Flex>
    </Flex>
  );
}
