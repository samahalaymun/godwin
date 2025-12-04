import { create } from "zustand";
import AsyncStorage from "@react-native-async-storage/async-storage";

type LangState = {
  locale: "ar" | "en";
  setLocale: (lang: "ar" | "en") => void;
  loadLocale: () => Promise<void>;
};

export const useLanguageStore = create<LangState>((set) => ({
  locale: "ar", // default

  setLocale: async (lang) => {
    await AsyncStorage.setItem("app_lang", lang);
    set({ locale: lang });
  },

  loadLocale: async () => {
    const saved = await AsyncStorage.getItem("app_lang");
    if (saved) set({ locale: saved as "ar" | "en" });
  },
}));
