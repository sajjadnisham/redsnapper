"use client";

import { useState, type FormEvent } from "react";
import { contact } from "@/data/site";

/** No backend: composes a mailto: link so the message goes straight to the restaurant inbox. */
export function ContactForm() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const subject = `${d.get("topic")} — ${d.get("name")}`;
    const body = [`Name: ${d.get("name")}`, `Phone: ${d.get("phone") || "-"}`, `Date / guests: ${d.get("when") || "-"}`, "", String(d.get("message") || "")].join("\n");
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };
  const field = "mt-1.5 block w-full rounded-[var(--radius-md)] border border-ink/15 bg-surface px-4 py-3 text-base outline-none focus:border-lagoon focus:ring-2 focus:ring-lagoon/25";
  const label = "type-label text-ink-muted";
  return (
    <form onSubmit={onSubmit} className="mt-6 grid gap-4">
      <label className={label}>Name<input name="name" required autoComplete="name" className={field} /></label>
      <label className={label}>Phone<input name="phone" type="tel" autoComplete="tel" className={field} /></label>
      <label className={label}>About
        <select name="topic" className={field} defaultValue="Table reservation">
          <option>Table reservation</option><option>Rooftop booking</option><option>Delivery or takeaway</option><option>Event or celebration</option><option>Other</option>
        </select>
      </label>
      <label className={label}>Date, time &amp; guests<input name="when" placeholder="e.g. Friday 7 PM, 4 people" className={field} /></label>
      <label className={label}>Message<textarea name="message" rows={4} className={field} /></label>
      <button type="submit" className="type-label mt-2 min-h-12 rounded-full bg-snapper px-6 text-white transition-colors hover:bg-snapper-deep">Write email</button>
      {sent && <p role="status" className="text-sm text-palm">Your email app should open now. If not, write to {contact.email}.</p>}
    </form>
  );
}
