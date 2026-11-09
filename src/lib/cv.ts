import { statSync } from "node:fs";
import path from "node:path";
import { person } from "@/content/profile";

/** CV link plus its size, read from public/ at build time, so the label tells the truth about the download. */
export function cvInfo(): { href: string; label: string; size: string } | null {
  if (!person.cv) return null;
  try {
    const file = path.join(process.cwd(), "public", person.cv.href);
    const kb = Math.max(1, Math.round(statSync(file).size / 1024));
    return { href: person.cv.href, label: person.cv.label, size: `PDF · ${kb} KB` };
  } catch {
    return null; // file missing: hide the button instead of shipping a broken link
  }
}
