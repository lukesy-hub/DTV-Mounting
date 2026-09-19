import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Service } from "@/data/services";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link to={`/services/${service.slug}`} className="group block" data-cursor="view">
      <motion.div
        whileHover={{ y: -6 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="glass-surface flex h-full flex-col justify-between rounded-lg p-7 transition-colors duration-300 group-hover:border-blue/50"
      >
        <div className="flex items-start justify-between">
          <span className="font-display-serif text-sm text-muted">{service.number}</span>
          <span className="text-lg text-muted transition-transform duration-300 group-hover:translate-x-1 group-hover:text-blue-light">
            →
          </span>
        </div>
        <div className="mt-10">
          <h3 className="text-xl text-paper">{service.title}</h3>
          <p className="mt-2 text-sm text-muted">{service.shortDescription}</p>
        </div>
      </motion.div>
    </Link>
  );
}
