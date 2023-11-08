"use client";

import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { defaultInstance } from "@/helpers/zod";
import { AuthUrlPaths } from "@/helpers/urlconf";

import { Button, Title } from "@/common/ui";
import { FormTextInput } from "@/common/FormInputs/FormTextInput";
import Link from "next/link";

const formSchema = z.object({
  email: z.string().email().default(""),
});

type Form = z.infer<typeof formSchema>;

export function ResetPasswordForm() {
  const form = useForm<Form>({
    resolver: zodResolver(formSchema),
    defaultValues: defaultInstance(formSchema),
  });

  return (
    <FormProvider {...form}>
      <form className={"max-w-[568px] mx-auto"}>
        <Title className="text-myblack-900 text-4xl font-core_sans tracking-wide">
          Reset Your Password
        </Title>
        <p className="mt-2.5 leading-5 text-[#676B80]">
          Enter your email and we'll send you a link to reset your password.
        </p>
        <p className="mt-1 font-medium text-[#858585]">Please check it.</p>
        <div className={"mt-7 mb-12"}>
          <FormTextInput
            fieldName={"email"}
            label="Email"
            placeholder="focus001@gmail.com"
            helperText={"We can not find your email."}
          />
        </div>
        <Button type="submit" size="auth">
          Send
        </Button>
        <p className="mt-2.5 text-gray-700 inline-block">
          Back to{" "}
          <Link
            href={AuthUrlPaths.getSignIn()}
            className="underline hover:text-gray-500"
          >
            Login
          </Link>
        </p>
      </form>
    </FormProvider>
  );
}
