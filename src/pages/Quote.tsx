import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";
import { PageHero } from "@/components/sections/Hero";
import { Button } from "@/components/ui/Button";
import { Chip, Consent, TextField } from "@/components/ui/Field";
import { Check } from "@/components/ui/Icons";
import { business } from "@/data/business";
import { formFields } from "@/data/formSchema";
import { heroContent } from "@/data/heroContent";
import { services } from "@/data/services";
import { usePageMeta } from "@/hooks/usePageMeta";
import { tel } from "@/lib/tel";
import { submitWebsiteLead } from "@/services/leadService";

type F = { service: string; tvSize: string; wallType: string; room: string; addons: string[]; name: string; email: string; phone: string; city: string; timing: string; consent: boolean };
const initial: F = { service: "", tvSize: "", wallType: "", room: "", addons: [], name: "", email: "", phone: "", city: "", timing: "", consent: false };
const STEPS = ["Service", "Your setup", "Add-ons", "Your details", "Review"];
const opts = (id: string) => formFields.find((f) => f.id === id)?.options ?? [];
const ADDONS = ["hide-tv-wire", "soundbar-installation", "led-strip-light-installation", "gaming-console-mounting"];
const title = (slug: string) => services.find((s) => s.slug === slug)?.title ?? "";

export function Quote() {
  const h = heroContent.quote;
  usePageMeta("Get a Free Quote", h.support);
  const [step, setStep] = useState(0);
  const [f, setF] = useState<F>(initial);
  const [tried, setTried] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");
  const [error, setError] = useState("");
  const set = <K extends keyof F>(k: K, v: F[K]) => setF((x) => ({ ...x, [k]: v }));

  const err = {
    name: !f.name.trim() ? "Enter your name." : "", email: !/^\S+@\S+\.\S+$/.test(f.email) ? "Enter a valid email address." : "",
    phone: f.phone.replace(/\D/g, "").length < 10 ? "Enter a 10-digit phone number." : "", city: !f.city.trim() ? "Enter the installation city." : "",
    consent: !f.consent ? "Please confirm to continue." : "",
  };
  const valid = [!!f.service, !!f.tvSize && !!f.wallType, true, !Object.values(err).some(Boolean), true][step];

  const next = () => { if (!valid) return setTried(true); setTried(false); setStep((s) => Math.min(s + 1, 4)); };
  async function submit() {
    setStatus("sending"); setError("");
    const notes = [f.room && `Room: ${f.room}`, f.addons.length && `Add-ons: ${f.addons.map(title).join(", ")}`, f.timing && `Timing: ${f.timing}`].filter(Boolean).join(" | ");
    try {
      await submitWebsiteLead({ name: f.name, phone: f.phone, email: f.email, service: title(f.service), tvSize: f.tvSize, wallType: f.wallType, location: f.city, preferredDate: "", notes, consent: f.consent });
      setStatus("done");
    } catch (e) { setError(e instanceof Error ? e.message : "Something went wrong. Please try again or call us."); setStatus("idle"); }
  }

  const Group = ({ label, values, field }: { label: string; values: string[]; field: "tvSize" | "wallType" | "room" | "timing" }) => (
    <fieldset><legend className="mb-3 text-sm font-bold">{label}</legend><div className="flex flex-wrap gap-2">{values.map((v) => <Chip key={v} active={f[field] === v} onClick={() => set(field, v)}>{v}</Chip>)}</div></fieldset>
  );
  const rows: [string, string][] = [["Service", title(f.service) || "—"], ["TV size", f.tvSize || "—"], ["Wall type", f.wallType || "—"], ["Room", f.room || "—"], ["Add-ons", f.addons.map(title).join(", ") || "None"], ["City", f.city], ["Contact", `${f.name} · ${f.email} · ${f.phone}`], ["Timing", f.timing || "—"]];

  return (
    <>
      <PageHero eyebrow={h.eyebrow} headline={h.headline} support={h.support} crumbs={[{ label: "Home", to: "/" }, { label: "Get a quote" }]} />
      <section id="wizard" className="container-edge grid gap-10 py-16 lg:grid-cols-[260px_1fr]">
        <aside className="space-y-8">
          <ol className="flex gap-2 lg:block lg:space-y-1" aria-label="Progress">
            {STEPS.map((s, i) => (
              <li key={s} aria-current={i === step ? "step" : undefined} className={clsx("flex flex-1 items-center gap-3 rounded px-3 py-2 text-sm font-bold lg:flex-none", i === step ? "bg-brand-soft text-brand" : i < step ? "text-fg" : "text-muted")}>
                <span className={clsx("grid h-6 w-6 shrink-0 place-items-center rounded-full text-xs", i < step ? "bg-brand-btn text-white" : "border border-current")}>{i < step ? <Check width={13} height={13} /> : i + 1}</span><span className="hidden lg:inline">{s}</span>
              </li>
            ))}
          </ol>
          <div className="hidden rounded-lg border border-line bg-surface p-5 text-sm lg:block"><p className="font-bold">Prefer to talk?</p><a href={tel(business.phones.dallas)} className="mt-1 block text-brand hover:underline">{business.phones.dallas}</a><p className="mt-3 text-xs text-muted">{business.claims.startingPrice} · {business.claims.sameDay}</p></div>
        </aside>

        <div className="min-h-[420px] rounded-lg border border-line bg-surface p-6 shadow-card sm:p-10">
          {status === "done" ? (
            <div role="status" className="py-12 text-center"><span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-brand-soft text-brand"><Check width={26} height={26} /></span>
              <h2 className="mt-6 text-3xl">Request received. <span className="serif-em">Thank you.</span></h2><p className="mx-auto mt-4 max-w-md text-muted">Our team will review your details and follow up to confirm your quote and a time that suits you.</p><Button to="/" variant="outline" className="mt-8">Back to home</Button></div>
          ) : (
            <>
              <AnimatePresence mode="wait">
                <motion.div key={step} initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -16 }} transition={{ duration: 0.25 }} className="space-y-7">
                  <h2 className="text-2xl">{["What do you need?", "Tell us about your setup", "Anything else?", "Your details", "Review your request"][step]}</h2>
                  {step === 0 && <div className="grid gap-3 sm:grid-cols-2">{services.map((s) => <Chip key={s.slug} active={f.service === s.slug} onClick={() => set("service", s.slug)}>{s.title}</Chip>)}</div>}
                  {step === 1 && <><Group label="TV size" values={opts("tvSize")} field="tvSize" /><Group label="Wall type" values={opts("wallType")} field="wallType" /><Group label="Room (optional)" values={["Living room", "Bedroom", "Outdoor", "Commercial space", "Other"]} field="room" /></>}
                  {step === 2 && <div className="grid gap-3 sm:grid-cols-2">{ADDONS.map((a) => <Chip key={a} active={f.addons.includes(a)} onClick={() => set("addons", f.addons.includes(a) ? f.addons.filter((x) => x !== a) : [...f.addons, a])}>{title(a)}</Chip>)}</div>}
                  {step === 3 && <div className="space-y-5">
                    <div className="grid gap-5 sm:grid-cols-2"><TextField label="Name" value={f.name} onChange={(v) => set("name", v)} autoComplete="name" error={tried ? err.name : ""} /><TextField label="Installation city" value={f.city} onChange={(v) => set("city", v)} error={tried ? err.city : ""} /></div>
                    <div className="grid gap-5 sm:grid-cols-2"><TextField label="Email" type="email" value={f.email} onChange={(v) => set("email", v)} autoComplete="email" error={tried ? err.email : ""} /><TextField label="Phone" type="tel" value={f.phone} onChange={(v) => set("phone", v)} autoComplete="tel" error={tried ? err.phone : ""} /></div>
                    <Group label="Preferred timing (optional)" values={["As soon as possible", "This week", "This month", "Just exploring"]} field="timing" />
                    <Consent checked={f.consent} onChange={(v) => set("consent", v)} error={tried ? err.consent : ""} /></div>}
                  {step === 4 && <><dl className="divide-y divide-line text-sm">{rows.map(([k, v]) => <div key={k} className="flex justify-between gap-6 py-3"><dt className="text-muted">{k}</dt><dd className="text-right font-semibold">{v}</dd></div>)}</dl>
                    <p className="rounded bg-brand-soft p-4 text-sm font-semibold text-brand">Estimated price: quote required. {business.claims.startingPrice}, with final pricing confirmed after a quick review of your setup.</p></>}
                </motion.div>
              </AnimatePresence>
              {tried && !valid && step < 3 && <p role="alert" className="mt-4 text-sm font-semibold text-red-500">{step === 0 ? "Choose a service to continue." : "Choose a TV size and wall type to continue."}</p>}
              {error && <p role="alert" className="mt-4 text-sm font-semibold text-red-500">{error}</p>}
              <div className="mt-10 flex items-center justify-between border-t border-line pt-6">
                <button onClick={() => { setTried(false); setStep((s) => Math.max(s - 1, 0)); }} disabled={step === 0} className="text-sm font-bold text-muted hover:text-fg disabled:invisible">← Back</button>
                {step < 4 ? <Button onClick={next}>Continue</Button> : <Button onClick={submit} disabled={status === "sending"}>{status === "sending" ? "Sending…" : "Submit request"}</Button>}
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}
