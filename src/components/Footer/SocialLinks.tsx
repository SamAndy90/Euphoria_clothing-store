import { FacebookIcon } from "./static";
import { InstagramIcon } from "./static";
import { TwitterIcon } from "./static";
import { LinkedInIcon } from "./static";

export const SocialLinks = () => {
  return (
    <div className="flex justify-between w-[178px] px-2 py-2 mx-auto sm:mx-0">
      <a
        href="#"
        className="h-8 w-8 rounded-lg bg-gray-100 flex items-center justify-center transition-transform group hover:-translate-y-1"
        target="_blank"
        aria-label="Facebook"
      >
        <FacebookIcon className="group-hover:fill-violet-500 transition-colors" />
      </a>
      <a
        href="#"
        className="h-8 w-8 rounded-lg bg-gray-100 flex items-center justify-center transition-transform group hover:-translate-y-1"
        target="_blank"
        aria-label="Instagram"
      >
        <InstagramIcon className="group-hover:fill-violet-500 transition-colors" />
      </a>
      <a
        href="#"
        className="h-8 w-8 rounded-lg bg-gray-100 flex items-center justify-center transition-transform group hover:-translate-y-1"
        target="_blank"
        aria-label="Twitter"
      >
        <TwitterIcon className="group-hover:fill-violet-500 transition-colors" />
      </a>
      <a
        href="#"
        className="h-8 w-8 rounded-lg bg-gray-100 flex items-center justify-center transition-transform group hover:-translate-y-1"
        target="_blank"
        aria-label="LinkedIn"
      >
        <LinkedInIcon className="group-hover:fill-violet-500 transition-colors" />
      </a>
    </div>
  );
};
