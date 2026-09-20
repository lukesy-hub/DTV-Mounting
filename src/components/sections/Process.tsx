import { SectionHead } from "@/components/ui/SectionHead";
import { Reveal } from "@/components/ui/Reveal";

const steps = [
  { n: "01", title: "Tell us what you need", body: "Answer a few questions about your TV and space." },
  { n: "02", title: "Get your quote", body: "See what's involved before you commit to anything." },
  { n: "03", title: "Choose your time", body: "Pick a slot that works. Same-day is often available." },
  { n: "04", title: "Your technician arrives", body: "A licensed, insured pro handles the install." },
  { n: "05", title: "Enjoy your setup", body: "Clean lines, hidden wires, backed by a 10-year warranty." },
];

export function Process() {
  return (
    <section className="bg-bg py-20 lg:py-24">
      <div className="container-edge">
        <SectionHead eyebrow="How it works" title="From quote to" em="finished install." />
        <Reveal>
          <ol className="relative grid gap-10 md:grid-cols-5 md:gap-6">
            <span aria-hidden className="absolute left-[19px] top-2 hidden h-px w-[calc(100%-40px)] bg-line-strong md:block" style={{ left: 20 }} />
            {steps.map((s) => (
              <li key={s.n} className="relative flex gap-5 md:block">
                <span className="relative z-10 grid h-10 w-10 shrink-0 place-items-center rounded-full border-2 border-brand bg-bg text-sm font-extrabold text-brand">{s.n}</span>
                <div className="md:mt-6"><h3 className="text-lg">{s.title}</h3><p className="mt-2 text-sm text-muted">{s.body}</p></div>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
