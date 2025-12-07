import { AuthStore } from "@/types";
import { create } from "zustand";



export const useAuthStore = create<AuthStore>((set) => ({
  user:{name:"John Doe", email:"", id:1},
  login: (user) => set({ user }),
  logout: () => set({ user: null }),
}));
