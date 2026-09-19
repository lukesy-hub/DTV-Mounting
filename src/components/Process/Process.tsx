const steps = [
  { n: "01", title: "Tell Us What You Need", body: "Answer a few questions about your TV and space." },
  { n: "02", title: "Get Your Quote", body: "See what's involved before you commit to anything." },
  { n: "03", title: "Choose Your Time", body: "Pick a slot that works — same-day is often available." },
  { n: "04", title: "Our Technician Arrives", body: "A licensed, insured pro handles the install." },
  { n: "05", title: "Enjoy Your Setup", body: "Clean lines, hidden wires, backed by a 10-year warranty." },
];

export function Process() {
  return (
    <section className="relative overflow-hidden bg-surface py-24">
      <div className="container-edge mb-12">
        <span className="eyebrow">How It Works</span>
        <h2 className="mt-3 font-display-serif text-[clamp(2rem,3.6vw,3rem)] text-paper">
          From quote to perfect setup.
        </h2>
      </div>

      <div className="container-edge grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {steps.map((step) => (
          <div
            key={step.n}
            className="glass-surface flex min-w-0 min-h-[230px] flex-col justify-between rounded-lg p-8"
          >
            <span className="font-display-serif text-3xl text-blue-light">{step.n}</span>
            <div className="mt-16">
              <h3 className="text-xl text-paper">{step.title}</h3>
              <p className="mt-2 text-sm text-muted">{step.body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
