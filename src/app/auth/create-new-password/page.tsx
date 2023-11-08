import { CreateNewPasswordForm } from "@/components/Auth";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create New Password",
};

export default function CreateNewPassword() {
  return (
    <CreateNewPasswordForm />
  );
}
