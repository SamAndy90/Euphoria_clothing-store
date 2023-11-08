import { SignUpForm } from "@/components/Auth";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up",
};

export default function SignUp() {
  return (
      <SignUpForm />
  );
}
