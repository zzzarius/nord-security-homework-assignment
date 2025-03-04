import loaderSvg from "@/assets/loader.svg";
import { twMerge } from "tailwind-merge";

interface LoadingIndicatorProps {
  visible: boolean;
}

export function LoadingIndicator({ visible }: LoadingIndicatorProps) {
  return (
    <div
      className={twMerge([
        "pt-28 md:pt-26 pb-40 md:pb-39",
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
      <h2 className="text-nexos-gray-text mt-6 -md:mt-5.5 text-xl md:text-[28px] md:leading-[38px] md:tracking-[-0.56px] font-semibold">
        Logging in
      </h2>
    </div>
  );
}
