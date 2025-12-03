import { create } from "zustand";

interface AuthStore {
  user: null | { id: string; name: string };
  login: (user: any) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: {id: "1", name: "John Doe"},
  login: (user) => set({ user }),
  logout: () => set({ user: null }),
}));
