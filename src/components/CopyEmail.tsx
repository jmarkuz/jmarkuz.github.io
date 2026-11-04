"use client";

import { useState } from "react";

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

export function HeaderCopyEmail({ email }: { email: string }) {
  const { copied, copy } = useCopy(email);
  return (
    <button
      type="button"
      onClick={copy}
      className="ml-auto inline-flex h-9 items-center gap-2 rounded-lg border border-line-2 bg-surface px-3.5 text-[13.5px] font-medium hover:border-ink-2 md:ml-0"
    >
      {copied ? "Copied ✓" : "Copy email"}
      <span className="hidden font-mono text-[12.5px] text-muted lg:inline">{email}</span>
      <Announce copied={copied} />
    </button>
  );
}

export function ContactCopyEmail({ email, className }: { email: string; className: string }) {
  const { copied, copy } = useCopy(email);
  return (
    <button type="button" onClick={copy} className={className}>
      <span className="font-mono text-[11.5px] text-night-faint">email</span>
      {email}
      <span className="font-mono text-xs text-night-muted">{copied ? "copied ✓" : "copy"}</span>
      <Announce copied={copied} />
    </button>
  );
}
