"use client";

import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { defaultInstance } from "@/helpers/zod";

import { Button, Title } from "@/common/ui";
import { FormTextInput } from "@/common/FormInputs/FormTextInput";

const formSchema = z.object({
  code: z.string().min(4).max(4).default(""),
});

type Form = z.infer<typeof formSchema>;

export function VerificationForm() {
  const form = useForm<Form>({
    resolver: zodResolver(formSchema),
    defaultValues: defaultInstance(formSchema),
  });

  return (
    <FormProvider {...form}>
      <form className={"max-w-[568px] mx-auto"}>
        <Title className="text-myblack-900 text-4xl font-core_sans tracking-wide">
          Verification
        </Title>
        <p className="mt-2 tracking-wide font-medium text-[#858585]">
          Verify your code.
        </p>
        <div className={"mt-7 mb-12"}>
          <FormTextInput
            fieldName={"code"}
            label="Verification Code"
            helperText={"Only numbers"}
          />
        </div>
        <Button type="submit" size="auth">
          Verify Code
        </Button>
      </form>
    </FormProvider>
  );
}
