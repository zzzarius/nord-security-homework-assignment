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
  const primaryClasses = twMerge([
    "cursor-pointer rounded-4xl border-1 border-nexos-highlight bg-nexos-highlight",
    "text-nexos-light hover:bg-nexos-light hover:text-nexos-highlight",
    "mt-4 py-3 transition-colors",
    className,
  ]);

  const secondaryClasses = twMerge([
    "cursor-pointer rounded-4xl border-1 border-nexos-highlight bg-nexos-light",
    "text-nexos-highlight hover:bg-nexos-highlight hover:text-nexos-light",
    "mt-4 py-3 transition-colors",
    className,
  ]);

  return (
    <button
      className={variant === "secondary" ? secondaryClasses : primaryClasses}
      {...rest}
    >
      {children}
    </button>
  );
}
