import { motion } from "framer-motion";
import { services } from "@/data/services";
import { ServiceCard } from "./ServiceCard";

export function Services() {
  return (
    <section id="services" className="container-edge py-24">
      <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <span className="eyebrow">What We Do</span>
          <h2 className="mt-3 max-w-xl font-display-serif text-[clamp(2rem,3.6vw,3rem)] text-paper">
            Eight services. One standard of finish.
          </h2>
        </div>
        <p className="max-w-sm text-sm text-muted">
          From a single flat mount to a full multi-screen wall — every job gets the same licensed, insured crew.
        </p>
      </div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }}
        className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4"
      >
        {services.map((service) => (
          <motion.div
            key={service.slug}
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <ServiceCard service={service} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
