import { hours, timezoneOffsetHours, type Session } from "@/data/site";

export function formatTime(t: string) {
  const [h, m] = t.split(":").map(Number);
  if (h === 24 && m === 0) return "12:00 AM";
  const suffix = h >= 12 ? "PM" : "AM";
  const h12 = h % 12 === 0 ? 12 : h % 12;
  return `${h12}:${String(m).padStart(2, "0")} ${suffix}`;
}

export const formatSession = (s: Session) => `${formatTime(s.open)} – ${formatTime(s.close)}`;

const toMin = (t: string) => {
  const [h, m] = t.split(":").map(Number);
  return h * 60 + m;
};

/** Current Maldives-time open/closed status, plus the next change. */
export function getOpenStatus(now = new Date()) {
  const local = new Date(now.getTime() + (now.getTimezoneOffset() + timezoneOffsetHours * 60) * 60_000);
  const day = local.getDay();
  const mins = local.getHours() * 60 + local.getMinutes();
  const today = hours.find((r) => r.days.includes(day));
  const sessions = today?.sessions ?? [];

  for (const s of sessions) {
    if (mins >= toMin(s.open) && mins < toMin(s.close)) {
      return { open: true, message: `Open now · until ${s.close === "24:00" ? "midnight" : formatTime(s.close)}` };
    }
  }
  const next = sessions.find((s) => mins < toMin(s.open));
  if (next) return { open: false, message: `Closed now · opens ${formatTime(next.open)}` };
  const tomorrow = hours.find((r) => r.days.includes((day + 1) % 7));
  return { open: false, message: `Closed now · opens ${tomorrow ? formatTime(tomorrow.sessions[0].open) : "tomorrow"} tomorrow` };
}

/** schema.org openingHoursSpecification */
export function openingHoursSpec() {
  const names = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return hours.flatMap((row) =>
    row.sessions.map((s) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: row.days.map((d) => `https://schema.org/${names[d]}`),
      opens: s.open,
      closes: s.close === "24:00" ? "23:59" : s.close,
    })),
  );
}
