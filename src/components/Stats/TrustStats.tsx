import { motion } from "framer-motion";
import { business } from "@/data/business";

const cells = [
  { value: "15,000+", label: "TVs installed", span: "lg:row-span-2" },
  { value: "20+", label: "Years experience", span: "lg:col-start-2 lg:row-start-1" },
  { value: "10-yr", label: "No-fall warranty", span: "lg:col-start-3 lg:row-start-1" },
  { value: "100%", label: "Satisfaction guarantee", span: "lg:col-start-2 lg:row-start-2" },
  { value: business.claims.licensed, label: "", span: "lg:col-start-3 lg:row-start-2" },
];

export function TrustStats() {
  return (
    <section className="container-edge py-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="grid grid-cols-2 gap-3 lg:grid-cols-3 lg:grid-rows-2"
      >
        {cells.map((cell) => (
          <div
            key={cell.label + cell.value}
            className={`glass-surface flex min-w-0 flex-col justify-between rounded-lg p-6 lg:min-h-[120px] lg:p-8 ${cell.span}`}
          >
            <span className="font-display-serif text-[clamp(1.8rem,3vw,3.2rem)] text-paper">
              {cell.value}
            </span>
            {cell.label && <span className="mt-3 text-sm text-muted">{cell.label}</span>}
          </div>
        ))}
      </motion.div>
    </section>
  );
}
