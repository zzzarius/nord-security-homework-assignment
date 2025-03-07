import { twMerge } from "tailwind-merge";

interface DescriptionProps {
  children: React.ReactNode;
  className?: string;
}

export function Description({ children, className }: DescriptionProps) {
  return (
    <p
      className={twMerge([
        "text-nexos-gray-text font-medium text-sm leading-6 tracking-normal lg:text-base",
        "text-center px-8 lg:px-2 mb-3.5 leading-[1.3125rem] lg:leading-6 lg:mt-0.5 pb-0.5",
        "tracking-normal",
        className,
      ])}
    >
      {children}
    </p>
  );
}
