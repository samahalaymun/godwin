import { LoginFormData, LoginParams, RedirectableRoute } from "@/types";
import { Text, View, StyleSheet } from "react-native";
import { useForm } from "react-hook-form";
import { Button, ButtonText } from "@/components/ui/button";
import { VStack } from "@/components/ui/vstack";
import { useTranslation } from "@/hooks/useTranslation";
import { DynamicTextFields } from "@/components/Forms/DynamicTextFields";
import AppLogo from "@/components/Shared/AppLogo";
import { useUnifiedNavigation, useUnifiedRoute } from "@/hooks/useNavigation";
import { useAuthStore } from "@/store/useAuthStore";

export function Login() {
  const { t, isRTL } = useTranslation();
  const navigation = useUnifiedNavigation();
  const login = useAuthStore((s) => s.login);
  const route = useUnifiedRoute<"Login">();
  console.log(route);
  
  const params: LoginParams = route.params ?? {};

  const {
    control,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<LoginFormData>();

  const onSubmit = (data: LoginFormData) => {
    onLoginSuccess(data);
  };

  const onLoginSuccess = (userData: any) => {
    login(userData);
    console.log(params.redirectTo);

    if (params.redirectTo) {
      const tabNames = [
        "Home",
        "Products",
        "Wishlist",
        "Cart",
        "Settings",
      ] as const;
      if (
        (tabNames as readonly string[]).includes(params.redirectTo as string)
      ) {
        navigation.navigate(
          "MainTabs" as any,
          {
            screen: params.redirectTo,
            params: params.redirectParams,
          } as any
        );
        return;
      }
      navigation.navigate(params.redirectTo as any, params.redirectParams);
      return;
    }

    navigation.goBack();
  };

  return (
    <VStack
      space="2xl"
      className="h-full w-full flex justify-center bg-background px-5 flex-1"
    >
      {/* logo */}
      <AppLogo height={500} width={320} ratio={0.2} />

      {/* title */}
      <View className="flex items-center">
        <Text className="text-3xl text-secondary-900  tracking-wider font-bold">
          {t("auth.login.title")}
        </Text>
      </View>

      {/* form */}
      <VStack space="lg" className=" flex items-center space-y-4 mx-4">
        <DynamicTextFields
          getValues={getValues}
          control={control}
          errors={errors}
          fields={[
            {
              name: "email",
              placeholder: t("auth.login.emailPlaceholder"),
              type: "text",
              rules: {
                required: {
                  value: true,
                  message: t("auth.errorMessages.requiredField"),
                },
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: t("auth.errorMessages.invalidEmail"),
                },
              },
            },
            {
              name: "password",
              placeholder: t("auth.login.passwordPlaceholder"),
              type: "password",
              rules: {
                required: {
                  value: true,
                  message: t("auth.errorMessages.requiredField"),
                },
                minLength: {
                  value: 6,
                  message: t("auth.errorMessages.passwordTooShort"),
                },
              },
            },
          ]}
          isRTL={isRTL}
          fieldsPerRow={1}
          gap={10}
        />
        <Button
          onPress={handleSubmit(onSubmit)}
          className="p-3 w-full "
          size="xl"
          variant="solid"
        >
          <ButtonText className="font-bold text-md ">
            {t("auth.login.loginButton")}
          </ButtonText>
        </Button>
      </VStack>
      <Text
        className="text-lg text-secondary-900/70 text-semibold"
        style={styles.newAccountText}
      >
        {t("auth.login.noAccount")}
        <Text
          className=" font-bold text-primary-600 underline"
          onPress={() => navigation.navigate("Register")}
        >
          {t("auth.login.signUp")}
        </Text>
      </Text>
    </VStack>
  );
}
const styles = StyleSheet.create({
  newAccountText: {
    textAlign: "center",
  },
});
