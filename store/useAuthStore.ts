import { AuthStore } from "@/types";
import { create } from "zustand";



export const useAuthStore = create<AuthStore>((set) => ({
  user:null,
  login: (user) => set({ user }),
  logout: () => set({ user: null }),
}));
