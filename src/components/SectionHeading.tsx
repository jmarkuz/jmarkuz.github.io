export function SectionHeading({ no, id, title, lead }: { no: string; id: string; title: string; lead: string }) {
  return (
    <div className="mb-7 flex flex-wrap items-baseline gap-x-4 gap-y-1">
      <span aria-hidden className="font-mono text-xs text-faint">
        {no}
      </span>
      <h2 id={id} className="text-[28px] font-semibold tracking-[-0.03em] md:text-[34px]">
        {title}
      </h2>
      <p className="w-full text-sm text-muted md:ml-auto md:w-auto md:max-w-[420px] md:text-right">{lead}</p>
    </div>
  );
}
