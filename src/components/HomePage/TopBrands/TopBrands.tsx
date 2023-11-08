import { Container, Title } from "@/common/ui";
import Image from "next/image";
import NikeImg from "./static/Nike.jpg";
import HMImg from "./static/HM.svg";
import LevisImg from "./static/Levis.svg";
import PoloImg from "./static/Polo.svg";
import PumaImg from "./static/Puma.jpg";

export function TopBrands() {
  return (
    <section className="text-white mb-20">
      <Container>
        <div className="bg-gray-700 border border-[#323232] rounded-xl pt-11 pb-14 px-3">
          <Title className="font-core_sans font-black text-5xl text-center mb-6">
            Top Brands Deal
          </Title>
          <p className="text-xl text-center mb-16">
            Up To <span className="font-bold text-[#FBD103]">60%</span> off on
            brands
          </p>
          <div className="flex items-center justify-center gap-6 flex-wrap">
            <div className="h-20 w-44 px-3 flex items-center justify-center rounded-xl bg-white">
              <Image
                src={NikeImg}
                width={149}
                height={53}
                alt="NikeImg"
                aria-hidden
              />
            </div>
            <div className="h-20 w-44 px-3 flex items-center justify-center rounded-xl bg-white">
              <Image src={HMImg} alt="HMImg" aria-hidden />
            </div>
            <div className="h-20 w-44 px-3 flex items-center justify-center rounded-xl bg-white">
              <Image src={LevisImg} alt="LevisImg" aria-hidden />
            </div>
            <div className="h-20 w-44 px-3 flex items-center justify-center rounded-xl bg-white">
              <Image src={PoloImg} alt="PoloImg" aria-hidden />
            </div>
            <div className="h-20 w-44 px-3 flex items-center justify-center rounded-xl bg-white">
              <Image
                src={PumaImg}
                width={112}
                height={56}
                alt="PumaImg"
                aria-hidden
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
