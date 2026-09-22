import Link from "next/link";
import { BookOpen, MapPin, Phone } from "lucide-react";
import { contact, links } from "@/data/site";
import { WhatsAppIcon } from "./icons";

/** Sticky bottom actions on phones: menu, call, WhatsApp, directions. */
export function MobileActionBar() {
  const item = "flex flex-1 flex-col items-center justify-center gap-1 py-2.5 text-[0.7rem] font-semibold uppercase tracking-[0.1em]";
  return (
    <nav
      aria-label="Quick actions"
      className="fixed inset-x-0 bottom-0 z-30 border-t border-ink/10 bg-surface/95 pb-[env(safe-area-inset-bottom)] text-ink backdrop-blur-md md:hidden"
    >
      <div className="flex divide-x divide-ink/10">
        <Link href="/menu/" className={item}>
          <BookOpen aria-hidden className="size-5" strokeWidth={1.75} />
          Menu
        </Link>
        <a href={`tel:${contact.phones[0].tel}`} className={item}>
          <Phone aria-hidden className="size-5" strokeWidth={1.75} />
          Call
        </a>
        <a href={contact.whatsapp.href} target="_blank" rel="noopener noreferrer" className={item}>
          <WhatsAppIcon className="size-5" />
          WhatsApp
        </a>
        <a href={links.directions} target="_blank" rel="noopener noreferrer" className={`${item} bg-snapper text-white`}>
          <MapPin aria-hidden className="size-5" strokeWidth={1.75} />
          Directions
        </a>
      </div>
    </nav>
  );
}
