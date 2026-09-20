import type { ElementType } from "react";
import clsx from "clsx";

/** Multi-line headline. The last line is set in the serif italic accent, which is the site's one typographic signature. */
export function Headline({ lines, as: Tag = "h1", className }: { lines: string[]; as?: ElementType; className?: string }) {
  return (
    <Tag className={className}>
      {lines.map((line, i) => (
        <span key={line} className={clsx("block", lines.length > 1 && i === lines.length - 1 && "serif-em")}>{line}</span>
      ))}
    </Tag>
  );
}
