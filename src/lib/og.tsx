/* eslint-disable @next/next/no-img-element -- Satori renders plain <img>, not next/image */
import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import sharp from "sharp";
import type { Episode } from "@/data/episodes";
import { SITE_AUTHOR, SITE_DESCRIPTION, SITE_HOST, SITE_NAME } from "@/lib/site";

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = "image/png";

// Episode layout geometry. Satori only wraps text inside a box with a
// definite width, so the text column width is computed, not left to flex.
const PAD_X = 72;
const PAD_Y = 64;
const PHOTO = 380;
const GAP = 56;
const TEXT_COL = OG_SIZE.width - PAD_X * 2 - PHOTO - GAP;

const COLORS = {
  cream: "#FDFCFA",
  charcoal: "#1a1a1a",
  body: "#5A5650",
  muted: "#8B8680",
  border: "#E5E1D8",
  gold: "#C8A96E",
};

const FONT_DIR = join(process.cwd(), "src/assets/fonts");
const PUBLIC_DIR = join(process.cwd(), "public");
const HOST_PHOTO = "/guests/bm_09-Keith-Richman_0554.jpg";

type Font = { name: string; data: ArrayBuffer; weight: 400 | 500 | 700; style: "normal" };

let fontsPromise: Promise<Font[]> | undefined;

function loadFonts(): Promise<Font[]> {
  fontsPromise ??= Promise.all(
    (
      [
        ["Libre Baskerville", "LibreBaskerville-Regular.ttf", 400],
        ["Libre Baskerville", "LibreBaskerville-Bold.ttf", 700],
        ["DM Sans", "DMSans-Regular.ttf", 400],
        ["DM Sans", "DMSans-Medium.ttf", 500],
      ] as const
    ).map(async ([name, file, weight]) => {
      const buf = await readFile(join(FONT_DIR, file));
      return {
        name,
        weight,
        style: "normal" as const,
        data: buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength),
      };
    })
  );
  return fontsPromise;
}

/**
 * Load a photo from /public, square-crop and downscale it, and return a PNG
 * data URI that Satori can render. Handles webp and multi-megabyte originals.
 * Returns undefined if the file is missing or unreadable.
 */
async function loadPhoto(publicPath: string | undefined, px: number): Promise<string | undefined> {
  if (!publicPath || !publicPath.startsWith("/")) return undefined;
  try {
    const png = await sharp(join(PUBLIC_DIR, publicPath))
      .rotate()
      .resize(px, px, { fit: "cover", position: "attention", withoutEnlargement: true })
      .png()
      .toBuffer();
    return `data:image/png;base64,${png.toString("base64")}`;
  } catch (err) {
    console.warn(`og: could not load photo ${publicPath}:`, err);
    return undefined;
  }
}

function initials(name: string): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? "")
    .join("");
}

function Eyebrow({ children }: { children: string }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 16,
        fontFamily: "DM Sans",
        fontWeight: 500,
        fontSize: 22,
        letterSpacing: 4,
        color: COLORS.gold,
        textTransform: "uppercase",
      }}
    >
      <div style={{ width: 40, height: 2, backgroundColor: COLORS.gold }} />
      <span>{children}</span>
    </div>
  );
}

async function render(element: React.ReactElement): Promise<ImageResponse> {
  return new ImageResponse(element, { ...OG_SIZE, fonts: await loadFonts() });
}

/** Site-wide share image used by every route without a more specific one. */
export async function renderSiteImage(): Promise<ImageResponse> {
  const host = await loadPhoto(HOST_PHOTO, 240);

  return render(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "64px 72px",
        backgroundColor: COLORS.cream,
        color: COLORS.charcoal,
      }}
    >
      <Eyebrow>AI Podcast</Eyebrow>

      <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
        <div
          style={{
            fontFamily: "Libre Baskerville",
            fontWeight: 700,
            fontSize: 92,
            lineHeight: 1.05,
            letterSpacing: -1,
          }}
        >
          {SITE_NAME}
        </div>
        <div
          style={{
            fontFamily: "DM Sans",
            fontWeight: 400,
            fontSize: 28,
            lineHeight: 1.4,
            color: COLORS.body,
            maxWidth: 940,
          }}
        >
          {SITE_DESCRIPTION}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderTop: `1px solid ${COLORS.border}`,
          paddingTop: 28,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          {host ? (
            <img
              src={host}
              alt=""
              width={72}
              height={72}
              style={{ borderRadius: 36, border: `2px solid ${COLORS.gold}` }}
            />
          ) : null}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontFamily: "DM Sans", fontWeight: 400, fontSize: 20, color: COLORS.muted }}>
              Hosted by
            </span>
            <span style={{ fontFamily: "DM Sans", fontWeight: 500, fontSize: 26 }}>{SITE_AUTHOR}</span>
          </div>
        </div>
        <span style={{ fontFamily: "DM Sans", fontWeight: 500, fontSize: 24, color: COLORS.muted }}>
          {SITE_HOST}
        </span>
      </div>
    </div>
  );
}

/** Per-episode share image: guest photo, title, guest, and episode details. */
export async function renderEpisodeImage(episode: Episode): Promise<ImageResponse> {
  const photo = await loadPhoto(episode.photo, PHOTO * 2);
  const titleSize = episode.title.length > 64 ? 40 : episode.title.length > 44 ? 46 : 54;

  return render(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        gap: GAP,
        padding: `${PAD_Y}px ${PAD_X}px`,
        backgroundColor: COLORS.cream,
        color: COLORS.charcoal,
      }}
    >
      {photo ? (
        <img
          src={photo}
          alt=""
          width={PHOTO}
          height={PHOTO}
          style={{ borderRadius: 28, flexShrink: 0, objectFit: "cover" }}
        />
      ) : (
        <div
          style={{
            width: PHOTO,
            height: PHOTO,
            borderRadius: 28,
            flexShrink: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: COLORS.gold,
            color: COLORS.cream,
            fontFamily: "Libre Baskerville",
            fontWeight: 700,
            fontSize: 140,
          }}
        >
          {initials(episode.guest)}
        </div>
      )}

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
          width: TEXT_COL,
          flexShrink: 0,
        }}
      >
        <Eyebrow>{`${SITE_NAME} · Episode ${episode.id}`}</Eyebrow>

        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <div
            style={{
              fontFamily: "Libre Baskerville",
              fontWeight: 700,
              fontSize: titleSize,
              lineHeight: 1.15,
              letterSpacing: -0.5,
              width: TEXT_COL,
            }}
          >
            {episode.title}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <span style={{ fontFamily: "DM Sans", fontWeight: 500, fontSize: 30 }}>
              {episode.guest}
            </span>
            <span style={{ fontFamily: "DM Sans", fontWeight: 400, fontSize: 24, color: COLORS.body }}>
              {episode.guestTitle}
            </span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontFamily: "DM Sans",
            fontWeight: 400,
            fontSize: 22,
            color: COLORS.muted,
            borderTop: `1px solid ${COLORS.border}`,
            paddingTop: 20,
          }}
        >
          <span>{`${episode.date} · ${episode.duration}`}</span>
          <span style={{ fontWeight: 500 }}>{SITE_HOST}</span>
        </div>
      </div>
    </div>
  );
}
