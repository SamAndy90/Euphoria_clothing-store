import { clsx } from "clsx";
import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

import { ButtonBase, ButtonBaseProps } from "@/common/ui";

export type IconButtonProps = {
  size?: "small" | "normal" | "large";
  colorVariant?: "primary" | "secondary";
} & ButtonBaseProps;

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  (props, ref) => {
    const {
      size = "small",
      colorVariant = "primary",
      children,
      className = {},
      loading = false,
      ...baseButtonProps
    } = props;

    const { button: buttonClassName, loadingIcon: loadingIconClassName } =
      className;

    return (
      <ButtonBase
        ref={ref}
        loading={loading}
        className={{
          button: twMerge(
            clsx(
              "flex items-center justify-center transition-colors ease-linear",
              // {
              //   "bg-violet-300": colorVariant === "primary" && loading,
              //   "bg-violet-500 hover:bg-violet-400 active:bg-violet-600 disabled:bg-violet-100":
              //     colorVariant === "primary" && !loading,
              //   "bg-gray-100": colorVariant === "secondary" && loading,
              //   "hover:bg-gray-100 active:bg-gray-200 disabled:bg-gray-100":
              //     colorVariant === "secondary" && !loading,
              // },
              {
                "h-4 w-[18px]": size === "small",
                "h-5 w-5": size === "normal"
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

IconButton.displayName = "IconButton";