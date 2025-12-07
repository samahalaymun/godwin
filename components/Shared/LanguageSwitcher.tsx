import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { useLanguageStore } from "@/store/useLanguageStore";
import { useTranslation } from "@/hooks/useTranslation";

const LanguageSwitcher: React.FC = () => {
  const { locale, setLocale } = useLanguageStore();
  const { t } = useTranslation();

  const toggleLanguage = async () => {
    const newLang = locale === "en" ? "ar" : "en";
    await setLocale(newLang);
  };

  return (
    <View style={{ alignItems: "center", marginVertical: 10 }}>
      <TouchableOpacity
        onPress={toggleLanguage}
        style={{
          backgroundColor: "#6A1B9A",
          paddingVertical: 10,
          paddingHorizontal: 20,
          borderRadius: 8,
        }}
      >
        <Text style={{ color: "white", fontWeight: "bold", fontSize: 16 }}>
          {locale === "en" ? "العربية" : "English"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LanguageSwitcher;
