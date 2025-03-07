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
      ? "lg:text-5xl lg:leading-[4rem] lg:tracking-[-0.06rem]"
      : "lg:text-[2rem] lg:leading-[2.75rem] lg:tracking-[-0.04rem]";
  return (
    <h1
      className={twMerge([
        "text-center text-semibold text-[1.75rem] font-semibold leading-10 tracking-[-0.035rem]",
        sizeClasses,
        className,
      ])}
    >
      {children}
    </h1>
  );
}
