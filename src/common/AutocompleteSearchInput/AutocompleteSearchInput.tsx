"use client";

import { Fragment, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import SearchIcon from "./static/search.svg";
import Image from "next/image";

export type ClothesData = {
  id: number;
  title: string;
};

const clothes: ClothesData[] = [
  { id: 1, title: "Jeans" },
  { id: 2, title: "T-Shirt" },
  { id: 3, title: "Hoodies" },
  { id: 4, title: "Boxers" },
  { id: 5, title: "Sweatshirt" },
];

export function AutocompleteSearchInput() {
  const [selected, setSelected] = useState("");
  const [query, setQuery] = useState("");

  const filteredClothes: ClothesData[] | [] =
    query === ""
      ? clothes
      : clothes.filter((item) =>
          item.title
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  return (
    <div className="hidden xl:block">
      <Combobox value={selected} onChange={setSelected}>
        <div className="relative bg-gray-100 rounded-lg">
          <Combobox.Button as="div" className={"relative"}>
            <Combobox.Input
              className="w-full max-w-[267px] placeholder:text-gray-500 sm:text-sm rounded-lg border-none bg-transparent py-3 pl-12 pr-3  text-gray-500 focus:outline-none focus:ring-1 focus:ring-violet-500 cursor-default"
              displayValue={(item: ClothesData) => item.title}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={"Search"}
            />
            <Image
              src={SearchIcon}
              alt="Search icon"
              className="absolute w-5 top-1/2 -translate-y-1/2 left-3"
            />
          </Combobox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-lg bg-gray-100 py-1 shadow-lg focus:outline-none sm:text-sm z-50">
              {filteredClothes.length === 0 && query !== "" ? (
                <div className="cursor-default select-none py-2 px-4 text-gray-500">
                  Nothing found.
                </div>
              ) : (
                filteredClothes.map((item) => (
                  <Combobox.Option
                    key={item.id}
                    value={item}
                    className={({ active, selected }) =>
                      `cursor-default select-none py-2 pl-10 pr-4 ${
                        selected ? "font-medium" : "font-normal"
                      } ${
                        active ? "text-white bg-violet-400" : "text-gray-500"
                      }`
                    }
                  >
                    {item.title}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
}
