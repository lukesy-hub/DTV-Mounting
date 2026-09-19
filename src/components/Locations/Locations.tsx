import { motion } from "framer-motion";
import { locations } from "@/data/locations";

export function Locations() {
  return (
    <section className="container-edge py-24">
      <span className="eyebrow">Where We Work</span>
      <h2 className="mt-3 max-w-xl font-display-serif text-[clamp(2rem,3.6vw,3rem)] text-paper">
        Professional installation across six service areas.
      </h2>

      <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {locations.map((loc, i) => (
          <motion.div
            key={loc.city}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="glass-surface rounded-lg p-7"
          >
            <a href={`/locations/${loc.slug}`} className="text-lg text-paper hover:text-blue-light">
              {loc.city}
            </a>
            {loc.phone ? (
              <a href={`tel:${loc.phone.replace(/[^\d]/g, "")}`} className="mt-2 block text-blue-light">
                {loc.phone}
              </a>
            ) : (
              <a href="/quote" className="mt-2 block text-blue-light">
                Request a quote
              </a>
            )}
            {"note" in loc && loc.note && <p className="mt-3 text-xs text-muted">{loc.note}</p>}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
