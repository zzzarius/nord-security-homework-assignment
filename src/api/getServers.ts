import { SERVERS_RESPONSE_MOCK } from "./ServersResponse.mock";

export interface Server {
  name: string;
  distance: number;
}

const isCI = process.env.CI === "true";

export async function getServers(token: string) {
  if (isCI) {
    return SERVERS_RESPONSE_MOCK;
  }
  const serversResponse = await fetch(
    "https://playground.tesonet.lt/v1/servers",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (!serversResponse.ok) {
    throw new Error(
      `Failed to fetch servers. Status code: ${serversResponse.status}`
    );
  }

  const servers: Server[] = await serversResponse.json();

  return servers;
}
