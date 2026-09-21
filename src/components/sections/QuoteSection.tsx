"use client";

import { ArrowUpRight, CheckCircle2, ShieldCheck } from "lucide-react";
import { FormEvent, useState } from "react";

const fieldClassName =
  "w-full border-b border-white/15 bg-transparent px-0 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/35 focus:border-(--dtv-blue-soft)";

export function QuoteSection() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section
      id="quote"
      className="bg-(--dtv-black) px-6 py-28 text-white md:py-40"
    >
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
        <div className="flex flex-col justify-between">
          <div>
            <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.25em] text-white/40">
              Start your project
            </p>

            <h2 className="max-w-xl font-display text-[clamp(3.5rem,7vw,7rem)] font-semibold leading-[0.88] tracking-[-0.07em]">
              Let&apos;s make the wall feel finished.
            </h2>

            <p className="mt-8 max-w-md text-base leading-7 text-white/50">
              Tell us what you are building. We&apos;ll use the details to
              understand the space, recommend the right service, and prepare
              your estimate.
            </p>
          </div>

          <div className="mt-12 flex items-start gap-3 border-t border-white/10 pt-5 lg:mt-20">
            <ShieldCheck
              size={18}
              className="mt-0.5 shrink-0 text-(--dtv-blue-soft)"
            />
            <p className="max-w-xs text-xs leading-5 text-white/45">
              Every installation is planned around the wall, viewing position,
              hardware, and finished room.
            </p>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-4xl border border-white/10 bg-white/4.5 p-6 backdrop-blur-xl md:p-9">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-(--dtv-blue) opacity-25 blur-[110px]"
          />

          {submitted ? (
            <div className="relative flex min-h-135 flex-col justify-between">
              <div>
                <CheckCircle2 size={34} className="text-(--dtv-blue-soft)" />
                <p className="mt-8 text-[11px] font-semibold uppercase tracking-[0.25em] text-white/40">
                  Project brief captured
                </p>
                <h3 className="mt-4 max-w-md font-display text-4xl font-semibold leading-[0.95] tracking-tighter md:text-5xl">
                  You&apos;re one step closer to a finished setup.
                </h3>
                <p className="mt-6 max-w-md text-sm leading-7 text-white/50">
                  Your project details are ready for the DTV team to review.
                  We&apos;ll follow up with the next step for your estimate.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="w-fit text-xs font-semibold uppercase tracking-[0.18em] text-white/60 transition-colors hover:text-white"
              >
                Edit project details
              </button>
            </div>
          ) : (
            <form className="relative" onSubmit={handleSubmit}>
              <div className="mb-9">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/35">
                  Project details
                </p>
                <p className="mt-2 text-sm text-white/55">
                  A few details help us point you in the right direction.
                </p>
              </div>

              <div className="grid gap-7 md:grid-cols-2">
                <label className="block">
                  <span className="text-xs font-medium text-white/65">
                    Your name
                  </span>
                  <input
                    className={fieldClassName}
                    name="name"
                    type="text"
                    placeholder="Jane Smith"
                    required
                  />
                </label>

                <label className="block">
                  <span className="text-xs font-medium text-white/65">
                    Phone number
                  </span>
                  <input
                    className={fieldClassName}
                    name="phone"
                    type="tel"
                    placeholder="(555) 555-5555"
                    required
                  />
                </label>

                <label className="block">
                  <span className="text-xs font-medium text-white/65">
                    Email address
                  </span>
                  <input
                    className={fieldClassName}
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                  />
                </label>

                <label className="block">
                  <span className="text-xs font-medium text-white/65">
                    ZIP code
                  </span>
                  <input
                    className={fieldClassName}
                    name="zip"
                    inputMode="numeric"
                    placeholder="30309"
                    required
                  />
                </label>

                <label className="block">
                  <span className="text-xs font-medium text-white/65">
                    What do you need?
                  </span>
                  <select
                    className={`${fieldClassName} appearance-none`}
                    name="service"
                    defaultValue=""
                    required
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    <option value="mounting">TV mounting</option>
                    <option value="wires">Hidden wires</option>
                    <option value="soundbar">Soundbar installation</option>
                    <option value="complete">
                      Complete entertainment setup
                    </option>
                  </select>
                </label>

                <label className="block">
                  <span className="text-xs font-medium text-white/65">
                    TV size
                  </span>
                  <select
                    className={`${fieldClassName} appearance-none`}
                    name="tv-size"
                    defaultValue=""
                    required
                  >
                    <option value="" disabled>
                      Select TV size
                    </option>
                    <option value="under-55">Under 55 inches</option>
                    <option value="55-75">55 to 75 inches</option>
                    <option value="76-85">76 to 85 inches</option>
                    <option value="over-85">Over 85 inches</option>
                  </select>
                </label>
              </div>

              <label className="mt-7 block">
                <span className="text-xs font-medium text-white/65">
                  Tell us about the space
                </span>
                <textarea
                  className={`${fieldClassName} min-h-24 resize-y`}
                  name="message"
                  placeholder="Wall type, fireplace, soundbar, wire concealment, or anything else we should know."
                  rows={3}
                />
              </label>

              <button
                type="submit"
                className="group mt-9 inline-flex items-center gap-3 rounded-full bg-(--dtv-blue) px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-(--dtv-blue-deep) hover:shadow-[0_18px_55px_rgba(42,53,143,0.35)]"
              >
                Prepare my quote
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
