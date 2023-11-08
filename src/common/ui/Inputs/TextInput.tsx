import { clsx } from "clsx";
import { forwardRef, useId, useState } from "react";
import { twMerge } from "tailwind-merge";

export type BaseProps = {
  label?: string;
  className?: {
    label?: string;
    inputWrapper?: string;
    input?: string;
  };
  helperText?: string;
  error?: boolean;
  endAdornment?: React.ReactNode;
};

export type TextInputProps = BaseProps &
  Omit<React.InputHTMLAttributes<HTMLInputElement>, "className">;

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  (props, ref) => {
    const {
      label,
      className = {},
      helperText,
      error,
      endAdornment,
      ...inputProps
    } = props;
    const {
      label: labelClassName = "",
      inputWrapper: inputWrapperClassName = "",
      input: inputClassName = "",
    } = className;

    const [isFocused, setIsFocused] = useState(false);
    const id = useId();

    return (
      <div className={"flex flex-col gap-y-2.5"}>
        {label && (
          <label
            htmlFor={id}
            className={twMerge("text-lg tracking-wide text-gray-700", labelClassName)}
          >
            {label}
          </label>
        )}

        <div
          className={twMerge(
            clsx(
              "flex flex-nowrap items-center overflow-hidden rounded-md border border-gray-700",
              {
                "border-violet-500": isFocused && !error,
                "text-violet-500 bg-violet-50 border-violet-500": error,
              },
              inputWrapperClassName
            )
          )}
        >
          <input
            id={id}
            className={twMerge(
              "block flex-1 px-4 py-3 outline-0 md:px-5 md:py-3.5 placeholder:text-sm placeholder:text-gray-500",
              inputClassName
            )}
            ref={ref}
            type={inputProps.type ?? "text"}
            {...{
              ...inputProps,
              onFocus: (e) => {
                inputProps?.onFocus?.(e);
                setIsFocused(true);
              },
              onBlur: (e) => {
                inputProps?.onBlur?.(e);
                setIsFocused(false);
              },
            }}
          />

          {endAdornment && <div className={"px-5"}>{endAdornment}</div>}
        </div>

        {helperText && (
          <p
            className={clsx("font-medium",{
              "text-myred-500 font-medium": error,
              "text-gray-500": !error,
            })}
          >
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

TextInput.displayName = "TextInput";
