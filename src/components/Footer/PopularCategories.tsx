"use client";

import { IconButton, Title } from "@/common/ui";
import { ArrowDownIcon } from "./static";
import { useState } from "react";
import { Categories } from "./Category";
import clsx from "clsx";

export const PopularCategories = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className="py-9 overflow-hidden relative"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="py-7 border-y border-[#707373] flex items-center justify-between gap-3">
        <Title className="font-medium md:font-bold text-2xl md:text-3xl leading-none lg:pl-20">
          Popular Categories
        </Title>
        <IconButton
          className={{
            button: clsx("px-3 sm:px-8 w-auto transition-transform", {
              "rotate-180": isOpen,
            }),
          }}
        >
          <ArrowDownIcon />
        </IconButton>
      </div>
      {isOpen && (
        <div className={"bg-gray-900"} onClick={(e) => e.stopPropagation()}>
          <Categories />
        </div>
      )}
    </div>
  );
};
