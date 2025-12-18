import { AllRoutes, RedirectRoute } from "@/types";
import { useUnifiedNavigation } from "./useNavigation";
import { useAuthStore } from "@/store/useAuthStore";

export const useRequireAuth = () => {
  const navigation = useUnifiedNavigation();
  const user = useAuthStore((s) => s.user);

  const requireAuth = (opts?: {
    redirectTo?: RedirectRoute;
    redirectParams?: any;
  }) => {
    if (!user) {
      navigation.navigate("Auth", {
        screen: "Login",
        redirectTo: opts?.redirectTo,
        redirectParams: opts?.redirectParams,
      });
      return false;
    }
    return true;
  };

  return requireAuth;
};
