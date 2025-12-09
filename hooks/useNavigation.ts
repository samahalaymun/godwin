// hooks/useNavigation.ts
import { NavigationProp, useNavigation as rawUseNavigation, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RouteProp, useRoute } from "@react-navigation/native";

import {
  MainStackParamList,
  RootTabParamList,
  AuthStackParamList,
} from "@/types";

export type AllRoutes = RootTabParamList &
  MainStackParamList &
  AuthStackParamList;

// Hook: Unified navigation
export function useUnifiedNavigation() {
  const nav = useNavigation<NavigationProp<AllRoutes>>();

  return {
    navigate: nav.navigate,
    goBack: nav.goBack,
  };
}

// Unified Route Hook
export function useUnifiedRoute<T extends keyof AllRoutes>() {
  return useRoute<RouteProp<AllRoutes, T>>();
}
