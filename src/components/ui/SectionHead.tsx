import type { ReactNode } from "react";
export function SectionHead({ eyebrow, title, em, children }: { eyebrow: string; title: string; em?: string; children?: ReactNode }) {
  return (
    <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
      <div className="max-w-3xl">
        <span className="eyebrow">{eyebrow}</span>
        <h2 className="mt-4 text-[clamp(1.9rem,3.6vw,2.9rem)]">{title}{em && <span className="serif-em block">{em}</span>}</h2>
      </div>
      {children && <div className="max-w-sm text-sm text-muted">{children}</div>}
    </div>
  );
}
