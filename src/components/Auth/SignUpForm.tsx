"use client";

import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { defaultInstance } from "@/helpers/zod";
import { AuthUrlPaths, DocsUrlPaths } from "@/helpers/urlconf";

import { Button, Title } from "@/common/ui";
import { FormTextInput } from "@/common/FormInputs/FormTextInput";
import { FormPasswordInputExtended } from "@/common/FormInputs/FormPasswordInputExtended";
import { Social } from "@/components/Auth/Social";
import Link from "next/link";
import { FormCheckbox } from "@/common/FormInputs/FormCheckbox";

const formSchema = z.object({
  email: z.string().email().default(""),
  password: z
    .string()
    .min(8, "Use 8 or more characters with a mix of letters, numbers & symbols")
    .default(""),
});

type Form = z.infer<typeof formSchema>;

export function SignUpForm() {
  const form = useForm<Form>({
    resolver: zodResolver(formSchema),
    defaultValues: defaultInstance(formSchema),
  });

  return (
    <FormProvider {...form}>
      <form className={"max-w-[568px] mx-auto flex flex-col gap-12"}>
        <div>
          <Title className="text-myblack-900 text-4xl font-core_sans tracking-wide">
            Sign Up
          </Title>
          <p className="mt-2.5 font-medium text-[#858585]">
            Sign up for free to access to in any of our products
          </p>
        </div>
        <Social />
        <div className="flex flex-col gap-7">
          <FormTextInput
            fieldName={"email"}
            label="Email Address"
            placeholder="designer@gmail.com"
          />
          <FormPasswordInputExtended fieldName={"password"} label="Password" />
          <div>
            <FormCheckbox
              fieldName={"privacy"}
              label={
                <p className="font-medium text-lg">
                  Agree to our{" "}
                  <Link
                    href={DocsUrlPaths.getTerms()}
                    className={
                      "underline hover:text-gray-400 transition-colors"
                    }
                  >
                    Terms of use
                  </Link>{" "}
                  and{" "}
                  <Link
                    href={DocsUrlPaths.getPrivacy()}
                    className={
                      "underline hover:text-gray-400 transition-colors"
                    }
                  >
                    Privacy Policy
                  </Link>
                </p>
              }
            />
            <FormCheckbox
              fieldName={"subscription"}
              label={"Subscribe to our monthly newsletter"}
              className={{ label: "font-medium text-lg" }}
            />
          </div>
        </div>

        <div>
          <Button size="auth">Sign Up</Button>
          <p className="mt-2.5 text-gray-700 inline-block">
            Already have an account?{" "}
            <Link
              href={AuthUrlPaths.getSignIn()}
              className="hover:underline hover:text-gray-500"
            >
              Log in
            </Link>
          </p>
        </div>
      </form>
    </FormProvider>
  );
}
