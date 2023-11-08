import { AuthWrapper } from "@/components/Auth/AuthWrapper";


export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AuthWrapper>{children}</AuthWrapper>;
}
