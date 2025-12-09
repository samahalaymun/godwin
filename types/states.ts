import { User } from "./user";

export type LangState = {
  locale: "ar" | "en";
  isInitialized: boolean;
  setLocale: (lang: "ar" | "en") => void;
  initLanguage: () => Promise<void>;
};

export type AuthStore= {
  user: null | User;
  login: (user: any) => void;
  logout: () => void;
}