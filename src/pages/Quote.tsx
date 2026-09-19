import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { VideoHero } from "@/components/Hero/VideoHero";
import { heroContent } from "@/data/heroContent";
import { services } from "@/data/services";
import { business } from "@/data/business";

type FormState = {
  service: string;
  tvSize: string;
  location: string;
  wallType: string;
  addons: string[];
  name: string;
  email: string;
  phone: string;
  timing: string;
};

const initial: FormState = {
  service: "",
  tvSize: "",
  location: "",
  wallType: "",
  addons: [],
  name: "",
  email: "",
  phone: "",
  timing: "",
};

const STEP_TITLES = ["What do you need?", "Your setup", "Add-ons", "Your details", "Summary"];

export function Quote() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormState>(initial);
  const [submitted, setSubmitted] = useState(false);

  const next = () => setStep((s) => Math.min(s + 1, STEP_TITLES.length - 1));
  const back = () => setStep((s) => Math.max(s - 1, 0));
  const update = <K extends keyof FormState>(key: K, value: FormState[K]) =>
    setForm((f) => ({ ...f, [key]: value }));
  const toggleAddon = (slug: string) =>
    setForm((f) => ({
      ...f,
      addons: f.addons.includes(slug) ? f.addons.filter((a) => a !== slug) : [...f.addons, slug],
    }));

  return (
    <>
      <VideoHero {...heroContent.quote} showScrollHint={false} />

      <section id="wizard" className="container-edge py-24">
        <div className="mx-auto max-w-2xl">
          {/* Step progress */}
          <div className="mb-10 flex items-center gap-2">
            {STEP_TITLES.map((title, i) => (
              <div key={title} className="flex flex-1 flex-col gap-2">
                <div
                  className="h-1 rounded-full bg-white/10 transition-colors duration-300"
                  style={{ backgroundColor: i <= step ? "var(--color-brand-blue)" : undefined }}
                />
                <span className={`hidden text-[0.65rem] sm:block ${i === step ? "text-paper" : "text-muted"}`}>
                  {title}
                </span>
              </div>
            ))}
          </div>

          <div className="glass-surface min-h-[380px] rounded-lg p-8 sm:p-12">
            <AnimatePresence mode="wait">
              {submitted ? (
                <StepShell key="done">
                  <h2 className="font-display-serif text-3xl text-paper">Thanks — we've got it.</h2>
                  <p className="mt-4 max-w-md text-muted">
                    This is a frontend preview, so nothing was actually sent yet. Once connected to a form
                    endpoint or CRM, your team gets these details immediately, and the customer sees this
                    confirmation instantly.
                  </p>
                </StepShell>
              ) : (
                <>
                  {step === 0 && (
                    <StepShell key="0">
                      <h2 className="font-display-serif text-2xl text-paper">What do you need?</h2>
                      <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                        {services.map((s) => (
                          <OptionButton
                            key={s.slug}
                            active={form.service === s.slug}
                            onClick={() => update("service", s.slug)}
                          >
                            {s.title}
                          </OptionButton>
                        ))}
                      </div>
                    </StepShell>
                  )}

                  {step === 1 && (
                    <StepShell key="1">
                      <h2 className="font-display-serif text-2xl text-paper">Your setup</h2>
                      <div className="mt-6 space-y-6">
                        <Field label="TV size">
                          <div className="flex flex-wrap gap-2">
                            {["Under 43\"", "43\"–65\"", "65\"–75\"", "75\"+"].map((size) => (
                              <OptionButton key={size} active={form.tvSize === size} onClick={() => update("tvSize", size)} compact>
                                {size}
                              </OptionButton>
                            ))}
                          </div>
                        </Field>
                        <Field label="Install location">
                          <div className="flex flex-wrap gap-2">
                            {["Living room", "Bedroom", "Outdoor", "Commercial space", "Other"].map((loc) => (
                              <OptionButton key={loc} active={form.location === loc} onClick={() => update("location", loc)} compact>
                                {loc}
                              </OptionButton>
                            ))}
                          </div>
                        </Field>
                        <Field label="Wall type">
                          <div className="flex flex-wrap gap-2">
                            {["Drywall", "Brick", "Tile / Stone", "Not sure"].map((wall) => (
                              <OptionButton key={wall} active={form.wallType === wall} onClick={() => update("wallType", wall)} compact>
                                {wall}
                              </OptionButton>
                            ))}
                          </div>
                        </Field>
                      </div>
                    </StepShell>
                  )}

                  {step === 2 && (
                    <StepShell key="2">
                      <h2 className="font-display-serif text-2xl text-paper">Anything else?</h2>
                      <p className="mt-2 text-sm text-muted">Optional add-ons for this installation.</p>
                      <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                        {["hide-tv-wire", "soundbar-installation", "led-strip-light-installation", "gaming-console-mounting"].map(
                          (slug) => {
                            const s = services.find((sv) => sv.slug === slug)!;
                            return (
                              <OptionButton key={slug} active={form.addons.includes(slug)} onClick={() => toggleAddon(slug)}>
                                {s.title}
                              </OptionButton>
                            );
                          }
                        )}
                      </div>
                    </StepShell>
                  )}

                  {step === 3 && (
                    <StepShell key="3">
                      <h2 className="font-display-serif text-2xl text-paper">Your details</h2>
                      <div className="mt-6 space-y-4">
                        <TextField label="Name" value={form.name} onChange={(v) => update("name", v)} />
                        <TextField label="Email" type="email" value={form.email} onChange={(v) => update("email", v)} />
                        <TextField label="Phone" type="tel" value={form.phone} onChange={(v) => update("phone", v)} />
                        <Field label="Preferred timing">
                          <div className="flex flex-wrap gap-2">
                            {["As soon as possible", "This week", "This month", "Just exploring"].map((t) => (
                              <OptionButton key={t} active={form.timing === t} onClick={() => update("timing", t)} compact>
                                {t}
                              </OptionButton>
                            ))}
                          </div>
                        </Field>
                      </div>
                    </StepShell>
                  )}

                  {step === 4 && (
                    <StepShell key="4">
                      <h2 className="font-display-serif text-2xl text-paper">Review your request</h2>
                      <dl className="mt-6 space-y-3 text-sm">
                        <SummaryRow label="Service" value={services.find((s) => s.slug === form.service)?.title || "—"} />
                        <SummaryRow label="TV size" value={form.tvSize || "—"} />
                        <SummaryRow label="Location" value={form.location || "—"} />
                        <SummaryRow label="Wall type" value={form.wallType || "—"} />
                        <SummaryRow
                          label="Add-ons"
                          value={form.addons.length ? form.addons.map((a) => services.find((s) => s.slug === a)?.title).join(", ") : "None"}
                        />
                        <SummaryRow label="Contact" value={[form.name, form.email, form.phone].filter(Boolean).join(" · ") || "—"} />
                        <SummaryRow label="Timing" value={form.timing || "—"} />
                      </dl>
                      <p className="mt-6 rounded-lg border border-blue/30 bg-blue/10 p-4 text-sm text-paper/85">
                        Estimated price: <strong>Quote Required</strong> — {business.claims.startingPrice}, final
                        pricing confirmed after a quick review of your setup.
                      </p>
                    </StepShell>
                  )}
                </>
              )}
            </AnimatePresence>
          </div>

          {!submitted && (
            <div className="mt-6 flex items-center justify-between">
              <button
                onClick={back}
                disabled={step === 0}
                className="text-sm text-muted transition-colors hover:text-paper disabled:opacity-0"
              >
                ← Back
              </button>
              {step < STEP_TITLES.length - 1 ? (
                <button
                  onClick={next}
                  className="rounded-full bg-blue px-7 py-3 text-sm font-medium text-white hover:bg-blue-deep"
                >
                  Continue
                </button>
              ) : (
                <button
                  onClick={() => setSubmitted(true)}
                  className="rounded-full bg-blue px-7 py-3 text-sm font-medium text-white hover:bg-blue-deep"
                >
                  Submit Request
                </button>
              )}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

function StepShell({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 24 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -24 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <span className="mb-2 block text-xs text-muted">{label}</span>
      {children}
    </div>
  );
}

function OptionButton({
  children,
  active,
  onClick,
  compact,
}: {
  children: React.ReactNode;
  active: boolean;
  onClick: () => void;
  compact?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      className={`rounded-lg border px-4 text-left text-sm transition-colors ${compact ? "py-2" : "py-3"} ${
        active ? "border-blue bg-blue/15 text-paper" : "border-border text-muted hover:border-silver"
      }`}
    >
      {children}
    </button>
  );
}

function TextField({
  label,
  value,
  onChange,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs text-muted">{label}</span>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-lg border border-border bg-transparent px-4 py-3 text-sm text-paper outline-none transition-colors focus:border-blue"
      />
    </label>
  );
}

function SummaryRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between border-b border-border pb-2">
      <dt className="text-muted">{label}</dt>
      <dd className="text-right text-paper/90">{value}</dd>
    </div>
  );
}
