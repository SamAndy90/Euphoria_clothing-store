import { ButtonBase } from "@/common/ui";
import { GoogleIcon } from "./icons/GoogleIcon";
import { TwitterIcon } from "./icons/TwitterIcon";

export function Social() {
  return (
    <div className="flex flex-col items-center justify-between gap-5 font-medium text-[22px] leading-none text-violet-500">
      <ButtonBase
        className={{
          button:
            "flex items-center justify-center gap-3 w-full border border-gray-700 rounded-lg py-4 cursor-pointer hover:bg-violet-50 transition-colors active:bg-violet-100",
        }}
      >
        <GoogleIcon />
        <span>Continue With Google</span>
      </ButtonBase>
      <ButtonBase
        className={{
          button:
            "flex items-center justify-center gap-3 w-full border border-gray-700 rounded-lg py-4 cursor-pointer hover:bg-violet-50 transition-colors active:bg-violet-100",
        }}
      >
        <TwitterIcon />
        <span>Continue With Twitter</span>
      </ButtonBase>
    </div>
  );
}
