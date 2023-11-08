import { Container, LinkButton, Title } from "@/common/ui";
import Image from "next/image";
import FashionBGImg from "./static/EverydayFashionBG.jpg";
import FashionImg from "./static/EverydayFashion.jpg";

export function EverydayFashion() {
  return (
    <section className="mb-24">
      <Container>
        <div className="rounded-xl flex flex-col overflow-hidden md:flex-row">
          <div className="relative basis-1/2 px-3 bg-black">
            <div className="max-w-[466px] mx-auto text-white py-36 lg:py-44 z-50 relative">
              <Title className="font-core_sans font-black uppercase text-[34px] mb-7">
                WE MADE YOUR EVERYDAY FASHION BETTER!
              </Title>
              <p className="text-xl font-light mb-12 max-w-sm">
                In our journey to improve everyday fashion, euphoria presents
                EVERYDAY wear range - Comfortable & Affordable fashion 24/7
              </p>
              <LinkButton
                href="#"
                variant="main"
                className={{ button: "px-11" }}
              >
                Shop Now
              </LinkButton>
            </div>
            <Image
              className={"object-cover z-10 opacity-30"}
              fill
              src={FashionBGImg}
              alt={"FashionBGImg"}
            />
          </div>
          <div className="relative basis-1/2">
            <Image
              src={FashionImg}
              alt={"FashionImg"}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
