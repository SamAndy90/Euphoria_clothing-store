import { Swiper, SwiperSlide } from "swiper/react";

import ShortsImg from "./static/black shorts.jpg";
import CropTopImg from "./static/crop top.jpg";
import TShirtImg from "./static/graphic t-shirt.jpg";
import SweatshirtImg from "./static/sweatshirt.jpg";
import ShirtImg from "./static/urban shirts.jpg";
import Image, { StaticImageData } from "next/image";
import { Autoplay, EffectCoverflow } from "swiper/modules";

export type CategoryType = {
  id: number;
  image: StaticImageData;
  imageAlt: string;
  title: string;
  description: string;
};

const categories: CategoryType[] = [
  {
    id: 1,
    image: ShortsImg,
    imageAlt: "Shorts Image",
    title: "Shorts",
    description: "Shorts category",
  },
  {
    id: 2,
    image: CropTopImg,
    imageAlt: "Crop Top Image",
    title: "Crop Top",
    description: "Crop Top category",
  },
  {
    id: 3,
    image: TShirtImg,
    imageAlt: "T-Shirt Image",
    title: "T-Shirts",
    description: "T-Shirts category",
  },
  {
    id: 4,
    image: SweatshirtImg,
    imageAlt: "Sweatshirt Image",
    title: "Sweatshirt",
    description: "Sweatshirt category",
  },
  {
    id: 5,
    image: ShirtImg,
    imageAlt: "Shirt Image",
    title: "Shirt",
    description: "Exurants category",
  },
];

export const Categories = () => {
  return (
    <Swiper className="p-4"
      spaceBetween={30}
      slidesPerView={"auto"}
      modules={[Autoplay, EffectCoverflow]}
      speed={1000}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      effect="zoom"
      // effect="coverflow"
      // coverflowEffect={{
      //   slideShadows: false,
      //   rotate: 25,
      //   depth: 200,
      // }}
    >
      {categories.length ? (
        categories.map((category) => (
          <SwiperSlide zoom className="max-w-xs" key={category.id}>
            <div
              className={
                "relative max-w-xs overflow-hidden rounded-3xl mx-auto"
              }
            >
              <Image
                src={category.image}
                alt={category.imageAlt}
                fill
                className={"object-cover -z-10"}
              />
              <div className="flex items-center justify-center bg-black/40 hover:bg-black/10 transition-colors group">
                <h3 className="py-20 group-hover:px-4 group-hover:bg-violet-100/20 text-center text-white text-3xl font-semibold group-hover:text-violet-500 group-hover:scale-125 transition-all group-hover:shadow-lg group-hover:shadow-black group-hover:backdrop-blur-sm">
                  {category.title}
                </h3>
              </div>
            </div>
          </SwiperSlide>
        ))
      ) : (
        <div className="text-violet-100 text-center text-3xl">
          NO POPULAR CATEGORIES
        </div>
      )}
    </Swiper>
  );
};
