"use client";

import { Container, IconButton, LinkButton, Title } from "@/common/ui";
import Image, { StaticImageData } from "next/image";
import clsx from "clsx";

import Img1 from "./static/Item1.jpg";
import Img2 from "./static/Item2.jpg";
import Img3 from "./static/Item3.jpg";
import Img4 from "./static/Item4.jpg";
import Img5 from "./static/Item5.jpg";
import { Arrow } from "./static/Arrow";

export type BigSavingZoneType = {
  data?: BigSavingZoneDataType[] | [];
};

export function BigSavingZone(props: BigSavingZoneType) {
  const { data = bigSavingZone } = props;
  return (
    <section className="mb-24">
      <Container>
        <Title className="pl-6 mb-16 text-gray-700 relative before:absolute before:bg-violet-500 before:rounded-full before:w-1.5 before:left-0 before:top-0 before:h-[30px] before:hover:animate-fill">
          Big Saving Zone
        </Title>
        <div className="flex flex-wrap gap-5 justify-between">
          {data.map((i) => (
            <div
              className={clsx(
                "flex flex-[1_0_30%] min-w-[300px] rounded-xl overflow-hidden relative h-[393px] px-5 text-gray-700",
                { "text-white": i.textwhite, "flex-row-reverse": i.textRight }
              )}
              key={i.id}
            >
              <div
                className={clsx("flex flex-col justify-center items-start basis-1/2", {
                  "items-end text-right": i.alignTextRight,
                })}
              >
                {i.limited && (
                  <span
                    className={
                      "text-white text-xs font-bold py-2.5 px-[18px] rounded bg-gray-700 mb-7"
                    }
                  >
                    Limited Stock
                  </span>
                )}
                <h3
                  className={clsx("font-core_sans font-bold text-[28px] mb-4", {
                    "text-[32px]": i.isBig,
                  })}
                >
                  {i.title}
                </h3>
                <p
                  className={clsx("font-semibold text-sm mb-2.5", {
                    "text-base": i.isBig,
                  })}
                >
                  {i.subtitle}
                </p>
                <p
                  className={clsx("font-bold text-lg mb-7", {
                    "text-xl mb-9": i.isBig,
                  })}
                >
                  {i.discount}
                </p>
                <IconButton
                  className={{ button: clsx("mb-7", { "mb-11": i.isBig }) }}
                >
                  <Arrow />
                </IconButton>
                <LinkButton
                  variant={
                    i.textwhite ? "transparent-white" : "transparent-black"
                  }
                  href="#"
                >
                  SHOP NOW
                </LinkButton>
              </div>

              <div className={"basis-1/2 flex-[1_0_50%]"}></div>
              <Image
                src={i.image}
                alt={i.imageAlt}
                fill
                className={"object-cover -z-10"}
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export type BigSavingZoneDataType = {
  id: number;
  title: string;
  subtitle: string;
  discount: string;
  limited: boolean;
  textwhite: boolean;
  image: StaticImageData;
  imageAlt: string;
  isBig: boolean;
  textRight: boolean;
  alignTextRight: boolean;
};

export const bigSavingZone: BigSavingZoneDataType[] = [
  {
    id: 1,
    title: "Hawaiian Shirts",
    subtitle: "Dress up in summer vibe",
    discount: "UPTO 50% OFF",
    limited: false,
    textwhite: true,
    image: Img1,
    imageAlt: "Item 1",
    isBig: false,
    textRight: false,
    alignTextRight: false,
  },
  {
    id: 2,
    title: "Printed T-Shirt",
    subtitle: "New Designs Every Week",
    discount: "UPTO 40% OFF",
    limited: true,
    textwhite: true,
    image: Img2,
    imageAlt: "Item 2",
    isBig: false,
    textRight: true,
    alignTextRight: true,
  },
  {
    id: 3,
    title: "Cargo Joggers",
    subtitle: "Move with style & comfort",
    discount: "UPTO 50% OFF",
    limited: false,
    textwhite: false,
    image: Img3,
    imageAlt: "Item 3",
    isBig: false,
    textRight: true,
    alignTextRight: false,
  },
  {
    id: 4,
    title: "Urban Shirts",
    subtitle: "Live In Comfort",
    discount: "FLAT 60% OFF",
    limited: false,
    textwhite: false,
    image: Img4,
    imageAlt: "Item 4",
    isBig: true,
    textRight: true,
    alignTextRight: false,
  },
  {
    id: 5,
    title: "Oversized T-Shirts",
    subtitle: "Street Style Icon",
    discount: "FLAT 60% OFF",
    limited: false,
    textwhite: false,
    image: Img5,
    imageAlt: "Item 5",
    isBig: true,
    textRight: true,
    alignTextRight: false,
  },
];
