import manifest from "@/data/photo-manifest.json";
import type { PhotoId } from "@/data/photos";

/** True when a real photograph exists in /public/images for this slot. */
export const hasPhoto = (id: PhotoId) => id in (manifest as Record<string, string>);
