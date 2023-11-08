"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import HeroBG from "./static/hero-bg.jpg";
import HeroBG2 from "./static/hot-proposition-left.jpg"
import NextButton from "./static/SliderNextElement.svg"
import PrevButton from "./static/SliderPrevElement.svg"
import Image from "next/image";
import { LinkButton } from "@/common/ui";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { MainUrlPaths } from "@/helpers/urlconf";

export function Hero() {
  return (
    <Swiper className="w-full mb-32"
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={true}
        pagination={
          {
            clickable: true,
            bulletClass: "swiper-pagination-bullet bg-white w-16 h-2.5 rounded-s-full",
          }
        }
        navigation={{
          nextEl: "#next-button",
          prevEl: "#prev-button",
        }}
        
        >
      
      <SwiperSlide>
        <div className="relative py-32">
          <div className="text-white font-core_sans max-w-[439px] flex flex-col gap-10 ml-4 sm:ml-8 md:ml-16 lg:ml-32 xl:ml-52">
            <p className="font-medium text-3xl leading-tight tracking-wide">T-shirt / Tops</p>
            <h1 className="text-7xl font-black leading-tight tracking-wide">Summer Value Pack</h1>
            <p className="font-medium text-3xl leading-tight tracking-wide">cool / colorful / comfy</p>
            <LinkButton variant="main" size="main" href={MainUrlPaths.getWomen()} className={{button: "text-2xl"}}>Shop Now</LinkButton>
          </div>
          <Image
            src={HeroBG}
            alt={"Hero background"}
            fill
            className="object-cover -z-10"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative py-32">
          <div className="text-white font-core_sans max-w-[439px] flex flex-col gap-10 ml-4 sm:ml-8 md:ml-16 lg:ml-32 xl:ml-52">
            <p className="font-medium text-3xl leading-tight tracking-wide">Low Price</p>
            <h1 className="text-7xl font-black leading-tight tracking-wide">High Coziness</h1>
            <p className="font-medium text-3xl leading-tight tracking-wide">UPTO 50% OFF</p>
            <LinkButton variant="main" size="main" href={MainUrlPaths.getWomen()} className={{button: "text-2xl"}}>Explore Items</LinkButton>
          </div>
          <Image
            src={HeroBG2}
            alt={"Hero background 2"}
            fill
            className="object-cover -z-10"
          />
        </div>
      </SwiperSlide>
      <Image id="prev-button" src={PrevButton} alt={"Prev"} className="absolute top-1/2 z-10 w-6 h-11 left-10 -translate-y-1/2"/>
      <Image id="next-button" src={NextButton} alt={"Next"} className="absolute top-1/2 z-10 w-6 h-11 right-10 -translate-y-1/2"/>
    </Swiper>
  );
}
