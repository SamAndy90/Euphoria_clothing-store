import Link from "next/link";
import { ButtonBase, ButtonBaseProps } from "@/common/ui";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { forwardRef } from "react";

export type LinkButtonProps = {
  href: string;
  size?: "narrow" | "normal" | "wide" | "main";
  variant?: "primary" | "transparent-white" | "transparent-black" | "main";
  className?: { link?: string; button?: string; loadingIcon?: string };
  fullWidth?: boolean;
} & ButtonBaseProps;

export const LinkButton = forwardRef<HTMLButtonElement, LinkButtonProps>(
  (props, ref) => {
    const {
      href,
      variant = "primary",
      size = "wide",
      children,
      className = {},
      fullWidth,
      loading = false,
      ...baseButtonProps
    } = props;

    const pathName = usePathname();

    const {
      link,
      button: buttonClassName,
      loadingIcon: loadingIconClassName,
    } = className;

    return (
      <Link href={href} className={twMerge(clsx("focus:outline-none", link))}>
        <ButtonBase
          ref={ref}
          loading={loading}
          className={{
            button: twMerge(
              clsx(
                "flex items-center justify-center transition-colors ease-linear duration-200 rounded-lg whitespace-nowrap",
                {
                  "border-gray-700 text-violet-400":
                    variant === "primary" && loading,
                  "border-gray-700 text-violet-500 hover:bg-violet-50 active:border-violet-500 active:bg-violet-100":
                    variant === "primary" && !loading && pathName !== href,

                  "text-gray-300": variant === "transparent-white" && loading,
                  "text-gray-500": variant === "transparent-white" && !loading,
                  "font-bold text-2xl text-gray-700 bg-white hover:text-violet-500 active:bg-violet-100":
                    variant === "main" && !loading,
                },
                {
                  "py-4 px-10": size === "narrow",
                  "py-3 px-12": size === "wide",
                  "py-4 px-[72px]": size === "main",
                },
                {
                  "bg-violet-500 text-white border-violet-500":
                    pathName === href,
                },
                { "w-full": fullWidth },
                buttonClassName
              )
            ),
            loadingIcon: loadingIconClassName,
          }}
          {...baseButtonProps}
        >
          {children}
        </ButtonBase>
      </Link>
    );
  }
);

LinkButton.displayName = "LinkButton";