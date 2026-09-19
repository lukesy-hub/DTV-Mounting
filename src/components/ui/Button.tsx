import { ReactNode, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import clsx from "clsx";

type ButtonProps = {
  children: ReactNode;
  to?: string;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "ghost" | "outline";
  className?: string;
};

/** Primary CTA system used everywhere: navbar, heroes, footer, cards. */
export function Button({ children, to, href, onClick, variant = "primary", className }: ButtonProps) {
  const ref = useRef<HTMLElement>(null);

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * 0.18}px, ${y * 0.3}px)`;
  };
  const handleLeave = () => {
    if (ref.current) ref.current.style.transform = "translate(0,0)";
  };

  const classes = clsx(
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors duration-300 will-change-transform",
    variant === "primary" && "bg-blue text-white hover:bg-blue-deep",
    variant === "outline" && "border border-border-strong text-paper hover:border-silver",
    variant === "ghost" && "text-paper/80 hover:text-paper",
    className
  );

  const content = (
    <motion.span
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      transition={{ type: "spring", stiffness: 300, damping: 18, mass: 0.4 }}
      style={{ display: "inline-flex" }}
    >
      {children}
    </motion.span>
  );

  if (to) {
    return (
      <Link to={to} className={classes}>
        {content}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className={classes}>
        {content}
      </a>
    );
  }
  return (
    <button onClick={onClick} className={classes}>
      {content}
    </button>
  );
}
