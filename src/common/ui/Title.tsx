import { twMerge } from "tailwind-merge";

export type TitleProps = {
  children: React.ReactNode;
  component?: React.ElementType;
  className?: string;
};

export function Title({ children, component = "h2", className }: TitleProps) {
  const Component = component;

  return (
    <Component
      className={twMerge(
        "text-4xl font-bold font-core_sans leading-none",
        className
      )}
    >
      {children}
    </Component>
  );
}
