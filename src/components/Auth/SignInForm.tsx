"use client";

import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { defaultInstance } from "@/helpers/zod";
import { AuthUrlPaths } from "@/helpers/urlconf";

import { Button, Title } from "@/common/ui";
import { FormTextInput } from "@/common/FormInputs/FormTextInput";
import { FormPasswordInputExtended } from "@/common/FormInputs/FormPasswordInputExtended";
import { Social } from "@/components/Auth/Social"
import Link from "next/link";

const formSchema = z.object({
  username: z.string().email().default(""),
  password: z
    .string()
    .min(8, "Use 8 or more characters with a mix of letters, numbers & symbols")
    .default(""),
});

type Form = z.infer<typeof formSchema>;

export function SignInForm() {
  const form = useForm<Form>({
    resolver: zodResolver(formSchema),
    defaultValues: defaultInstance(formSchema),
  });

  return (
    <FormProvider {...form}>
      <form className={"max-w-[568px] mx-auto flex flex-col gap-12"}>
        <Title className="text-myblack-900 text-4xl font-core_sans tracking-wide">Sign In Page</Title>
        <Social/>
        <div className="flex items-center justify-between h-[18px]">
          <p className="bg-[#D9D9D9] h-0.5 w-full" />
          <span className="font-core_sans text-[#666] text-lg px-6">OR</span>
          <p className="bg-[#D9D9D9] h-0.5 w-full" />
        </div>
        <div className="flex flex-col gap-7">
          <FormTextInput
            fieldName={"username"}
            label="User name or email address"
          />
          <div className="text-right">
            <FormPasswordInputExtended
              fieldName={"password"}
              label="Password"
            />
            <Link
              href={AuthUrlPaths.getResetPassword()}
              className="mt-2.5 text-gray-700 hover:underline hover:text-gray-500 inline-block"
            >
              Forget your password?
            </Link>
          </div>
          <div>
            <Button type="submit" size="auth">Sign in</Button>
            <p className="mt-2.5 text-gray-700 inline-block">
              Don’t have an account?{" "}
              <Link
                href={AuthUrlPaths.getSignUp()}
                className="hover:underline hover:text-gray-500"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </form>
    </FormProvider>
  );
}
