import { create } from "zustand";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { LangState } from "@/types";

export const useLanguageStore = create<LangState>((set) => ({
  locale: "ar",
  setLocale: async (lang) => {
    await AsyncStorage.setItem("app_lang", lang);
    set({ locale: lang });
  },

  loadLocale: async () => {
    const saved = await AsyncStorage.getItem("app_lang");
    if (saved) set({ locale: saved as "ar" | "en" });
  },
}));
