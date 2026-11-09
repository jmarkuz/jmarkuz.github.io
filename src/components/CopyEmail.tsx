"use client";

import { useState } from "react";
import { MailIcon } from "./icons";

/**
 * Copies the address to the clipboard. Without clipboard access (old browser, insecure context)
 * it falls back to opening the mail client.
 */
function useCopy(email: string) {
  const [copied, setCopied] = useState(false);
  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  }
  return { copied, copy };
}

function Announce({ copied }: { copied: boolean }) {
  return (
    <span className="sr-only" aria-live="polite">
      {copied ? "Email address copied" : ""}
    </span>
  );
}

/** Hero button: shows the full address, so a recruiter can read it, select it, or copy it in one click. */
export function HeroCopyEmail({ email }: { email: string }) {
  const { copied, copy } = useCopy(email);
  return (
    <button
      type="button"
      onClick={copy}
      className="inline-flex h-11 items-center gap-2.5 rounded-lg border border-line-2 bg-surface/70 px-4 text-[15px] font-medium whitespace-nowrap backdrop-blur-sm hover:border-ink-2"
    >
      <span className="font-mono text-[14px] text-ink-2">{email}</span>
      <span className="font-mono text-[12.5px] text-muted">{copied ? "copied ✓" : "copy"}</span>
      <Announce copied={copied} />
    </button>
  );
}

export function ContactCopyEmail({ email, className }: { email: string; className: string }) {
  const { copied, copy } = useCopy(email);
  return (
    <button type="button" onClick={copy} className={className}>
      <span className="flex items-center text-faint">
        <MailIcon className="size-4" />
        <span className="sr-only">Email</span>
      </span>
      {email}
      <span className="font-mono text-[12.5px] text-muted">{copied ? "copied ✓" : "copy"}</span>
      <Announce copied={copied} />
    </button>
  );
}
