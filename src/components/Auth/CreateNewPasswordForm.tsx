"use client";

import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { defaultInstance } from "@/helpers/zod";

import { Button, Title } from "@/common/ui";
import { FormTextInput } from "@/common/FormInputs/FormTextInput";
import { FormPasswordInput } from "@/common/FormInputs/FormPasswordInput";

const formSchema = z.object({
  password: z.string().min(8, "Must be at least 8 characters.").default(""),
  confirmPassword: z
    .string()
    .min(8, "New password and comfirm new password do not match")
    .default(""),
});

type Form = z.infer<typeof formSchema>;

export function CreateNewPasswordForm() {
  const form = useForm<Form>({
    resolver: zodResolver(formSchema),
    defaultValues: defaultInstance(formSchema),
  });

  return (
    <FormProvider {...form}>
      <form className={"max-w-[568px] mx-auto flex flex-col gap-12"}>
        <div className="flex flex-col gap-7">
          <div>
            <Title className="text-myblack-900 text-4xl font-core_sans tracking-wide">
              Create New Password
            </Title>
            <p className="mt-2.5 font-medium text-[#858585]">
              Your new password must be different from previous used passwords.
            </p>
          </div>
          <FormPasswordInput fieldName={"password"} label={"Password"} />
          <FormTextInput
            type={"password"}
            fieldName={"confirmPassword"}
            label={"Confirm Password"}
            helperText={"New password and comfirm new password do not match"}
          />
        </div>
        <Button type="submit" size="auth">
          Reset Password
        </Button>
      </form>
    </FormProvider>
  );
}
