"use client";

import { AuthUrlPaths } from "@/helpers/urlconf";
import Link from "next/link";

import { Title } from "@/common/ui";
import { ArrowLeftIcon } from "./icons/ArrowLeftIcon";

export function CheckEmail() {
  return (
    <div className={"max-w-[568px] mx-auto flex flex-col gap-7"}>
      <Title className="text-myblack-900 text-4xl font-core_sans tracking-wide">
        Check Email
      </Title>
      <p className="text-[#858585]">
        Please check your email inbox and click on the provided link to reset
        your password. If you don’t receive email,{" "}
        <Link
          className={"text-violet-500 font-semibold hover:underline"}
          href={""}
        >
          Click here to resend
        </Link>
      </p>

      <p className="text-gray-500 font-medium inline-flex items-center">
        <ArrowLeftIcon className="inline p-0.5 mr-2.5" />
        <span>Back to&nbsp;</span>
        <Link
          href={AuthUrlPaths.getSignIn()}
          className="underline hover:text-gray-700 transition-colors"
        >
          Login
        </Link>
      </p>
    </div>
  );
}
