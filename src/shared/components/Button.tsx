import { twMerge } from "tailwind-merge";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}

export function Button({
  className,
  children,
  variant = "primary",
  ...rest
}: ButtonProps) {
  const primaryClasses =
    "bg-nexos-highlight text-nexos-light hover:bg-nexos-light hover:text-nexos-highlight leading-normal font-semibold";

  const secondaryClasses =
    "bg-nexos-light text-nexos-highlight hover:bg-nexos-highlight hover:text-nexos-light";

  const buttonClasses =
    variant === "secondary" ? secondaryClasses : primaryClasses;

  return (
    <button
      className={twMerge([
        "cursor-pointer rounded-4xl border-1 border-nexos-highlight pt-3 pb-2.5 transition-colors",
        buttonClasses,
        className,
      ])}
      {...rest}
    >
      {children}
    </button>
  );
}
