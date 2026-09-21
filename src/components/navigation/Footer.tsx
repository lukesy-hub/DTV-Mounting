import Link from "next/link";

const serviceLinks = [
  ["Flat TV Mounting", "/services/flat-tv-mounting"],
  ["Same-Day Mounting", "/services/same-day-tv-mounting"],
  ["Hide TV Wires", "/services/hide-tv-wires"],
  ["Soundbar Installation", "/services/soundbar-installation"],
];

const locationLinks = [
  ["Texas", "/locations/texas"],
  ["Georgia", "/locations/georgia"],
  ["Florida", "/locations/florida"],
  ["North Carolina", "/locations/north-carolina"],
];

export function Footer() {
  return (
    <footer className="border-t border-(--border) bg-(--background) px-6 py-12 text-(--foreground) md:px-10 md:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link
              href="/"
              className="font-display text-xl font-semibold tracking-[-0.04em]"
            >
              DTV Mounting
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-6 text-(--foreground-muted)">
              Professional TV mounting and finished entertainment setups
              designed around your space.
            </p>
            <Link
              href="/quote"
              className="mt-6 inline-flex text-xs font-semibold uppercase tracking-[0.18em] text-(--dtv-blue) transition-colors hover:text-(--dtv-blue-deep)"
            >
              Start your project <span className="ml-2">↗</span>
            </Link>
          </div>

          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-(--foreground-muted)">
              Services
            </p>
            <div className="mt-5 flex flex-col gap-3">
              {serviceLinks.map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  className="text-sm text-(--foreground-muted) transition-colors hover:text-(--foreground)"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-(--foreground-muted)">
              Service areas
            </p>
            <div className="mt-5 flex flex-col gap-3">
              {locationLinks.map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  className="text-sm text-(--foreground-muted) transition-colors hover:text-(--foreground)"
                >
                  {label}
                </Link>
              ))}
              <Link
                href="/locations"
                className="text-sm font-semibold text-(--dtv-blue)"
              >
                View all areas
              </Link>
            </div>
          </div>

          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-(--foreground-muted)">
              Explore
            </p>
            <div className="mt-5 flex flex-col gap-3">
              <Link
                href="/#about"
                className="text-sm text-(--foreground-muted) transition-colors hover:text-(--foreground)"
              >
                About DTV
              </Link>
              <Link
                href="/#work"
                className="text-sm text-(--foreground-muted) transition-colors hover:text-(--foreground)"
              >
                Our work
              </Link>
              <Link
                href="/quote"
                className="text-sm text-(--foreground-muted) transition-colors hover:text-(--foreground)"
              >
                Get a quote
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-(--border) pt-6 text-xs text-(--foreground-muted) md:flex-row md:items-center md:justify-between">
          <span>
            © {new Date().getFullYear()} DTV Mounting. All rights reserved.
          </span>
          <span>Professional installation. Precise finish.</span>
        </div>
      </div>
    </footer>
  );
}
