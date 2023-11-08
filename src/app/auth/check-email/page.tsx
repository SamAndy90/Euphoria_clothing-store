import { CheckEmail } from "@/components/Auth";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Check Email",
};

export default function EmailCheck() {
  return (
    <CheckEmail/>
  );
}
