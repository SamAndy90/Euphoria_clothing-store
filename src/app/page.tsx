import { Hero } from "@/components/HomePage";
import { Introduction } from "@/components/HomePage";
import { BigSavingZone } from "@/components/HomePage/BigSavingZone";
import { EverydayFashion } from "@/components/HomePage/EverydayFashion";
import { Feedback } from "@/components/HomePage/Feedback";
import { NewArrival } from "@/components/HomePage/NewArrival/NewArrival";
import { TopBrands } from "@/components/HomePage/TopBrands";

import { StaticImageData } from "next/image";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <Hero />
      <Introduction />
      <NewArrival />
      <BigSavingZone />
      <EverydayFashion />
      <TopBrands />
      <Feedback />
    </>
  );
}
