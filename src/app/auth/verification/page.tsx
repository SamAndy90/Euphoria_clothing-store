import { VerificationForm } from "@/components/Auth";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Verification",
};

export default function Verification() {
  return (
    <VerificationForm />
  );
}
