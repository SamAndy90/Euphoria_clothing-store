"use client";

import Link from "next/link";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import { usePathname } from "next/navigation";

export type UserLinkProps = {
  children: React.ReactNode;
  href: string;
  onClick?: () => void;
  additionalClassNames?: string;
};

export function UserLink({ href, onClick, children, additionalClassNames }: UserLinkProps) {
  const pathName = usePathname();

  return (
    <Link
      href={href}
      className={twMerge(clsx(
        "block cursor-default rounded-lg p-3 transition-shadow duration-200 focus:outline-none",
        {
          "bg-violet-500 stroke-white": pathName === href,
          "bg-gray-100 hover:shadow-md stroke-gray-500": pathName !== href,
        }, additionalClassNames
      ))}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}
