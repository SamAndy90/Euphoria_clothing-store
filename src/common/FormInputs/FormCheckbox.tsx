import { Controller, FieldValues, Path, useFormContext } from "react-hook-form";

import { CheckBox, CheckBoxProps } from "@/common/ui/Inputs";

export type FormCheckboxProps<T> = {
  fieldName: Path<T>;
} & Omit<CheckBoxProps, "checked" | "onChange">;

export function FormCheckbox<T extends FieldValues>(
  props: FormCheckboxProps<T>
) {
  const { fieldName, ...checkboxProps } = props;
  const { control } = useFormContext<T>();

  return (
    <Controller
      name={fieldName}
      control={control}
      render={({ field }) => {
        const { value, onChange } = field;

        return (
          <CheckBox
            checked={value ?? true}
            onChange={onChange}
            {...checkboxProps}
          />
        );
      }}
    />
  );
}
