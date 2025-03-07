import { CI, SERVERS_API_ENDPOINT } from "astro:env/server";
import { SERVERS_RESPONSE_MOCK } from "./ServersResponse.mock";

export interface Server {
  name: string;
  distance: number;
}

export async function getServers(token: string) {
  if (CI) {
    return SERVERS_RESPONSE_MOCK;
  }
  const serversResponse = await fetch(SERVERS_API_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!serversResponse.ok) {
    throw new Error(
      `Failed to fetch servers. Status code: ${serversResponse.status}`,
    );
  }

  const servers: Server[] = await serversResponse.json();

  return servers;
}
