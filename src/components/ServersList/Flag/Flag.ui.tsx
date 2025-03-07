import { useEffect, useState } from "react";
import { getFlagImageSrcFromText } from "./getFlagFromText";
import { CI } from "astro:env/client";

interface FlagProps {
  text: string;
  lazyLoad?: boolean;
}

export function Flag({ text, lazyLoad = false }: FlagProps) {
  const lazyLoadFlag = lazyLoad ? "lazy" : "eager";
  const [flagSrc, countryName] = getFlagImageSrcFromText(text);
  const [mounted, setMounted] = useState(false);

  function handleFlagLoad(
    event: React.SyntheticEvent<HTMLImageElement, Event>
  ) {
    const img = event.target as HTMLImageElement;
    img.classList.remove("opacity-0");
    if (!CI) {
      img.classList.add("animate-in-fast");
    }
  }

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="min-w-8 min-h-6" />;

  return (
    <img
      className="border-[1px] border-nexos-border object-cover min-w-8 min-h-6 max-w-8 max-h-6 opacity-0"
      width="32"
      height="24"
      onLoad={handleFlagLoad}
      src={flagSrc}
      alt={`Flag of ${countryName}`}
      loading={lazyLoadFlag}
    />
  );
}
