import { getFlagImageSrcFromText } from "./getFlagFromText";
import { useEffect, useState } from "react";

export function Flag({ text }: { text: string }) {
  const [flagSrc, countryName] = getFlagImageSrcFromText(text);
  const [mounted, setMounted] = useState(false);

  function handleFlagLoad(
    event: React.SyntheticEvent<HTMLImageElement, Event>
  ) {
    const img = event.target as HTMLImageElement;
    img.classList.remove("opacity-0");
    img.classList.add("animate-in-fast");
  }

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="min-w-[32px] min-h-[24px]" />;

  return (
    <img
      className="border-[1px] border-nexos-border object-cover min-w-[32px] min-h-[24px] max-w-[32px] max-h-[24px] opacity-0"
      width="32"
      height="24"
      onLoad={handleFlagLoad}
      src={flagSrc}
      alt={`Flag of ${countryName}`}
      loading="lazy"
    />
  );
}
