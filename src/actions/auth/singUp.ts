"use server";
import { createClient } from "@/lib/supabase-server";

export async function signup(email: string, password: string) {
  const supabase = createClient();

  const credentials = {
    email,
    password,
  };

  const { data, error } = await supabase.auth.signUp(credentials);

  return { data, error };
}
