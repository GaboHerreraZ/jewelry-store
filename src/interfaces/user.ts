import { Gender } from "@/utils/constant";

export interface User {
  id: string;
  email: string;
  authId: string;
  name: string;
  lastName: string;
  phone: string;
  gender: Gender | string;
  completeProfile: boolean;
  birthMonth: number;
  birthDay: number;
  createdAt: Date;
  updatedAt: Date;
  preference: Preference | null;
  wholesaler: boolean;
}

export interface Preference {
  id: string;
  women: boolean;
  man: boolean;
  kid: boolean;
  ring: boolean;
  necklace: boolean;
  anklet: boolean;
  rosarie: boolean;
  charm: boolean;
  bracelet: boolean;
  candonga: boolean;
  earring: boolean;
}
