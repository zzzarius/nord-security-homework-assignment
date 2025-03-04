import downSvg from "@/assets/down.svg";
import { twMerge } from "tailwind-merge";
import { useSortedServers } from "./useSortedServers";
import { getFlagFromText } from "./getFlagFromText";

export function ServersList({
  servers,
}: {
  servers: { name: string; distance: string }[];
}) {
  const { sortedServers, handleCountrySort, handleDistanceSort, sort } =
    useSortedServers(servers);

  return (
    <div className="bg-nexos-light px-6 rounded-lg shadow-xl w-full max-w-[624px] mb-16 animate-in">
      <div className="flex justify-between ">
        <button
          type="button"
          className="cursor-pointer flex gap-4 items-center py-6 hover:text-gray-400 transition-colors"
          onClick={handleCountrySort}
        >
          <span>Country name</span>
          <img
            className={twMerge([
              sort === "countryDec" && "transform rotate-180",
              sort === "countryAsc" && "transform rotate-0",
              !sort.startsWith("country") && "hidden",
            ])}
            src={downSvg.src}
            alt=""
          />
        </button>
        <button
          type="button"
          className="cursor-pointer flex gap-4 items-center py-6 hover:text-gray-400 transition-colors"
          onClick={handleDistanceSort}
        >
          <span>Distance</span>
          <img
            className={twMerge([
              sort === "distanceDec" && "transform rotate-180",
              sort === "distanceAsc" && "transform rotate-0",
              !sort.startsWith("distance") && "hidden",
            ])}
            src={downSvg.src}
            alt=""
          />
        </button>
      </div>
      <ul>
        {sortedServers.map(({ name, distance }) => (
          <li
            key={name + distance}
            className="border-t border-nexos-border py-6 text-sm flex justify-between"
          >
            <span className="flex gap-2 items-center">
              <span className="min-w-[32px] min-h-[24px] flex items-center">
                <img
                  className="border-[1px] border-nexos-border"
                  width="32"
                  height="24"
                  src={getFlagFromText(name)}
                  alt="flag"
                  loading="lazy"
                />
              </span>
              <span>{name}</span>
            </span>
            <span>{distance}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
