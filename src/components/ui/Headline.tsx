import type { ElementType } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

/** Multi-line headline: each line rises out of a mask. The last line uses the serif italic accent. */
export function Headline({ lines, as: Tag = "h1", className }: { lines: string[]; as?: ElementType; className?: string }) {
  return (
    <Tag className={className}>
      {lines.map((line, i) => (
        <span key={line} className="block overflow-hidden pb-[0.12em] -mb-[0.12em]">
          <motion.span className={clsx("block", lines.length > 1 && i === lines.length - 1 && "serif-em")} initial={{ y: "108%" }} animate={{ y: 0 }} transition={{ duration: 0.95, delay: 0.1 + i * 0.09, ease: [0.16, 1, 0.3, 1] }}>{line}</motion.span>
        </span>
      ))}
    </Tag>
  );
}
