export function SectionHeading({ no, id, title, lead }: { no: string; id: string; title: string; lead: string }) {
  return (
    <div className="mb-7">
      <div className="flex items-baseline gap-x-4">
        <span aria-hidden className="font-mono text-[12.5px] text-faint">
          {no}
        </span>
        <h2 id={id} className="text-[28px] font-semibold tracking-[-0.03em] md:text-[34px]">
          {title}
        </h2>
      </div>
      <p className="mt-1.5 max-w-[620px] text-[15px] text-muted">{lead}</p>
    </div>
  );
}
