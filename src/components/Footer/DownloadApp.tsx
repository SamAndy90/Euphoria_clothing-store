import { Title } from "@/common/ui";
import { GooglePlayIcon } from "./static";
import { AppStoreIcon } from "./static";

export const DownloadApp = () => {
  return (
    <div className="max-w-[394px] lg:flex-auto mx-auto sm:mx-0">
      <Title className="text-3xl text-center sm:text-left">Download The App</Title>
      <div className="flex items-center justify-center sm:justify-start gap-5 text-white pl-1 mt-5 flex-wrap">
        <div className="w-[154px] h-[51px] bg-[#404040] group hover:shadow-md hover:bg-gray-900 transition-all flex items-center justify-start gap-1 rounded-xl pl-2">
          <GooglePlayIcon />
          <div>
            <p className="text-[10px]">Android app on</p>
            <p className="text-lg group-hover:text-violet-400">Google Play</p>
          </div>
        </div>
        <div className="w-[154px] h-[51px] bg-[#404040] group hover:bg-gray-900 hover:shadow-md transition-all flex items-center justify-start gap-5 rounded-xl pl-2">
          <AppStoreIcon className="group-hover:fill-violet-500 transition-colors" />
          <div className="">
            <p className="text-[10px]">Available on the</p>
            <p className="text-lg group-hover:text-violet-400">App Store</p>
          </div>
        </div>
      </div>
    </div>
  );
};
