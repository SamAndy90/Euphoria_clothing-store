import { path } from "ramda";
import {
  Controller,
  FieldError,
  FieldValues,
  Path,
  useFormContext,
} from "react-hook-form";

import { PasswordInputExtended, TextInputProps } from "@/common/ui";

export type FormPasswordInputProps<T> = {
  fieldName: Path<T>;
} & TextInputProps;

export function FormPasswordInputExtended<T extends FieldValues>(
  props: FormPasswordInputProps<T>
) {
  const { fieldName, ...textInputProps } = props;
  const { control } = useFormContext<T>();

  return (
    <Controller
      name={fieldName}
      control={control}
      render={({ field, formState: { errors } }) => {
        const error = path<FieldError>([fieldName], errors);

        return (
          <PasswordInputExtended
            {...textInputProps}
            {...field}
            error={!!error}
            helperText={error?.message}
          />
        );
      }}
    />
  );
}
