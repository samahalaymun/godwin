import { DynamicTextFields } from "@/components/Forms/DynamicTextFields";
import AppLogo from "@/components/Shared/AppLogo";
import { Button, ButtonText } from "@/components/ui/button";
import { VStack } from "@/components/ui/vstack";
import { useUnifiedNavigation } from "@/hooks/useNavigation";
import { useTranslation } from "@/hooks/useTranslation";
import {SighnUpFormData } from "@/types";
import React from "react";
import { useForm } from "react-hook-form";
import { View, Text, StyleSheet } from "react-native";

const Register: React.FC = () => {
  const { t, isRTL } = useTranslation();
  const navigation = useUnifiedNavigation();
  const {
    control,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<SighnUpFormData>();
  const onSubmit = (data: SighnUpFormData) => {
    console.log("signupdata data:", data);
  };
  return (
    <VStack
      space="4xl"
      className="h-full w-full flex justify-center bg-background px-5 flex-1"
    >
      {/* logo */}
      <AppLogo height={350} width={300} ratio={0.1} />

      {/* title */}
      <View className="flex items-center">
        <Text className="text-3xl text-secondary-900  tracking-wider font-bold">
          {t("auth.signup.title")}
        </Text>
      </View>

      {/* form */}
      <VStack space="lg" className=" flex items-center space-y-4 mx-4">
        <DynamicTextFields
          control={control}
          errors={errors}
          fields={[
            {
              name: "firstName",
              placeholder: t("auth.signup.firstNamePlaceholder"),
              type: "text",
              rules: {
                required: {
                  value: true,
                  message: t("auth.errorMessages.requiredField"),
                },
              },
            },
            {
              name: "lastName",
              placeholder: t("auth.signup.lastNamePlaceholder"),
              type: "text",
              rules: {
                required: {
                  value: true,
                  message: t("auth.errorMessages.requiredField"),
                },
              },
            },
          ]}
          isRTL={isRTL}
          fieldsPerRow={2}
        />
        <DynamicTextFields
          getValues={getValues}
          control={control}
          errors={errors}
          fields={[
            {
              name: "email",
              placeholder: t("auth.signup.emailPlaceholder"),
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
              placeholder: t("auth.signup.passwordPlaceholder"),
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
            {
              name: "confirmPassword",
              placeholder: t("auth.signup.confirmPasswordPlaceholder"),
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
                validate: (value: string) =>
                  value === getValues("password") ||
                  t("auth.errorMessages.passwordsDoNotMatch"),
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
        {t("auth.signup.haveAccount")}
        {""}
        <Text
          className=" font-bold text-primary-600 underline"
          onPress={() => navigation.navigate("Login")}
        >
          {t("auth.signup.login")}
        </Text>
      </Text>
    </VStack>
  );
};

const styles = StyleSheet.create({
  newAccountText: {
    textAlign: "center",
  },
});

export default Register;
