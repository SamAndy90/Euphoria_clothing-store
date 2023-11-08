import Image from "next/image";
import { randomImage } from "@/helpers/randomImage";
import AuthBgIMG1 from "./static/auth-bg-1.jpg";
import AuthBgIMG2 from "./static/auth-bg-2.jpg";
import AuthBgIMG3 from "./static/auth-bg-3.jpg";
import AuthBgIMG4 from "./static/auth-bg-4.jpg";
import AuthBgIMG5 from "./static/auth-bg-5.jpg";
import AuthBgIMG6 from "./static/auth-bg-6.jpg";

export type AuthWrapperProps = {
  children: React.ReactNode;
};

export function AuthWrapper(props: AuthWrapperProps) {
  const { children } = props;

  return (
    <div className={"flex-auto flex border-t border-t-gray-400"}>
      <div className={"hidden md:block relative basis-1/2"}>
        <Image
          src={randomImage(pictures)}
          alt={"Random image"}
          fill={true}
          className={"object-cover"}
        />
      </div>
      <div className={"md:basis-1/2 w-full px-3 py-14"}>{children}</div>
    </div>
  );
}

const pictures = [
  AuthBgIMG1,
  AuthBgIMG2,
  AuthBgIMG3,
  AuthBgIMG4,
  AuthBgIMG5,
  AuthBgIMG6,
];
