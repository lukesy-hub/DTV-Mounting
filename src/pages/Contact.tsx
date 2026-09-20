import { useState } from "react";
import { PageHero } from "@/components/sections/Hero";
import { Button } from "@/components/ui/Button";
import { Consent, TextField } from "@/components/ui/Field";
import { Phone } from "@/components/ui/Icons";
import { business } from "@/data/business";
import { heroContent } from "@/data/heroContent";
import { locations } from "@/data/locations";
import { initialLeadForm } from "@/data/formSchema";
import { usePageMeta } from "@/hooks/usePageMeta";
import { tel } from "@/lib/tel";
import { submitWebsiteLead } from "@/services/leadService";

export function Contact() {
  const h = heroContent.contact;
  usePageMeta("Contact", h.support);
  const [f, setF] = useState({ name: "", phone: "", email: "", message: "", consent: false });
  const [tried, setTried] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");
  const [error, setError] = useState("");
  const set = <K extends keyof typeof f>(k: K, v: (typeof f)[K]) => setF((x) => ({ ...x, [k]: v }));
  const err = {
    name: !f.name.trim() ? "Enter your name." : "", phone: f.phone.replace(/\D/g, "").length < 10 ? "Enter a 10-digit phone number." : "",
    email: !/^\S+@\S+\.\S+$/.test(f.email) ? "Enter a valid email address." : "", consent: !f.consent ? "Please confirm to continue." : "",
  };
  const invalid = Object.values(err).some(Boolean);

  async function send(e: React.FormEvent) {
    e.preventDefault(); setTried(true); if (invalid) return;
    setStatus("sending"); setError("");
    try { await submitWebsiteLead({ ...initialLeadForm, name: f.name, phone: f.phone, email: f.email, service: "General enquiry", notes: f.message, consent: f.consent }); setStatus("done"); }
    catch (x) { setError(x instanceof Error ? x.message : "Something went wrong. Please try again or call us."); setStatus("idle"); }
  }

  return (
    <>
      <PageHero eyebrow={h.eyebrow} headline={h.headline} support={h.support} crumbs={[{ label: "Home", to: "/" }, { label: "Contact" }]} />
      <section className="container-edge grid gap-8 py-20 lg:grid-cols-[1fr_1.2fr]">
        <div className="rounded-lg border border-line bg-surface p-8">
          <h2 className="text-sm font-extrabold uppercase tracking-[.12em] text-muted">Headquarters</h2>
          <p className="mt-3 font-semibold">{business.address.line1}<br />{business.address.line2}</p>
          <h2 className="mt-10 text-sm font-extrabold uppercase tracking-[.12em] text-muted">Call your local team</h2>
          <ul className="mt-4 divide-y divide-line">
            {locations.map((l) => <li key={l.city} className="flex items-center justify-between py-3 text-sm font-semibold"><span>{l.city}</span>{l.phone ? <a href={tel(l.phone)} className="inline-flex items-center gap-2 text-brand hover:underline"><Phone width={15} height={15} />{l.phone}</a> : <a href="/quote" className="text-brand hover:underline">Request a quote</a>}</li>)}
          </ul>
        </div>
        <form onSubmit={send} noValidate className="rounded-lg border border-line bg-surface p-8">
          {status === "done" ? (
            <div role="status" className="py-10 text-center"><h2 className="text-3xl">Thanks. <span className="serif-em">We've got it.</span></h2><p className="mx-auto mt-4 max-w-sm text-muted">Your local team will follow up shortly.</p></div>
          ) : (
            <div className="space-y-5">
              <h2 className="text-2xl">Send us a message</h2>
              <div className="grid gap-5 sm:grid-cols-2"><TextField label="Name" value={f.name} onChange={(v) => set("name", v)} autoComplete="name" error={tried ? err.name : ""} /><TextField label="Phone" type="tel" value={f.phone} onChange={(v) => set("phone", v)} autoComplete="tel" error={tried ? err.phone : ""} /></div>
              <TextField label="Email" type="email" value={f.email} onChange={(v) => set("email", v)} autoComplete="email" error={tried ? err.email : ""} />
              <TextField label="What are you looking to install?" textarea value={f.message} onChange={(v) => set("message", v)} />
              <Consent checked={f.consent} onChange={(v) => set("consent", v)} error={tried ? err.consent : ""} />
              {error && <p role="alert" className="text-sm font-semibold text-red-500">{error}</p>}
              <Button type="submit" disabled={status === "sending"} className="w-full">{status === "sending" ? "Sending…" : "Send message"}</Button>
            </div>
          )}
        </form>
      </section>
    </>
  );
}
