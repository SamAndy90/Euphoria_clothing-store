import { ButtonBase, ButtonBaseProps } from "..";
import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

export type ButtonProps = {
  variant?: "primary" | "secondary" | "danger";
  size?: "narrow" | "normal" | "medium" | "wide" | "auth";
  fullWidth?: boolean;
} & ButtonBaseProps;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const {
      children,
      className = {},
      loading,
      disabled,
      variant = "primary",
      size = "normal",
      fullWidth = false,
      ...baseButtonProps
    } = props;

    const { button: buttonClassName, loadingIcon: loadingIconClassName } =
      className;

    return (
      <ButtonBase
        ref={ref}
        loading={loading}
        disabled={disabled}
        className={{
          button: twMerge(
            clsx(
              "flex items-center justify-center rounded-lg font-medium text-lg transition-colors ease-linear",
              {
                // Primary
                "bg-violet-500 text-white": variant === "primary" && loading,
                "text-white bg-violet-500 hover:bg-violet-600 active:bg-violet-400 focus:bg-violet-600 disabled:bg-gray-300 disabled:text-gray-500":
                  variant === "primary" && !loading,

                // Secondary
                "bg-violet-100 text-violet-500":
                  variant === "secondary" && loading,
                "bg-white border border-gray-700 hover:bg-violet-50 active:bg-violet-100 active:border-violet-500 focus:border-violet-500 focus:bg-violet-50 disabled:bg-gray-300 disabled:text-gray-500 disabled:border-none":
                  variant === "secondary" && !loading,

                // Danger
                "bg-red-300 text-red-50": variant === "danger" && loading,
                "text-red-50 bg-red-500 hover:bg-red-400 active:bg-red-600 disabled:bg-red-100":
                  variant === "danger" && !loading,
              },
              {
                "w-full": fullWidth,
                "px-5 py-4": size === "narrow",
                "px-7 py-3.5": size === "normal",
                "px-8 py-3": size === "medium",
                "px-12 py-3": size === "wide",
                "w-[167px] py-4": size === "auth"
              },
              buttonClassName
            )
          ),
          loadingIcon: loadingIconClassName,
        }}
        {...baseButtonProps}
      >
        {children}
      </ButtonBase>
    );
  }
);
