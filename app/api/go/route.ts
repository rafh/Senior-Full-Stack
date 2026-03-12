const GO_API_URL = process.env.GO_API_URL ?? "http://localhost:8081";

export async function GET() {
  try {
    const res = await fetch(`${GO_API_URL}/message`, { cache: "no-store" });

    if (!res.ok) {
      return Response.json(
        { error: "Go API returned an error" },
        { status: res.status }
      );
    }

    const data = await res.json();
    return Response.json(data);
  } catch {
    return Response.json(
      { error: "Failed to reach Go API" },
      { status: 502 }
    );
  }
}
