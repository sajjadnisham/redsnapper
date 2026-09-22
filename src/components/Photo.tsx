import { asset } from "@/lib/asset";
import manifest from "@/data/photo-manifest.json";
import { photos, type Motif, type PhotoId, type Tone } from "@/data/photos";

const available = manifest as Record<string, string>;

type Props = {
  id: PhotoId;
  className?: string;
  /** Eager-load (hero images). Everything else lazy-loads. */
  priority?: boolean;
  /** Show the file name on placeholders so the team knows what to shoot. */
  caption?: boolean;
  /** Extra classes for the inner image/art (e.g. hover zoom, hero zoom). */
  imgClassName?: string;
  /** Placeholder caption corner: bottom-left (default) or top-right (for heroes with text at the bottom). */
  captionAt?: "bl" | "tr";
};

/**
 * A photograph slot. Renders the real photo if `/public/images/<id>.*` exists,
 * otherwise an art-directed line-drawing placeholder in brand colours.
 * The wrapper must be sized by the parent (aspect ratio or fixed height).
 */
export function Photo({ id, className = "", priority, caption = true, imgClassName = "", captionAt = "bl" }: Props) {
  const slot = photos[id];
  const file = available[id];

  return (
    <div className={`relative overflow-hidden bg-sand ${className}`}>
      {file ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={asset(`/images/${file}`)}
          alt={slot.alt}
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : "auto"}
          decoding="async"
          className={`absolute inset-0 h-full w-full object-cover ${imgClassName}`}
        />
      ) : (
        <>
          <PlaceholderArt tone={slot.tone} motif={slot.motif} label={slot.alt} className={imgClassName} />
          {caption && (
            <span className={`pointer-events-none absolute ${captionAt === "tr" ? "top-24 right-3" : "bottom-3 left-3"} max-w-[calc(100%-1.5rem)] truncate rounded-full bg-ink/45 px-2.5 py-1 font-sans text-[11px] leading-none tracking-wide text-white/90 backdrop-blur-sm`}>
              Photo · images/{id}.jpg
            </span>
          )}
        </>
      )}
    </div>
  );
}

const palettes: Record<Tone, { stops: string[]; line: string; accent: string }> = {
  sunset: { stops: ["#F4CB86", "#E3A33B", "#C5603A", "#6B3A26"], line: "#FFF4E2", accent: "#B8392A" },
  lagoon: { stops: ["#EAF0E6", "#9DD0C6", "#2E8683", "#1E6F6D"], line: "#F6EFE4", accent: "#E8D5B9" },
  espresso: { stops: ["#7A5038", "#5A3825", "#3B261B", "#2E1D16"], line: "#E8D5B9", accent: "#C98A4B" },
  sand: { stops: ["#FBF7F0", "#F1E4D0", "#E8D5B9", "#D8BE98"], line: "#B8392A", accent: "#5A3825" },
  palm: { stops: ["#B6CFA2", "#6E9760", "#3E6B3A", "#2C4E2A"], line: "#F6EFE4", accent: "#E3A33B" },
  snapper: { stops: ["#E27A62", "#C9493A", "#B8392A", "#7E2519"], line: "#FBEDE6", accent: "#E3A33B" },
  night: { stops: ["#4A3428", "#33231B", "#221711", "#1A120E"], line: "#F07A62", accent: "#E3A33B" },
};

function PlaceholderArt({ tone, motif, label, className }: { tone: Tone; motif: Motif; label: string; className?: string }) {
  const p = palettes[tone];
  const gid = `g-${tone}`;
  return (
    <svg
      role="img"
      aria-label={`${label} (photograph to come)`}
      viewBox="0 0 400 500"
      preserveAspectRatio="xMidYMid slice"
      className={`absolute inset-0 h-full w-full ${className ?? ""}`}
    >
      <defs>
        <linearGradient id={gid} x1="0" y1="0" x2="0.35" y2="1">
          {p.stops.map((c, i) => (
            <stop key={c} offset={i / (p.stops.length - 1)} stopColor={c} />
          ))}
        </linearGradient>
      </defs>
      <rect width="400" height="500" fill={`url(#${gid})`} />
      <g fill="none" stroke={p.line} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" opacity=".78">
        <MotifArt motif={motif} accent={p.accent} line={p.line} tone={tone} />
      </g>
    </svg>
  );
}

function Waves({ y, line }: { y: number; line: string }) {
  return (
    <g stroke={line} opacity=".55">
      {[0, 1, 2, 3, 4].map((r) => (
        <path
          key={r}
          d={Array.from({ length: 12 }, (_, i) => `M${i * 40 - 20 + (r % 2) * 20} ${y + r * 22}a20 20 0 0 1 40 0`).join(" ")}
          strokeWidth={1.1}
        />
      ))}
    </g>
  );
}

function MotifArt({ motif, accent, line, tone }: { motif: Motif; accent: string; line: string; tone: Tone }) {
  switch (motif) {
    case "horizon":
      return (
        <>
          <circle cx="250" cy="250" r="58" fill={accent} fillOpacity=".35" />
          <circle cx="250" cy="250" r="58" />
          <path d="M0 300h400" />
          <Waves y={330} line={line} />
          <path d="M40 90c20-8 40-8 60 0M300 120c14-6 28-6 42 0" opacity=".6" />
        </>
      );
    case "plane":
      return (
        <>
          <circle cx="110" cy="280" r="46" fill={accent} fillOpacity=".3" />
          <path d="M0 320h400" />
          <Waves y={350} line={line} />
          <path d="M60 200 Q180 170 300 130" strokeDasharray="3 9" opacity=".7" />
          <g transform="translate(300 128) rotate(-16)">
            <path d="M-26 0h52M-4 0l-14-16h8l16 16M-4 0l-14 16h8l16-16M-22 0l-6-8M-22 0l-6 8" strokeWidth="2" />
          </g>
        </>
      );
    case "plate":
      return (
        <>
          <circle cx="200" cy="250" r="150" fill={line} fillOpacity=".06" />
          <circle cx="200" cy="250" r="150" />
          <circle cx="200" cy="250" r="112" opacity=".6" />
          <path d="M140 250c20-40 100-40 120 0c-20 40-100 40-120 0z" fill={accent} fillOpacity=".25" />
          <path d="M150 230a18 18 0 0 1 36 0M186 230a18 18 0 0 1 36 0M222 230a18 18 0 0 1 36 0" opacity=".7" />
          <path d="M40 440c8-16 22-24 40-24M330 70c10 10 14 22 12 36" opacity=".5" />
        </>
      );
    case "fish":
      return (
        <>
          <circle cx="200" cy="250" r="160" opacity=".35" />
          <path d="M90 250c40-70 170-80 220 0c-50 80-180 70-220 0z" fill={accent} fillOpacity=".22" />
          <path d="M310 250l50-42v84z" />
          <circle cx="130" cy="240" r="6" fill={line} />
          <path d="M160 215a16 16 0 0 1 32 0M192 215a16 16 0 0 1 32 0M224 215a16 16 0 0 1 32 0M176 240a16 16 0 0 1 32 0M208 240a16 16 0 0 1 32 0M240 240a16 16 0 0 1 32 0M192 265a16 16 0 0 1 32 0M224 265a16 16 0 0 1 32 0" opacity=".75" />
          <path d="M200 185c20-30 50-30 70-10" />
        </>
      );
    case "cup":
      return (
        <>
          <circle cx="200" cy="260" r="140" opacity=".45" />
          <circle cx="200" cy="260" r="92" fill={line} fillOpacity=".08" />
          <circle cx="200" cy="260" r="92" />
          <circle cx="200" cy="260" r="70" fill={accent} fillOpacity=".4" />
          <path d="M292 260h36a20 20 0 0 1 0 40h-24" />
          <path d="M175 262c10-22 40-22 50 0c-10 22-40 22-50 0zM200 240v44" opacity=".85" />
          <path d="M150 90c-10 20 10 30 0 50M200 80c-10 20 10 30 0 50M250 90c-10 20 10 30 0 50" opacity=".5" />
        </>
      );
    case "glass":
      return (
        <>
          <rect x="140" y="140" width="120" height="240" rx="18" fill={line} fillOpacity=".08" />
          <path d="M146 220h108v142a14 14 0 0 1-14 14h-80a14 14 0 0 1-14-14z" fill={accent} fillOpacity=".35" stroke="none" />
          <rect x="140" y="140" width="120" height="240" rx="18" />
          <path d="M230 80l-20 150" strokeWidth="2.4" />
          <rect x="165" y="235" width="30" height="30" rx="6" opacity=".7" />
          <rect x="205" y="260" width="28" height="28" rx="6" opacity=".7" />
          <circle cx="262" cy="148" r="26" opacity=".8" />
          <path d="M262 122v52M236 148h52" opacity=".5" />
          <path d="M60 420h280" opacity=".5" />
        </>
      );
    case "leaf":
      return (
        <>
          {[
            [120, 180, -30],
            [260, 150, 25],
            [200, 300, -8],
            [90, 360, 30],
            [320, 340, -35],
          ].map(([x, y, r], i) => (
            <g key={i} transform={`translate(${x} ${y}) rotate(${r})`}>
              <path d="M0 -90c50 30 50 150 0 180c-50-30-50-150 0-180z" fill={i % 2 ? accent : line} fillOpacity=".14" />
              <path d="M0 -90v180M0 -40l-22-18M0 0l-26-18M0 40l-22-18M0 -40l22-18M0 0l26-18M0 40l22-18" opacity=".8" />
            </g>
          ))}
        </>
      );
    case "table":
      return (
        <>
          <path d="M0 170h400" opacity=".5" />
          {tone !== "night" && <Waves y={185} line={line} />}
          <ellipse cx="200" cy="360" rx="130" ry="36" fill={line} fillOpacity=".08" />
          <ellipse cx="200" cy="360" rx="130" ry="36" />
          <path d="M200 396v70M150 466h100" />
          <path d="M40 330c0-40 40-40 40 0v80M360 330c0-40-40-40-40 0v80" />
          <circle cx="170" cy="350" r="12" fill={accent} fillOpacity=".5" />
          <circle cx="232" cy="356" r="12" fill={accent} fillOpacity=".5" />
          {tone === "night" &&
            [60, 130, 200, 270, 340].map((x) => <circle key={x} cx={x} cy={90 + (x % 3) * 8} r="4" fill={accent} stroke="none" />)}
          {tone === "night" && <path d="M20 80Q200 130 380 80" opacity=".6" />}
        </>
      );
    case "people":
      return (
        <>
          <circle cx="140" cy="210" r="34" />
          <path d="M70 360c0-70 140-70 140 0" />
          <circle cx="262" cy="200" r="38" fill={accent} fillOpacity=".25" />
          <path d="M184 360c0-80 156-80 156 0" />
          <path d="M40 370h320" />
          <circle cx="205" cy="340" r="14" opacity=".8" />
          <path d="M60 110c20-10 40-10 60 0M280 100c20-10 40-10 60 0" opacity=".45" />
        </>
      );
  }
}
