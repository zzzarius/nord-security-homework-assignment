import { twMerge } from "tailwind-merge";

interface DescriptionProps {
  children: React.ReactNode;
  className?: string;
}

export function Description({ children, className }: DescriptionProps) {
  return (
    <p
      className={twMerge([
        "text-nexos-gray-text font-medium text-[14px] sm:text-[16px]",
        "text-center px-8 md:px-2 mb-3.5 leading-[21px] md:leading-[24px]",
        "tracking-[0px] md:text-[16px]",
        className,
      ])}
    >
      {children}
    </p>
  );
}
