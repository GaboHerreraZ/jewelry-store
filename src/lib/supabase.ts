import { createClient } from "@supabase/supabase-js";

const supabaseClientSingleton = () => {
  const projectUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
  const projectKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

  return createClient(projectUrl, projectKey);
};

type SupabaseClientSingleton = ReturnType<typeof supabaseClientSingleton>;

const globalForSupabase = globalThis as unknown as {
  supabase: SupabaseClientSingleton | undefined;
};

const supabase = globalForSupabase.supabase ?? supabaseClientSingleton();

export default supabase;

if (process.env.NODE_ENV !== "production")
  globalForSupabase.supabase = supabase;
