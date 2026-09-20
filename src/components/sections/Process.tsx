import { motion } from "framer-motion";
import { SectionHead } from "@/components/ui/SectionHead";

const steps = [
  { n: "01", title: "Tell us what you need", body: "Answer a few questions about your TV and space." },
  { n: "02", title: "Get your quote", body: "See what's involved before you commit to anything." },
  { n: "03", title: "Choose your time", body: "Pick a slot that works. Same-day is often available." },
  { n: "04", title: "Your technician arrives", body: "A licensed, insured pro handles the install." },
  { n: "05", title: "Enjoy your setup", body: "Clean lines, hidden wires, backed by a 10-year warranty." },
];
const ease = [0.16, 1, 0.3, 1] as const;

export function Process() {
  return (
    <section className="bg-bg py-20 lg:py-24">
      <div className="container-edge">
        <SectionHead eyebrow="How it works" title="From quote to" em="finished install." />
        <motion.ol initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={{ show: { transition: { staggerChildren: 0.16 } } }} className="relative grid gap-10 md:grid-cols-5 md:gap-6">
          <motion.span aria-hidden variants={{ hidden: { scaleX: 0 }, show: { scaleX: 1, transition: { duration: 1.1, ease } } }} style={{ transformOrigin: "left", left: 20 }} className="absolute top-5 hidden h-px w-[calc(100%-40px)] bg-brand md:block" />
          {steps.map((s) => (
            <motion.li key={s.n} variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } } }} className="relative flex gap-5 md:block">
              <span className="relative z-10 grid h-10 w-10 shrink-0 place-items-center rounded-full border-2 border-brand bg-bg text-sm font-extrabold text-brand">{s.n}</span>
              <div className="md:mt-6"><h3 className="text-lg">{s.title}</h3><p className="mt-2 text-sm text-muted">{s.body}</p></div>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}
