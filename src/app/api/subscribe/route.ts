const BEEHIIV_API = "https://api.beehiiv.com/v2";

// Simple, permissive email sanity check — beehiiv does the authoritative validation.
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let email: string | undefined;

  try {
    const body = await request.json();
    email = typeof body?.email === "string" ? body.email.trim() : undefined;
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  if (!email || !EMAIL_RE.test(email)) {
    return Response.json(
      { error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  const apiKey = process.env.BEEHIIV_API_KEY;
  const publicationId = process.env.BEEHIIV_PUBLICATION_ID;

  if (!apiKey || !publicationId) {
    console.error(
      "beehiiv not configured: set BEEHIIV_API_KEY and BEEHIIV_PUBLICATION_ID in .env.local",
    );
    return Response.json(
      { error: "Newsletter is not configured yet." },
      { status: 500 },
    );
  }

  try {
    const res = await fetch(
      `${BEEHIIV_API}/publications/${publicationId}/subscriptions`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          reactivate_existing: true,
          send_welcome_email: true,
          utm_source: "appliedintelligence.fm",
          utm_medium: "website",
          referring_site: "appliedintelligence.fm",
        }),
      },
    );

    if (!res.ok) {
      const detail = await res.text().catch(() => "");
      console.error(`beehiiv subscribe failed (${res.status}): ${detail}`);
      return Response.json(
        { error: "Could not subscribe right now. Please try again." },
        { status: 502 },
      );
    }

    return Response.json({ ok: true }, { status: 200 });
  } catch (err) {
    console.error("beehiiv subscribe error:", err);
    return Response.json(
      { error: "Could not subscribe right now. Please try again." },
      { status: 502 },
    );
  }
}
