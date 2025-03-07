import loaderSvg from "@/assets/loader.svg";
import { twMerge } from "tailwind-merge";

interface LoadingIndicatorProps {
  visible: boolean;
}

export function LoadingIndicator({ visible }: LoadingIndicatorProps) {
  return (
    <div
      className={twMerge([
        "pt-28 lg:pt-26 pb-40 lg:pb-38",
        visible ? "flex flex-col items-center" : "hidden",
      ])}
    >
      <img
        className="aspect-1 animate-spin"
        height="80"
        width="80"
        alt="Loading indicator"
        src={loaderSvg.src}
      />
      <h2 className="text-nexos-gray-text mt-6 -lg:mt-5.5 text-xl leading-[1.875rem] lg:text-[1.75rem] lg:leading-[2.375rem] lg:tracking-[-0.035rem] font-semibold">
        Logging in
      </h2>
    </div>
  );
}
