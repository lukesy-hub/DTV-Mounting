import { useEffect, useState } from "react";
import clsx from "clsx";
import { business } from "@/data/business";
import { Button } from "@/components/ui/Button";
import { Phone } from "@/components/ui/Icons";
import { tel } from "@/lib/tel";

/** Mobile-only call and quote bar that slides in after the first screen. */
export function StickyCta() {
  const [show, setShow] = useState(false);
  useEffect(() => { const f = () => setShow(window.scrollY > 520); f(); window.addEventListener("scroll", f, { passive: true }); return () => window.removeEventListener("scroll", f); }, []);
  return (
    <div className={clsx("fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-line bg-surface p-3 pb-[max(12px,env(safe-area-inset-bottom))] shadow-card transition-transform duration-300 lg:hidden", show ? "translate-y-0" : "translate-y-full")}>
      <Button href={tel(business.phones.dallas)} variant="outline" className="!h-11"><Phone />Call</Button>
      <Button to="/quote" className="!h-11">Free quote</Button>
    </div>
  );
}
