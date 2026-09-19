import { motion } from "framer-motion";
import { business } from "@/data/business";

/**
 * The brief supplies only the aggregate rating ("Excellent, Based on 507
 * reviews") — no verified individual review text, names, or star counts.
 * Per the accuracy rules, none of that is invented here. This component is
 * built to take a `reviews` array the moment real, verified reviews are
 * supplied, without needing rework.
 */
export function Reviews() {
  return (
    <section className="container-edge py-24">
      <div className="glass-surface flex flex-col items-center gap-4 rounded-lg py-16 text-center">
        <span className="eyebrow">Customer Reviews</span>
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display-serif text-[clamp(2.4rem,5vw,4rem)] text-paper"
        >
          {business.reviewSummary.label}
        </motion.span>
        <p className="text-muted">{business.reviewSummary.basis}</p>
      </div>
    </section>
  );
}
