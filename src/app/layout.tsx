import { Header } from "@/components/Header";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Footer } from "@/components/Footer";

import "@/styles/globals.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const core_sans_c = localFont({
  src: [
    {
      path: "../fonts/CoreSansC/CoreSansC-45Regular.woff2",
      weight: "400",
    },
    {
      path: "../fonts/CoreSansC/CoreSansC-55Medium.woff2",
      weight: "500",
    },
    {
      path: "../fonts/CoreSansC/CoreSansC-65Bold.woff2",
      weight: "700",
    },
    {
      path: "../fonts/CoreSansC/CoreSansC-75ExtraBold.woff2",
      weight: "800",
    },
    {
      path: "../fonts/CoreSansC/CoreSansC-85Heavy.woff2",
      weight: "900",
    },
  ],
  display: "swap",
  variable: "--font-core_sans_c",
});

const causten = localFont({
  src: [
    {
      path: "../fonts/Causten/Causten-Light.woff2",
      weight: "300",
    },
    {
      path: "../fonts/Causten/Causten-Regular.woff2",
      weight: "400",
    },
    {
      path: "../fonts/Causten/Causten-Medium.woff2",
      weight: "500",
    },
    {
      path: "../fonts/Causten/Causten-SemiBold.woff2",
      weight: "600",
    },
    {
      path: "../fonts/Causten/Causten-Bold.woff2",
      weight: "700",
    },
  ],
  display: "swap",
  variable: "--font-causten",
});

export const metadata: Metadata = {
  title: {
    default: "Home | Euphoria",
    template: "%s | Euphoria",
  },
  description: "Men's and women's clothing store",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${causten.variable} ${core_sans_c.variable} text-gray-500 h-full`}
    >
      <body className="font-causten min-h-full flex flex-col">
        <Header />
        <main className="flex-auto flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
