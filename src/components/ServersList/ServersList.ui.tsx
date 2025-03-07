import { CI } from "astro:env/client";
import sortArrowSvg from "@/assets/sortArrow.svg";
import { twMerge } from "tailwind-merge";
import { Flag } from "./Flag";
import { useSortedServers } from "./useSortedServers";

interface ServersListProps {
  servers: { name: string; distance: number }[];
}

export function ServersList({ servers }: ServersListProps) {
  const { sortedServers, handleCountrySort, handleDistanceSort, sort } =
    useSortedServers(servers);

  return (
    <div
      className={twMerge([
        !CI && "animate-in",
        "bg-nexos-light px-4 lg:px-8 rounded-[0.75rem] shadow-xl w-full max-w-[624px] lg:min-w-xl mb-16",
      ])}
    >
      <div className="flex justify-between ">
        <button
          type="button"
          className="cursor-pointer flex gap-5 items-center py-6 lg:pt-8 lg:pb-6 hover:text-gray-400 transition-colors"
          onClick={handleCountrySort}
        >
          <span className="font-medium text-base leading-6 lg:text-xl lg:leading-[1.875rem]">
            Country name
          </span>
          <img
            className={twMerge([
              "transition-transform mt-[1px] ml-[-1px]",
              sort === "countryDec" && "transform rotate-180",
              sort === "countryAsc" && "transform rotate-0",
              !sort.startsWith("country") && "hidden",
            ])}
            src={sortArrowSvg.src}
            width="12"
            height="8"
            alt="sort indicator"
          />
        </button>
        <button
          type="button"
          className="cursor-pointer flex gap-5 items-center py-6 lg:pt-8 lg:pb-6  hover:text-gray-400 transition-colors mr-[0.3125rem]"
          onClick={handleDistanceSort}
        >
          <span className="font-medium text-base leading-6 lg:text-xl lg:leading-[1.875rem]">
            Distance
          </span>
          <img
            className={twMerge([
              "transition-transform mt-[1px] ml-[-1px] lg:mt-[4px] lg:mr-[1px]",
              sort === "distanceDec" && "transform rotate-180",
              sort === "distanceAsc" && "transform rotate-0",
              !sort.startsWith("distance") && "hidden",
            ])}
            src={sortArrowSvg.src}
            width="12"
            height="8"
            alt="sort indicator"
          />
        </button>
      </div>
      <ul>
        {sortedServers.map(({ name, distance }, idx) => (
          <li
            // biome-ignore lint/suspicious/noArrayIndexKey: animate on sort
            key={name + distance + idx}
            className={twMerge([
              !CI && "opacity-0 animate-in-fast",
              "border-t border-nexos-border py-6 lg:py-8 text-sm flex justify-between",
            ])}
            style={{ animationDelay: `${idx * 20}ms` }}
          >
            <span className="flex gap-4 items-center">
              <Flag text={name} lazyLoad={idx > 13} />
              <span className="font-medium text-base leading-6">{name}</span>
            </span>
            <span className="font-medium text-base leading-6">
              {distance} km
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
