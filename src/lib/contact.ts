import { person } from "@/content/profile";

/** Opens the visitor's mail client with only the address filled in: no subject, no body. */
export function mailtoHref(): string {
  return `mailto:${person.email}`;
}
