import { forwardRef, useState } from "react";
import { View, HideView } from "./static";

import { IconButton, TextInput, TextInputProps } from "@/common/ui";

export const PasswordInput = forwardRef<HTMLInputElement, TextInputProps>(
  (props, ref) => {
    const [isVisible, setIsVisible] = useState(false);

    return (
      <TextInput
        {...{
          ...props,
          type: isVisible ? "text" : "password",
        }}
        ref={ref}
        endAdornment={
          isVisible ? (
            <IconButton
              onClick={() => setIsVisible((v) => v === !v)}
              onMouseUp={() => setIsVisible(false)}
              onMouseLeave={() => setIsVisible(false)}
              colorVariant={"secondary"}
              size={"normal"}
            >
              <HideView
                className={
                  "w-full h-full fill-gray-600"
                }
              />
            </IconButton>
          ) : (
            <IconButton
              onMouseDown={() => setIsVisible(true)}
              colorVariant={"secondary"}
              size={"normal"}
            >
              <View
                className={
                  "w-full h-full fill-gray-500 hover:fill-gray-400 transition-colors"
                }
              />
            </IconButton>
          )
        }
      />
    );
  }
);

PasswordInput.displayName = "PasswordInput";
