import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";

type Props = {
  children: ReactNode; to?: string; href?: string; onClick?: () => void; type?: "button" | "submit"; disabled?: boolean;
  variant?: "primary" | "outline" | "light" | "outline-light"; className?: string;
};

const styles = {
  primary: "bg-brand-btn text-white hover:bg-brand-deep",
  outline: "border border-line-strong text-fg hover:border-fg",
  light: "bg-white text-[#0b1020] hover:bg-[#e8ecff]",
  "outline-light": "border border-white/40 text-white hover:bg-white/10",
} as const;

export function Button({ children, to, href, onClick, type = "button", disabled, variant = "primary", className }: Props) {
  const cls = clsx("inline-flex h-12 items-center justify-center gap-2 whitespace-nowrap rounded px-6 text-sm font-bold transition-colors disabled:cursor-not-allowed disabled:opacity-50", styles[variant], className);
  if (to) return <Link to={to} className={cls}>{children}</Link>;
  if (href) return <a href={href} className={cls}>{children}</a>;
  return <button type={type} onClick={onClick} disabled={disabled} className={cls}>{children}</button>;
}
