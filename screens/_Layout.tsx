import { View, Text } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Layout({ children }: { children: React.ReactNode }) {
  const insets = useSafeAreaInsets();

  return (
    <View
      className="bg-background"
      style={{
        flex: 1,
        paddingTop: insets.top,
        paddingBottom:32
      }}
    >
      
      {children}
    </View>
  );
}
