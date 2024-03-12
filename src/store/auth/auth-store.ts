import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { create } from "zustand";

interface State {
  signInWithOAuth: () => Promise<any>;
}

export const useAuthStore = create<State>()(() => {
  const supabase = createClientComponentClient();

  return {
    signInWithOAuth: async () => {
      const { data } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: "http://localhost:3000/auth/callback",
        },
      });
      return data;
    },
  };
});
