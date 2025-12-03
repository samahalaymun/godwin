import { useCallback } from "react";
import { I18nManager } from "react-native";
import ar from "@/locales/ar.json";
import en from "@/locales/en.json";

const translations = { ar, en };

// Force Arabic as default language
I18nManager.forceRTL(true);

export const useTranslation = () => {
  const locale = "ar"; // Always use Arabic

  const t = useCallback(
    (key: string): string => {
      const keys = key.split(".");
      let value: any = translations[locale as keyof typeof translations];

      for (const k of keys) {
        if (value && typeof value === "object") {
          value = value[k];
        } else {
          return key;
        }
      }

      return typeof value === "string" ? value : key;
    },
    [locale]
  );

  return { t, locale, isRTL: true };
};
