import { create } from "zustand";
import { setAppLanguage, getStoredLanguage } from "@/utils/language";
import { LangState } from "@/types";

export const useLanguageStore = create<LangState>((set) => ({
  locale: "en",
  isInitialized: false,
  setLocale: (lang) => {
    set({ locale: lang });
    setAppLanguage(lang); // هنا السحر (يتعامل مع RTL + restart)
  },
  initLanguage: async () => {
    const lang = await getStoredLanguage();
    const safeLang = lang === "ar" || lang === "en" ? lang : "en";
    set({ locale: safeLang, isInitialized: true });
  },
}));
