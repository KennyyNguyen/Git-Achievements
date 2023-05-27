import supabase from "../../common/supabaseClient";

export const getAchievements = async (projectId) => {
  const { data, error } = await supabase
    .from("achievements")
    .select()
    .eq("achievement_set_id", projectId);

  if (error) throw error;
  return data;
};
