import { useEffect, useMemo, useState } from "react";

export function useSortedServers(
  servers: { name: string; distance: number }[],
) {
  const [sort, setSort] = useState<
    "countryAsc" | "countryDec" | "distanceAsc" | "distanceDec" | "noSort"
  >("distanceAsc");
  const [mounted, setMounted] = useState(false);

  const sortedServers = useMemo(
    () =>
      servers.toSorted((a, b) => {
        if (sort === "countryAsc") {
          return a.name.localeCompare(b.name);
        }
        if (sort === "countryDec") {
          return b.name.localeCompare(a.name);
        }
        if (sort === "distanceAsc") {
          return a.distance - b.distance;
        }
        if (sort === "distanceDec") {
          return b.distance - a.distance;
        }
        return 0;
      }),
    [servers, sort],
  );

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    setMounted(true);

    const params = new URLSearchParams(window.location.search);
    const countrySortParam = params.get("country");

    if (countrySortParam === "asc") {
      setSort("countryAsc");
    }
    if (countrySortParam === "desc") {
      setSort("countryDec");
    }

    const distanceSortParam = params.get("distance");
    if (distanceSortParam === "asc") {
      setSort("distanceAsc");
    }
    if (distanceSortParam === "desc") {
      setSort("distanceDec");
    }

    const historyListener = () => {
      const params = new URLSearchParams(window.location.search);
      const countrySortParam = params.get("country");

      if (countrySortParam === "asc") {
        setSort("countryAsc");
      }
      if (countrySortParam === "desc") {
        setSort("countryDec");
      }

      const distanceSortParam = params.get("distance");
      if (distanceSortParam === "asc") {
        setSort("distanceAsc");
      }
      if (distanceSortParam === "desc") {
        setSort("distanceDec");
      }
    };

    window.addEventListener("popstate", historyListener);

    return () => window.removeEventListener("popstate", historyListener);
  }, []);

  function handleCountrySort() {
    setSort((prevSort) => {
      if (prevSort === "countryAsc") {
        return "countryDec";
      }
      if (prevSort === "countryDec") {
        return "noSort";
      }
      return "countryAsc";
    });
  }

  function handleDistanceSort() {
    setSort((prevSort) => {
      if (prevSort === "distanceAsc") {
        return "distanceDec";
      }
      if (prevSort === "distanceDec") {
        return "noSort";
      }
      return "distanceAsc";
    });
  }

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    if (!mounted) {
      return;
    }
    if (sort === "noSort") {
      window.history.pushState({}, "", "/");
    }

    if (sort === "countryAsc") {
      window.history.pushState({}, "", "?country=asc");
    }
    if (sort === "countryDec") {
      window.history.pushState({}, "", "?country=desc");
    }
    if (sort === "distanceAsc") {
      window.history.pushState({}, "", "?distance=asc");
    }
    if (sort === "distanceDec") {
      window.history.pushState({}, "", "?distance=desc");
    }
  }, [sort, mounted]);

  return { sortedServers, handleCountrySort, handleDistanceSort, sort };
}
