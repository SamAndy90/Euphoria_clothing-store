import { Switch, Transition } from "@headlessui/react";
import { BiCheck } from "react-icons/bi";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

export type CheckBoxProps = {
  checked: boolean;
  onChange?: (checked: boolean) => void;
  label?: string | React.ReactNode;
  className?: {
    checkbox?: string;
    label?: string;
  };
};

export function CheckBox(props: CheckBoxProps) {
  const { checked, onChange, label, className = {} } = props;

  const { checkbox: checkboxClassName = "", label: labelClassName = "" } =
    className;

  return (
    <div className={"flex items-center gap-x-2.5"}>
      <Switch.Group>
        <Switch
          checked={checked}
          onChange={onChange}
          className={twMerge(
            clsx(
              "relative inline-flex h-[18px] w-[18px] flex-shrink-0 items-center justify-center rounded-sm border border-gray-500 transition-colors",
              { "bg-gray-700 border-gray-700 text-white": checked,
            "hover:border-violet-500": !checked },
              checkboxClassName
            )
          )}
        >
          <Transition
            show={checked}
            enter={"transition-opacity duration-75"}
            enterFrom={"opacity-0 scale-75"}
            enterTo={"opacity-100 scale-100"}
            leave={"transition-opacity duration-75"}
            leaveFrom={"opacity-100 scale-100"}
            leaveTo={"opacity-0 scale-75"}
          >
            <BiCheck />
          </Transition>
        </Switch>

        {label && (
          <Switch.Label
            className={twMerge(
              "cursor-pointer select-none truncate text-base",
              labelClassName
            )}
          >
            {label}
          </Switch.Label>
        )}
      </Switch.Group>
    </div>
  );
}
