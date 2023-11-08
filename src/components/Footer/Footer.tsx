"use client";

import { usePathname } from "next/navigation";

import { Container } from "@/common/ui";
import { Navigation, SocialLinks, DownloadApp, PopularCategories } from ".";

export function Footer() {
  const path = usePathname();

  if (path.includes("auth")) return;

  return (
    <footer className="bg-gray-700 text-gray-100 py-14">
      <Container>
        <Navigation />
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-7 py-3 max-w-[1060px] mx-auto">
          <SocialLinks />
          <DownloadApp/>
        </div>
        <PopularCategories />
        <p className="font-normal text-center md:font-medium lg:font-bold md:text-lg leading-9">
          Copyright © 2023 Euphoria Folks Pvt Ltd. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
