import type { ReactNode } from "react";
import clsx from "clsx";

export function TextField({ label, value, onChange, type = "text", error, autoComplete, textarea }: { label: string; value: string; onChange: (v: string) => void; type?: string; error?: string; autoComplete?: string; textarea?: boolean }) {
  const cls = clsx("mt-2 w-full rounded border bg-surface px-4 py-3 text-sm outline-none transition-colors focus:border-brand", error ? "border-red-500" : "border-line-strong");
  return (
    <label className="block text-sm font-bold">{label}
      {textarea
        ? <textarea rows={4} value={value} onChange={(e) => onChange(e.target.value)} aria-invalid={!!error} className={cls} />
        : <input type={type} value={value} autoComplete={autoComplete} onChange={(e) => onChange(e.target.value)} aria-invalid={!!error} className={cls} />}
      {error && <span role="alert" className="mt-1 block text-xs font-semibold text-red-500">{error}</span>}
    </label>
  );
}

export function Chip({ active, onClick, children }: { active: boolean; onClick: () => void; children: ReactNode }) {
  return <button type="button" aria-pressed={active} onClick={onClick} className={clsx("rounded border px-4 py-2.5 text-left text-sm font-semibold transition-colors", active ? "border-brand bg-brand-soft text-brand" : "border-line-strong text-fg hover:border-fg")}>{children}</button>;
}

export function Consent({ checked, onChange, error }: { checked: boolean; onChange: (v: boolean) => void; error?: string }) {
  return (
    <div>
      <label className="flex items-start gap-3 text-sm text-muted"><input type="checkbox" checked={checked} onChange={(e) => onChange(e.target.checked)} className="mt-1 h-4 w-4 accent-[var(--brand-btn)]" />I agree to be contacted about this request by phone, text or email.</label>
      {error && <span role="alert" className="mt-1 block text-xs font-semibold text-red-500">{error}</span>}
    </div>
  );
}
