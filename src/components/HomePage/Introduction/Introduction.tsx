import { Container } from "@/common/ui";
import { MainUrlPaths } from "@/helpers/urlconf";
import Link from "next/link";
import LeftIMG from "./static/hot-proposition-left.jpg";
import RightIMG from "./static/hot-proposition-right.jpg";
import Image from "next/image";

export function Introduction() {
  return (
    <section className="mb-24">
      <Container>
        <div className="flex flex-col sm:flex-row gap-7 justify-between text-white font-core_sans">
          <div className="basis-1/2 relative rounded-xl overflow-hidden shadow-[2px_2px_10px_rgba(0,0,0,0.4)] pt-16 pb-20 px-7">
            <div className="max-w-[270px]">
              <p className="font-black tracking-wide leading-8 text-lg mb-6">
                Low Price
              </p>
              <h2 className="font-black leading-tight text-[34px] mb-2">
                High Coziness
              </h2>
              <p className="font-medium tracking-wide leading-6 mb-11">
                UPTO 50% OFF
              </p>
              <Link
                className="font-black text-xl hover:border-b transition-all"
                href={MainUrlPaths.getWomen()}
              >
                Explore Items
              </Link>
            </div>
            <Image
              src={LeftIMG}
              alt={"Left Image"}
              fill
              className={"object-cover -z-10"}
            />
          </div>

          <div className="basis-1/2 relative rounded-xl overflow-hidden shadow-[2px_2px_10px_rgba(0,0,0,0.4)] pt-16 pb-20 px-7">
            <div className="max-w-[270px]">
              <p className="font-black tracking-wide leading-8 text-lg mb-6">
                Beyoung Presents
              </p>
              <h2 className="font-black leading-tight text-[34px] mb-2">
                Breezy Summer Style
              </h2>
              <p className="font-medium tracking-wide leading-6 mb-11">
                UPTO 50% OFF
              </p>
              <Link
                className="font-black text-xl hover:border-b transition-all"
                href={MainUrlPaths.getWomen()}
              >
                Explore Items
              </Link>
            </div>
            <Image
              src={RightIMG}
              alt={"Left Image"}
              fill
              className={"object-cover -z-10 scale-110"}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
