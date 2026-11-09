// Architecture diagrams for the pet projects. Drawn from each repository's README.
// Colours match the design tokens; hex values are used because SVG attributes are copied verbatim.

// Colours come from the CSS tokens in globals.css, so the diagrams follow the palette they are drawn in.
const c = (name: string) => `rgb(var(--c-${name}))`;
const INK = c("ink");
const BG = c("bg");
const MUTED = c("muted");
const FAINT = c("faint");
const PANEL = c("surface");
const LINE = c("line");
const LINE2 = c("line-2");
const TEL = c("tel");
const TEL_INK = c("tel-ink");
const TEL_TINT = c("tel-tint");
const BANK = c("bank");
const BANK_INK = c("bank-ink");
const BANK_TINT = c("bank-tint");
const PILL_SUB = c("pill-sub");

function Arrowhead({ id }: { id: string }) {
  return (
    <defs>
      <marker id={id} viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto">
        <path d="M0 0L8 4L0 8z" fill={MUTED} />
      </marker>
    </defs>
  );
}

function Box({
  x, y, w, h, title, sub, tone = "plain", rx = 7,
}: {
  x: number; y: number; w: number; h: number; title: string; sub?: string; tone?: "plain" | "tel" | "bank" | "dark"; rx?: number;
}) {
  const fill = { plain: PANEL, tel: TEL_TINT, bank: BANK_TINT, dark: INK }[tone];
  const stroke = { plain: LINE2, tel: TEL, bank: BANK, dark: INK }[tone];
  const subFill = { plain: FAINT, tel: TEL_INK, bank: BANK_INK, dark: PILL_SUB }[tone];
  const cx = x + w / 2;
  const ty = sub ? y + h / 2 - 3 : y + h / 2 + 4;
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx={rx} fill={fill} stroke={stroke} />
      <text x={cx} y={ty} textAnchor="middle" fill={tone === "dark" ? BG : INK}>
        {title}
      </text>
      {sub && (
        <text x={cx} y={ty + 15} textAnchor="middle" fill={subFill} fontSize="10.5">
          {sub}
        </text>
      )}
    </g>
  );
}

export function ReadyBellFlow() {
  return (
    <svg viewBox="0 0 560 250" role="img" aria-labelledby="rb-title" className="block h-auto w-full min-w-[520px] px-3.5 pt-2.5 pb-1 font-mono">
      <title id="rb-title">
        ReadyBell event flow: a QR scan starts a session, staff drive the order state machine, the OrderReady domain event
        triggers a Web Push notification and an SSE update. PostgreSQL stores data with tenant isolation; Redis holds
        session and cache state.
      </title>
      <Arrowhead id="rb-a" />
      <g fontSize="12">
        <Box x={8} y={22} w={96} h={44} title="QR scan" sub="customer" />
        <Box x={8} y={150} w={96} h={44} title="Staff panel" sub="REST + JWT" />
        <Box x={140} y={22} w={110} h={44} title="session" sub="CustomerSession" tone="tel" />
        <Box x={140} y={150} w={110} h={44} title="ordering" sub="state machine" tone="tel" />
        <Box x={300} y={86} w={104} h={44} title="OrderReady" sub="domain event" tone="dark" rx={22} />
        <Box x={438} y={22} w={116} h={44} title="notification" sub="Web Push · VAPID" tone="tel" />
        <Box x={438} y={150} w={116} h={44} title="SSE stream" sub="poll fallback" />
      </g>
      <g stroke={MUTED} strokeWidth="1.3" fill="none" markerEnd="url(#rb-a)">
        <path d="M104 44H138" />
        <path d="M104 172H138" />
        <path d="M195 66V148" />
        <path d="M250 165C280 165 280 115 298 112" />
        <path d="M404 100C422 90 420 50 436 46" />
        <path d="M404 116C422 128 420 168 436 170" />
      </g>
      <g fontSize="10.5" fill={MUTED}>
        <rect x={140} y={214} width={412} height={26} rx={6} fill={BG} stroke={LINE} />
        <text x={150} y={231}>PostgreSQL · tenant_id via @Filter</text>
        <text x={400} y={231}>Redis · session/cache</text>
      </g>
    </svg>
  );
}

export function VacancyPipeline() {
  return (
    <svg viewBox="0 0 560 250" role="img" aria-labelledby="vt-title" className="block h-auto w-full min-w-[520px] px-3.5 pt-2.5 pb-1 font-mono">
      <title id="vt-title">
        Vacancy Tracker pipeline: public APIs, RSS feeds, IMAP job alerts and Telegram posts are normalised and
        deduplicated, scored with rules and reasons, then triaged in the inbox and tracked in the pipeline. AI tailoring is
        opt-in with a fact check.
      </title>
      <Arrowhead id="vt-a" />
      <g fontSize="12">
        <Box x={8} y={14} w={112} h={30} title="public APIs" rx={6} />
        <Box x={8} y={52} w={112} h={30} title="RSS / Atom" rx={6} />
        <Box x={8} y={90} w={112} h={30} title="IMAP alerts" rx={6} />
        <Box x={8} y={128} w={112} h={30} title="Telegram" rx={6} />
        <Box x={160} y={56} w={104} h={60} title="normalise" sub="+ dedupe" tone="bank" />
        <Box x={300} y={56} w={104} h={60} title="score" sub="rules + reasons" tone="bank" />
        <Box x={440} y={30} w={112} h={44} title="inbox" sub="keyboard triage" />
        <Box x={440} y={98} w={112} h={44} title="pipeline" sub="status history" />
        <Box x={282} y={160} w={272} h={34} title="AI tailoring · opt-in · fact check" tone="dark" rx={17} />
      </g>
      <g stroke={MUTED} strokeWidth="1.3" fill="none" markerEnd="url(#vt-a)">
        <path d="M120 29C140 29 140 70 158 76" />
        <path d="M120 67H158" />
        <path d="M120 105H158" />
        <path d="M120 143C140 143 140 100 158 96" />
        <path d="M264 86H298" />
        <path d="M404 78C420 70 425 55 438 53" />
        <path d="M404 96C420 104 425 118 438 120" />
        <path d="M496 142V158" />
      </g>
      <g fontSize="10.5" fill={MUTED}>
        <rect x={8} y={214} width={544} height={26} rx={6} fill={BG} stroke={LINE} />
        <text x={18} y={231}>PostgreSQL 16 · Flyway · export CSV / XLSX / JSON · Docker Compose + Caddy</text>
      </g>
    </svg>
  );
}
