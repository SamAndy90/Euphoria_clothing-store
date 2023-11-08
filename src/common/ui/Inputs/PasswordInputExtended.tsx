import { forwardRef, useState } from "react";
import { View, HideView } from "./static";

import { IconButton, TextInputExtended, TextInputProps } from "@/common/ui";

export const PasswordInputExtended = forwardRef<
  HTMLInputElement,
  TextInputProps
>((props, ref) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <TextInputExtended
      {...{
        ...props,
        type: isVisible ? "text" : "password",
      }}
      ref={ref}
      endAdornment={
        isVisible ? (
          <span
            className="group flex items-end justify-end gap-4 hover:text-gray-400 transition-colors"
            onClick={() => setIsVisible(false)}
          >
            <IconButton onClick={() => setIsVisible(false)} size={"normal"}>
              <HideView className={"w-full h-full fill-gray-500 group-hover:fill-gray-400 transition-colors"} />
            </IconButton>
            Hide
          </span>
        ) : (
          <span
            className="group flex items-end justify-end gap-4 hover:text-gray-400 transition-colors"
            onClick={() => setIsVisible(true)}
          >
            <IconButton size={"normal"}>
              <View
                className={
                  "fill-gray-500 group-hover:fill-gray-400 transition-colors"
                }
              />
            </IconButton>
            Show
          </span>
        )
      }
    />
  );
});

PasswordInputExtended.displayName = "PasswordInputExtended";
