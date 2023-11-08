import { Title } from "@/common/ui";
import Link from "next/link";

export const Navigation = () => {
  return (
    <div className="max-w-[1060px] mx-auto">
      <nav className="flex sm:flex-row flex-col items-start justify-between gap-8 sm:gap-y-12 sm:gap-x-6 flex-wrap lg:flex-nowrap text-center sm:text-left">
        <div className="mx-auto sm:mx-0">
          <Title className="text-3xl mb-5 sm:mb-7 whitespace-nowrap">
            Need Help
          </Title>
          <ul className="font-medium text-lg flex flex-col gap-3 md:gap-5 whitespace-nowrap">
            <li>
              <a
                href="#"
                target="_blank"
                className="hover:text-violet-400 transition-colors"
              >
                Contact Us
              </a>
            </li>
            <li>
              <a
                href="#"
                target="_blank"
                className="hover:text-violet-400 transition-colors"
              >
                Track Order
              </a>
            </li>
            <li>
              <a
                href="#"
                target="_blank"
                className="hover:text-violet-400 transition-colors"
              >
                Returns & Refunds
              </a>
            </li>
            <li>
              <a
                href="#"
                target="_blank"
                className="hover:text-violet-400 transition-colors"
              >
                FAQ&apos;s
              </a>
            </li>
            <li>
              <a
                href="#"
                target="_blank"
                className="hover:text-violet-400 transition-colors"
              >
                Career
              </a>
            </li>
          </ul>
        </div>

        <div className="mx-auto sm:mx-0">
          <Title className="text-3xl mb-5 sm:mb-7">Company</Title>
          <ul className="font-medium text-lg flex flex-col gap-3 md:gap-5 whitespace-nowrap">
            <li>
              <a
                href="#"
                target="_blank"
                className="hover:text-violet-400 transition-colors"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                target="_blank"
                className="hover:text-violet-400 transition-colors"
              >
                euphoria Blog
              </a>
            </li>
            <li>
              <a
                href="#"
                target="_blank"
                className="hover:text-violet-400 transition-colors"
              >
                euphoriastan
              </a>
            </li>
            <li>
              <a
                href="#"
                target="_blank"
                className="hover:text-violet-400 transition-colors"
              >
                Collaboration
              </a>
            </li>
            <li>
              <a
                href="#"
                target="_blank"
                className="hover:text-violet-400 transition-colors"
              >
                Media
              </a>
            </li>
          </ul>
        </div>

        <div className="mx-auto sm:mx-0">
          <Title className="text-3xl mb-5 sm:mb-7 whitespace-nowrap">
            More Info
          </Title>
          <ul className="font-medium text-lg flex flex-col gap-3 md:gap-5 whitespace-nowrap">
            <li>
              <Link
                href="/terms-of-use"
                className="hover:text-violet-400 transition-colors"
              >
                Term and Conditions
              </Link>
            </li>
            <li>
              <Link
                href="/privacy-policy"
                className="hover:text-violet-400 transition-colors"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <a
                href="#"
                target="_blank"
                className="hover:text-violet-400 transition-colors"
              >
                Shipping Policy
              </a>
            </li>
            <li>
              <a
                href="#"
                target="_blank"
                className="hover:text-violet-400 transition-colors"
              >
                Sitemap
              </a>
            </li>
          </ul>
        </div>

        <div className="flex-auto max-w-[394px] mx-auto sm:mx-0">
          <Title className="text-3xl mb-5 sm:mb-7">Location</Title>
          <ul className="font-medium text-lg flex flex-col gap-3 md:gap-5 mb-7">
            <li>
              <a
                href="mailto:support@euphoria.in"
                target="_blank"
                className="hover:text-violet-400 transition-colors"
              >
                support@euphoria.in
              </a>
            </li>
            <li>
              <p>Eklingpura Chouraha, Ahmedabad Main Road</p>
            </li>
            <li>
              <p>(NH 8- Near Mahadev Hotel) Udaipur, India- 313002</p>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
