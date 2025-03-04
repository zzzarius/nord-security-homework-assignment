import { twMerge } from "tailwind-merge";

interface HeadingProps {
  children: React.ReactNode;
  size?: "medium" | "large";
  className?: string;
}

export function Heading1({
  children,
  size = "medium",
  className,
}: HeadingProps) {
  const sizeClasses =
    size === "large"
      ? "md:text-[48px] md:leading-[64px] md:tracking-[-0.96px]"
      : "md:text-[32px] md:leading-[44px] md:tracking-[-0.64px]";
  return (
    <h1
      className={twMerge([
        "text-center text-semibold text-[28px] leading-[40px] -tracking-[-0.56px]",
        sizeClasses,
        className,
      ])}
    >
      {children}
    </h1>
  );
}
