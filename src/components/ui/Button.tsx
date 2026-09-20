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
  const shine = variant === "primary" || variant === "light";
  const cls = clsx(shine && "relative overflow-hidden before:absolute before:inset-y-0 before:-left-1/2 before:w-1/3 before:-skew-x-[20deg] before:bg-white/25 before:transition-transform before:duration-700 hover:before:translate-x-[520%]", "inline-flex h-12 items-center justify-center gap-2 whitespace-nowrap rounded px-6 text-sm font-bold transition-colors disabled:cursor-not-allowed disabled:opacity-50", styles[variant], className);
  if (to) return <Link to={to} className={cls}><span className="relative inline-flex items-center gap-2">{children}</span></Link>;
  if (href) return <a href={href} className={cls}><span className="relative inline-flex items-center gap-2">{children}</span></a>;
  return <button type={type} onClick={onClick} disabled={disabled} className={cls}><span className="relative inline-flex items-center gap-2">{children}</span></button>;
}
