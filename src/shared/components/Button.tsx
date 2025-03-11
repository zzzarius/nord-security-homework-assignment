import { twMerge } from "tailwind-merge";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: React.ReactNode;
}

export function Button({ className, children, ...rest }: ButtonProps) {
  return (
    <button
      className={twMerge([
        "cursor-pointer rounded-4xl border-1 border-nexos-highlight pt-3 pb-2.5 transition-colors",
        "bg-nexos-highlight text-nexos-light leading-normal font-semibold",
        "hover:bg-nexos-hover active:bg-nexos-active",
        "focus:outline-2 focus:outline-offset-2 focus:outline-solid",
        className,
      ])}
      {...rest}
    >
      {children}
    </button>
  );
}
