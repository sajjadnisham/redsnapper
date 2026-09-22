"use client";

import { useEffect, useState } from "react";
import { hours, timezoneOffsetHours } from "@/data/site";
import { formatSession, getOpenStatus } from "@/lib/hours";

/** Live "Open now" pill in Maldives time. Renders nothing until mounted to avoid hydration mismatch. */
export function OpenStatus({ className = "", dark = false }: { className?: string; dark?: boolean }) {
  const [status, setStatus] = useState<ReturnType<typeof getOpenStatus> | null>(null);
  useEffect(() => {
    const tick = () => setStatus(getOpenStatus());
    tick();
    const id = setInterval(tick, 60_000);
    return () => clearInterval(id);
  }, []);
  if (!status) return <span className={`inline-block h-7 ${className}`} aria-hidden />;
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[0.8rem] font-semibold ${
        dark ? "bg-white/10 text-white" : "bg-paper text-ink ring-1 ring-ink/10"
      } ${className}`}
      role="status"
    >
      <span className={`size-2 rounded-full ${status.open ? "bg-[#3FA86B]" : "bg-snapper"}`} aria-hidden />
      {status.message}
    </span>
  );
}

/** Opening hours table, highlighting today's row. */
export function HoursTable({ dark = false }: { dark?: boolean }) {
  const [today, setToday] = useState<number | null>(null);
  useEffect(() => {
    const now = new Date();
    setToday(new Date(now.getTime() + (now.getTimezoneOffset() + timezoneOffsetHours * 60) * 60_000).getDay());
  }, []);
  return (
    <dl className={`divide-y ${dark ? "divide-surface/15" : "divide-ink/10"}`}>
      {hours.map((row) => {
        const isToday = today !== null && row.days.includes(today);
        return (
          <div key={row.label} className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-[1fr_auto] sm:gap-6">
            <dt className="flex items-center gap-2 font-semibold">
              {row.label}
              {isToday && (
                <span className={`rounded-full px-2 py-0.5 text-[0.65rem] uppercase tracking-[0.12em] ${dark ? "bg-sunset text-ink" : "bg-lagoon text-white"}`}>
                  Today
                </span>
              )}
            </dt>
            <dd className="sm:text-right">
              {row.sessions.map((s) => (
                <span key={s.open} className="block tabular-nums">
                  {formatSession(s)}
                </span>
              ))}
              {row.note && <span className={`mt-1 block text-[0.85rem] ${dark ? "text-sunset" : "text-snapper"}`}>{row.note}</span>}
            </dd>
          </div>
        );
      })}
    </dl>
  );
}
