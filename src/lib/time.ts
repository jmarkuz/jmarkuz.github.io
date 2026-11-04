import type { YearMonth } from "@/content/profile";

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

/** Months since year 0, so ranges can be subtracted directly. */
export function toMonth(ym: YearMonth): number {
  const [y, m] = ym.split("-").map(Number);
  return (y ?? 0) * 12 + ((m ?? 1) - 1);
}

export function monthOf(date: Date): number {
  return date.getFullYear() * 12 + date.getMonth();
}

export function endMonth(end: YearMonth | null, now: number): number {
  return end === null ? now : toMonth(end);
}

export function formatMonth(month: number): string {
  return `${MONTHS[month % 12]} ${Math.floor(month / 12)}`;
}

/** "2y 7m", "4m", "3y". */
export function formatDuration(months: number): string {
  const y = Math.floor(months / 12);
  const m = months % 12;
  return [y ? `${y}y` : "", m ? `${m}m` : ""].filter(Boolean).join(" ") || "0m";
}
