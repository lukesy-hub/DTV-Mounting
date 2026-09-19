import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { business } from "@/data/business";

export function QuoteCTA() {
  return (
    <section className="container-edge py-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="glass-surface relative overflow-hidden rounded-lg px-8 py-16 text-center sm:px-16"
      >
        <div className="reeded-glass absolute inset-0 opacity-30" />
        <div className="relative">
          <span className="eyebrow">Ready When You Are</span>
          <h2 className="mx-auto mt-4 max-w-2xl font-display-serif text-[clamp(2rem,4vw,3.4rem)] text-paper">
            Let's get your TV on the wall.
          </h2>
          <p className="mx-auto mt-4 max-w-md text-muted">
            {business.claims.startingPrice} · {business.claims.sameDay} · {business.claims.warranty}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button to="/quote">Get Your Free Quote</Button>
            <Button href={`tel:${business.phones.dallas.replace(/[^\d]/g, "")}`} variant="outline">
              Call {business.phones.dallas}
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
