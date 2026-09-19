import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const CATEGORIES = ["All", "Residential", "Fireplace", "TV Walls", "Hidden Wires", "Outdoor", "Gaming", "Commercial"] as const;
type Category = (typeof CATEGORIES)[number];

type Item = { id: number; category: Exclude<Category, "All">; src: string; alt: string; tall?: boolean; wide?: boolean };

/**
 * Installation photography sourced from the public DTV Mounting gallery.
 */
const ITEMS: Item[] = [
  { id: 1, category: "Fireplace", src: "https://dtvmounting.com/wp-content/uploads/2024/02/2023-11-04.jpg", alt: "TV mounted above a fireplace", tall: true },
  { id: 2, category: "TV Walls", src: "https://dtvmounting.com/wp-content/uploads/2024/02/2023-10-29.jpg", alt: "Cleanly installed TV wall", wide: true },
  { id: 3, category: "Residential", src: "https://dtvmounting.com/wp-content/uploads/2024/02/2023-11-22-1.jpg", alt: "Mounted TV in a living room" },
  { id: 4, category: "Hidden Wires", src: "https://dtvmounting.com/wp-content/uploads/2024/02/722CFE20-9B21-42AC-8275-BEAB6CDEE585.jpeg", alt: "Wall mounted TV with concealed wires" },
  { id: 5, category: "Gaming", src: "https://dtvmounting.com/wp-content/uploads/2024/02/2023-10-29-2.jpg", alt: "TV and gaming setup", tall: true },
  { id: 6, category: "Outdoor", src: "https://dtvmounting.com/wp-content/uploads/2024/02/2023-10-29-3.jpg", alt: "Outdoor TV installation" },
  { id: 7, category: "Commercial", src: "https://dtvmounting.com/wp-content/uploads/2024/02/2023-10-29-4.jpg", alt: "Commercial TV installation", wide: true },
  { id: 8, category: "Residential", src: "https://dtvmounting.com/wp-content/uploads/2024/02/2023-11-04.jpg", alt: "Residential TV mounting" },
];

export function Gallery() {
  const [active, setActive] = useState<Category>("All");
  const [lightbox, setLightbox] = useState<Item | null>(null);

  const filtered = useMemo(
    () => (active === "All" ? ITEMS : ITEMS.filter((i) => i.category === active)),
    [active]
  );

  return (
    <section id="gallery" className="container-edge py-24">
      <div className="mb-10 flex flex-wrap items-center gap-2">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`rounded-full border px-4 py-2 text-sm transition-colors ${
              active === cat ? "border-blue bg-blue/15 text-paper" : "border-border text-muted hover:border-silver"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <motion.div layout className="grid auto-rows-[160px] grid-cols-2 gap-3 md:grid-cols-4">
        <AnimatePresence>
          {filtered.map((item) => (
            <motion.button
              layout
              key={item.id}
              data-cursor="view"
              onClick={() => setLightbox(item)}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative overflow-hidden rounded-lg text-left ${
                item.tall ? "row-span-2" : ""
              } ${item.wide ? "col-span-2" : ""}`}
            >
              <img src={item.src} alt={item.alt} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
              <div className="reeded-glass absolute inset-0 opacity-40" />
              <span className="absolute bottom-3 left-4 text-xs text-white/70">{item.category}</span>
            </motion.button>
          ))}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="fixed inset-0 z-[90] flex items-center justify-center bg-black/90 p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="aspect-video w-full max-w-3xl overflow-hidden rounded-lg bg-surface"
            >
              <img src={lightbox.src} alt={lightbox.alt} className="h-full w-full object-contain" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
