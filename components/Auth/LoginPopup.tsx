import { View, Text, TouchableOpacity, Modal, Image } from "react-native";
import React from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { useTranslation } from "@/hooks/useTranslation";

interface Props {
  visible: boolean;
  onClose: () => void;
  onLogin: () => void;
}

const LoginPopup = ({ visible, onClose, onLogin }: Props) => {
  const { t, isRTL } = useTranslation();

  return (
    <Modal visible={visible} transparent animationType="fade">
      <View className="flex-1 bg-black/40 justify-center items-center px-6">
        <View className="bg-background-200 relative w-full rounded-xl p-6 items-center">
          {/* close */}
          <View
            pointerEvents="box-none"
            className="absolute top-6 flex flex-row w-full z-50"
            style={{
              marginBottom: 10,
              justifyContent: isRTL ? "flex-start" : "flex-end",
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              onPress={onClose}
              className="p-2 rounded-full bg-secondary-200"
            >
              <MaterialIcons name="close" size={32} color="#444" />
            </TouchableOpacity>
          </View>
          {/* Logo */}
          <View className="w-full h-[240px] bg-primary500">
            <Image
              source={require("@/assets/auth/logo-2.png")}
              style={{ width: "100%", height: 240 }}
              resizeMode="cover"
            />
          </View>

          {/* Text */}
          <Text className="text-xl font-semibold text-center text-secondary-900 mb-2">
            {t("auth.login.popupTitle")}
          </Text>

          <Text className="text-secondary-700 mb-5 text-center">
            {t("auth.login.popupMessage")}
          </Text>

          {/* Login Button */}
          <TouchableOpacity
            onPress={onLogin}
            className="bg-primary-500 w-full py-3 rounded-xl mb-3"
          >
            <Text className="text-white text-center text-base font-semibold">
              {t("auth.login.loginButton")}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default LoginPopup;
