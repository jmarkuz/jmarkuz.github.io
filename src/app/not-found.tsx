import { DomainMark } from "@/components/SiteHeader";
import { person } from "@/content/profile";

export const metadata = { title: `Not found · ${person.name}` };

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-screen max-w-[640px] flex-col justify-center px-[18px]">
      <p className="font-mono text-[12.5px] text-faint">status · 404 · span not found</p>
      <h1 className="mt-2 text-[40px] font-semibold tracking-[-0.03em]">This page does not exist.</h1>
      <p className="mt-2 text-ink-2">The address may be old or mistyped.</p>
      <a href="/" className="mt-6 inline-flex w-fit items-center gap-2.5 rounded-lg bg-ink px-4 py-2.5 text-[15px] font-medium text-bg">
        <DomainMark />
        Back to {person.name}
      </a>
    </main>
  );
}
