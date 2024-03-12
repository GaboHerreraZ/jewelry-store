"use server";

import { createClient } from "@/lib/supabase-server";
import { revalidatePath } from "next/cache";

export const signInWithPassword = async (email: string, password: string) => {
  const supabase = createClient();

  const credentials = {
    email,
    password,
  };

  const { data, error } = await supabase.auth.signInWithPassword(credentials);

  revalidatePath("/", "page");

  return { data, error };
};
