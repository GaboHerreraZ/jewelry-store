"use server";

import { createClient } from "@/lib/supabase-server";

export const getUser = async () => {
  const supabase = createClient();
  const { data } = await supabase.auth.getUser();

  if (!data.user) return { id: null, email: null, role: null };

  const { id, email, role } = data.user;

  return { id, email, role };
};
