"use client";

import Link from "next/link";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import { usePathname } from "next/navigation";

export type NavLinkProps = {
  children: React.ReactNode;
  href: string;
  onClick?: () => void;
  additionalClassNames?: string;
};

export function PageLink({ children, href, onClick, additionalClassNames }: NavLinkProps) {
  const pathName = usePathname();

  return (
    <Link
      href={href}
      onClick={onClick}
      className={twMerge(clsx("cursor-default transition-colors duration-200 focus:outline-none", {
        "text-gray-700 font-bold": href === pathName,
        "hover:text-violet-500": href !== pathName,
      }, additionalClassNames))}
    >
      {children}
    </Link>
  );
}
