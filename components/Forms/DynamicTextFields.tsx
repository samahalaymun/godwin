import React from "react";
import { View, I18nManager, StyleSheet } from "react-native";
import { Controller } from "react-hook-form";
import {
  FormControl,
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
} from "@/components/ui/form-control";
import { Input, InputField } from "@/components/ui/input";

interface Field {
  name: string;
  placeholder?: string;
  type?: "text" | "password";
  rules?: any;
}

interface DynamicTextFieldsProps {
  control: any;
  errors: any;
  fields: Field[];
  isRTL?: boolean;
  fieldsPerRow?: number; // default 2
  gap?: number; // المسافة بين الحقول
  rowGap?: number; // المسافة بين الصفوف
  getValues?: () => any;
}

export const DynamicTextFields: React.FC<DynamicTextFieldsProps> = ({
  control,
  errors,
  fields,
  isRTL = I18nManager.isRTL,
  fieldsPerRow = 2,
  gap = 8,
  rowGap = 12,
  getValues,
}) => {
  // تقسيم الحقول على الصفوف
  const rows: Field[][] = [];
  for (let i = 0; i < fields.length; i += fieldsPerRow) {
    rows.push(fields.slice(i, i + fieldsPerRow));
  }

  return (
    <View style={{ width: "100%" }}>
      {rows.map((row, rowIndex) => (
        <View
          key={rowIndex}
          style={[
            styles.row,
            {
              flexDirection: isRTL ? "row-reverse" : "row",
              marginBottom: rowIndex < rows.length - 1 ? rowGap : 0, // مسافة بين الصفوف
            },
          ]}
        >
          {row.map((fieldItem, index) => (
            <Controller
              key={fieldItem.name}
              control={control}
              rules={fieldItem.rules || {}}
              name={fieldItem.name}
              render={({ field }) => (
                <FormControl
                  isInvalid={!!errors[fieldItem.name]}
                  style={{
                    flex: 1,
                    marginLeft:
                      row.length > 1 && isRTL && index < row.length - 1
                        ? gap
                        : 0,
                    marginRight:
                      row.length > 1 && !isRTL && index < row.length - 1
                        ? gap
                        : 0,
                  }}
                >
                  <Input size="xl">
                    <InputField
                      className="text-secondary-900 border border-primary-400 placeholder:text-lg placeholder:text-secondary-900/50"
                      type={fieldItem.type || "text"}
                      placeholder={fieldItem.placeholder || ""}
                      defaultValue={field.value || ""}
                      onChangeText={field.onChange}
                      onBlur={field.onBlur}
                      style={
                        {
                          textAlign: isRTL ? "right" : "left",
                          writingDirection: isRTL ? "rtl" : "ltr",
                        }
                      }
                    />
                  </Input>
                  {errors[fieldItem.name] && (
                    <FormControlError>
                      <FormControlErrorIcon />
                      <FormControlErrorText>
                        {errors[fieldItem.name]?.message}
                      </FormControlErrorText>
                    </FormControlError>
                  )}
                </FormControl>
              )}
            />
          ))}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    width: "100%",
  },
});
