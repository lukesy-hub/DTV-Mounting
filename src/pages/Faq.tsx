import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { VideoHero } from "@/components/Hero/VideoHero";
import { QuoteCTA } from "@/components/QuoteCTA/QuoteCTA";
import { heroContent } from "@/data/heroContent";
import { business } from "@/data/business";

const faqs = [
  { q: "How much does TV mounting cost?", a: `Pricing ${business.claims.startingPrice.toLowerCase()}, with the exact quote depending on your TV, wall, and any add-ons like wire concealment.` },
  { q: "Do you offer same-day installation?", a: `Yes — ${business.claims.sameDay.toLowerCase()} is available.` },
  { q: "Are you licensed and insured?", a: business.claims.licensed },
  { q: "What warranty comes with the installation?", a: `Every installation is backed by a ${business.claims.warranty.toLowerCase()}.` },
  { q: "What if I find a lower price elsewhere?", a: business.claims.priceMatch },
  { q: "What payment methods do you accept?", a: `We accept ${business.paymentMethods.join(", ")}.` },
  { q: "Where do you offer service?", a: "Dallas, Houston, Austin, San Antonio, Florida, and Atlanta." },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <>
      <VideoHero {...heroContent.faq} showScrollHint={false} />
      <section className="container-edge py-24">
        <div className="mx-auto max-w-2xl divide-y divide-border">
          {faqs.map((item, i) => (
            <div key={item.q} className="py-5">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between text-left"
              >
                <span className="text-paper">{item.q}</span>
                <span className="text-xl text-muted">{open === i ? "−" : "+"}</span>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="pt-3 text-sm text-muted">{item.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>
      <QuoteCTA />
    </>
  );
}
