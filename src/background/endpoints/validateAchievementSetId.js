import supabase from "../../common/supabaseClient";

export const validateAchievementSetId = async (achievement_set_id) => {
  const { data, error } = await supabase
    .from("achievement_sets")
    .select("achievement_set_id")
    .eq("achievement_set_id", achievement_set_id)
    .single();

  if (error || !data) {
    return { valid: false };
  } else {
    return { valid: true };
  }
};
