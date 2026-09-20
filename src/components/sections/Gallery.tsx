import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";
import { Close } from "@/components/ui/Icons";

const CATEGORIES = ["All", "Residential", "Fireplace", "TV Walls", "Hidden Wires", "Outdoor", "Gaming", "Commercial"] as const;
type Category = (typeof CATEGORIES)[number];
type Item = { id: number; category: Exclude<Category, "All">; src: string; alt: string; tall?: boolean; wide?: boolean };
const U = "https://dtvmounting.com/wp-content/uploads/2024/02/";
const ITEMS: Item[] = [
  { id: 1, category: "Fireplace", src: `${U}2023-11-04.jpg`, alt: "TV mounted above a fireplace", tall: true },
  { id: 2, category: "TV Walls", src: `${U}2023-10-29.jpg`, alt: "Cleanly installed TV wall", wide: true },
  { id: 3, category: "Residential", src: `${U}2023-11-22-1.jpg`, alt: "Mounted TV in a living room" },
  { id: 4, category: "Hidden Wires", src: `${U}722CFE20-9B21-42AC-8275-BEAB6CDEE585.jpeg`, alt: "Wall mounted TV with concealed wires" },
  { id: 5, category: "Gaming", src: `${U}2023-10-29-2.jpg`, alt: "TV and gaming setup", tall: true },
  { id: 6, category: "Outdoor", src: `${U}2023-10-29-3.jpg`, alt: "Outdoor TV installation" },
  { id: 7, category: "Commercial", src: `${U}2023-10-29-4.jpg`, alt: "Commercial TV installation", wide: true },
  { id: 8, category: "Residential", src: `${U}2023-11-04.jpg`, alt: "Residential TV mounting" },
];

export function Gallery({ tight = false }: { tight?: boolean }) {
  const [active, setActive] = useState<Category>("All");
  const [open, setOpen] = useState<Item | null>(null);
  const shown = useMemo(() => (active === "All" ? ITEMS : ITEMS.filter((i) => i.category === active)), [active]);
  useEffect(() => { const k = (e: KeyboardEvent) => e.key === "Escape" && setOpen(null); window.addEventListener("keydown", k); return () => window.removeEventListener("keydown", k); }, []);

  return (
    <section id="gallery" className={clsx("container-edge pb-20", tight ? "pt-0" : "pt-16")}>
      <div role="tablist" aria-label="Filter installations" className="mb-10 flex flex-wrap gap-x-7 gap-y-2 border-b border-line">
        {CATEGORIES.map((c) => (
          <button key={c} role="tab" aria-selected={active === c} onClick={() => setActive(c)} className={clsx("-mb-px border-b-2 pb-3 text-sm font-bold transition-colors", active === c ? "border-brand text-brand" : "border-transparent text-muted hover:text-fg")}>{c}</button>
        ))}
      </div>
      <motion.div layout className="grid auto-rows-[180px] grid-cols-2 gap-4 md:grid-cols-4">
        <AnimatePresence>
          {shown.map((i) => (
            <motion.button layout key={i.id} onClick={() => setOpen(i)} aria-label={`View: ${i.alt}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.35 }}
              className={clsx("group relative overflow-hidden rounded-lg bg-surface2 text-left", i.tall && "row-span-2", i.wide && "col-span-2")}>
              <img src={i.src} alt={i.alt} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <span className="absolute bottom-3 left-3 rounded bg-surface px-2.5 py-1 text-xs font-bold shadow-card">{i.category}</span>
            </motion.button>
          ))}
        </AnimatePresence>
      </motion.div>
      <AnimatePresence>
        {open && (
          <motion.div role="dialog" aria-modal="true" aria-label={open.alt} className="fixed inset-0 z-[90] grid place-items-center bg-black/85 p-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setOpen(null)}>
            <button aria-label="Close image" className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded bg-white text-black"><Close /></button>
            <img src={open.src} alt={open.alt} className="max-h-[85vh] max-w-full rounded-lg object-contain" />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
