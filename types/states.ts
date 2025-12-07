import { User } from "./user";

export type LangState = {
  locale: "ar" | "en";
  setLocale: (lang: "ar" | "en") => void;
  loadLocale: () => Promise<void>;
};

export type AuthStore= {
  user: null | User;
  login: (user: any) => void;
  logout: () => void;
}