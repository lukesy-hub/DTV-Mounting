import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PageHero } from "@/components/sections/Hero";
import { QuoteCTA } from "@/components/sections/QuoteCTA";
import { Plus } from "@/components/ui/Icons";
import { faqs } from "@/data/faqs";
import { heroContent } from "@/data/heroContent";
import { usePageMeta } from "@/hooks/usePageMeta";

export function Faq() {
  const h = heroContent.faq;
  usePageMeta("FAQ", h.support);
  const [open, setOpen] = useState<number | null>(0);
  return (
    <>
      <PageHero eyebrow={h.eyebrow} headline={h.headline} support={h.support} crumbs={[{ label: "Home", to: "/" }, { label: "FAQ" }]} />
      <section className="container-edge py-20">
        <div className="mx-auto max-w-3xl divide-y divide-line border-y border-line">
          {faqs.map((f, i) => (
            <div key={f.q}>
              <h2><button onClick={() => setOpen(open === i ? null : i)} aria-expanded={open === i} className="flex w-full items-center justify-between gap-6 py-6 text-left text-lg font-bold">
                {f.q}<Plus className={`shrink-0 text-brand transition-transform ${open === i ? "rotate-45" : ""}`} />
              </button></h2>
              <AnimatePresence initial={false}>
                {open === i && <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden"><p className="pb-6 text-muted">{f.a}</p></motion.div>}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>
      <QuoteCTA />
    </>
  );
}
