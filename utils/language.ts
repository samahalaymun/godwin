import { I18nManager } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Updates from "expo-updates";

export async function setAppLanguage(lang: "ar" | "en") {
  const isRTL = lang === "ar";

  await AsyncStorage.setItem("APP_LANG", lang);

  //  I18nManager.allowRTL(isRTL);
  //I18nManager.forceRTL(isRTL);

  await Updates.reloadAsync();
}

export async function getStoredLanguage() {
  const lang = await AsyncStorage.getItem("APP_LANG");
  return lang || "en";
}
