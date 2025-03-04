export async function getServers(token: string) {
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

  const servers: {
    name: string;
    distance: string;
  }[] = await serversResponse.json();

  return servers;
}
