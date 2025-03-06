import { TOKEN_API_ENDPOINT } from "astro:env/client";

export async function getToken(username: string, password: string) {
  const tokenResponse = await fetch(TOKEN_API_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });

  if (!tokenResponse.ok) {
    throw new Error("Failed to get token");
  }

  const { token } = await tokenResponse.json();
  if (!token) {
    throw new Error("No token in response");
  }

  return token;
}
