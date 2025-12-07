import { AuthStackParamList, LoginFormData } from "@/types";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Text, View, Image, StyleSheet } from "react-native";
import { useForm } from "react-hook-form";
import { Button, ButtonSpinner, ButtonText } from "@/components/ui/button";
import { VStack } from "@/components/ui/vstack";
import { useTranslation } from "@/hooks/useTranslation";
import { DynamicTextFields } from "@/components/Forms/DynamicTextFields";
import AppLogo from "@/components/Shared/AppLogo";

export function Login() {
  const { t, isRTL } = useTranslation();
  const navigation =
    useNavigation<NativeStackNavigationProp<AuthStackParamList>>();
  const {
    control,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<LoginFormData>();
  const onSubmit = (data: LoginFormData) => {
    console.log("Login data:", data);
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
        {""}
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
