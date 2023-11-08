import { ResetPasswordForm } from "@/components/Auth";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reset Password",
};

export default function ResetPassword() {
  return (
    <ResetPasswordForm />
  );
}
