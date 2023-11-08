"use client";

import { Container, Title } from "@/common/ui";
import { Swiper, SwiperSlide } from "swiper/react";
import ArrivalImg1 from "./static/arrival-image-1.jpg";
import ArrivalImg2 from "./static/arrival-image-2.jpg";
import ArrivalImg3 from "./static/arrival-image-3.jpg";
import ArrivalImg4 from "./static/arrival-image-4.jpg";
import ArrowLeft from "./static/ArrowLeftIcon.svg";
import ArrowRight from "./static/ArrowRightIcon.svg";
import Image, { StaticImageData } from "next/image";
import { Autoplay, Navigation } from "swiper/modules";

export function NewArrival() {
  return (
    <section className="mb-24">
      <Container>
        <Title className="pl-6 mb-16 text-gray-700 relative before:absolute before:bg-violet-500 before:rounded-full before:w-1.5 before:left-0 before:top-0 before:h-[30px] before:hover:animate-fill">
          New Arrival
        </Title>
        <div className="relative">
          <Swiper
            className="px-9 py-9 -my-9"
            modules={[Autoplay, Navigation]}
            slidesPerView={4}
            spaceBetween={38}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              600: {
                slidesPerView: 2,
              },
              992: {
                slidesPerView: 4,
              },
            }}
            navigation={{
              nextEl: "#next-arrow",
              prevEl: "#prev-arrow",
            }}
          >
            {newArrivalData.map((el) => (
              <SwiperSlide key={el.id}>
                <div className="mx-auto transition-all rounded-2xl overflow-hidden hover:shadow-[0_0_15px_rgba(0,0,0,0.2)] hover:scale-[1.02]">
                  <Image
                    src={el.image}
                    alt={el.imageAlt}
                    className="rounded-lg"
                  />
                  <h4 className="font-bold text-xl text-gray-700 tracking-wide mt-8 pl-1">
                    {el.title}
                  </h4>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <Image
            id="prev-arrow"
            src={ArrowLeft}
            alt={"Prev"}
            className="absolute fill-white top-1/2 z-10 w-3.5 h-3 left-0 -translate-y-1/2 p-2 box-content hover:shadow-[0_0_8px_rgba(0,0,0,0.1)] transition-shadow rounded-full"
          />
          <Image
            id="next-arrow"
            src={ArrowRight}
            alt={"Next"}
            className="absolute top-1/2 z-10 w-3.5 h-3 right-0 -translate-y-1/2 p-2 box-content hover:shadow-[0_0_8px_rgba(0,0,0,0.1)] transition-shadow rounded-full"
          />
        </div>
      </Container>
    </section>
  );
}

export type NewArrivalDataType = {
  id: number;
  title: string;
  image: StaticImageData;
  imageAlt: string;
};

export const newArrivalData: NewArrivalDataType[] = [
  {
    id: 1,
    title: "Knitted Joggers",
    image: ArrivalImg1,
    imageAlt: "Knitted Joggers",
  },
  {
    id: 2,
    title: "Full Sleeve",
    image: ArrivalImg2,
    imageAlt: "Full Sleeve",
  },
  {
    id: 3,
    title: "Active T-Shirts",
    image: ArrivalImg3,
    imageAlt: "Active T-Shirts",
  },
  {
    id: 4,
    title: "Urban Shirts",
    image: ArrivalImg4,
    imageAlt: "Urban Shirts",
  },
  {
    id: 5,
    title: "Knitted Joggers",
    image: ArrivalImg1,
    imageAlt: "Knitted Joggers",
  },
  {
    id: 6,
    title: "Full Sleeve",
    image: ArrivalImg2,
    imageAlt: "Full Sleeve",
  },
  {
    id: 7,
    title: "Active T-Shirts",
    image: ArrivalImg3,
    imageAlt: "Active T-Shirts",
  },
  {
    id: 8,
    title: "Urban Shirts",
    image: ArrivalImg4,
    imageAlt: "Urban Shirts",
  },
];
