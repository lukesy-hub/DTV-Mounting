import { VideoHero } from "@/components/Hero/VideoHero";
import { heroContent } from "@/data/heroContent";
import { business } from "@/data/business";
import { locations } from "@/data/locations";

export function Contact() {
  return (
    <>
      <VideoHero {...heroContent.contact} showScrollHint={false} />
      <section className="container-edge py-24">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="glass-surface rounded-lg p-8">
            <h3 className="text-sm text-muted">Headquarters</h3>
            <p className="mt-3 text-paper">
              {business.address.line1}
              <br />
              {business.address.line2}
            </p>
            <h3 className="mt-8 text-sm text-muted">Phone by region</h3>
            <ul className="mt-3 space-y-2">
              {locations.map((loc) => (
                <li key={loc.city}>
                  {loc.phone ? (
                    <a href={`tel:${loc.phone.replace(/[^\d]/g, "")}`} className="text-paper/85 hover:text-blue-light">
                      {loc.city} — {loc.phone}
                    </a>
                  ) : (
                    <a href="/quote" className="text-paper/85 hover:text-blue-light">
                      {loc.city} — Request a quote
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <form className="glass-surface flex flex-col gap-4 rounded-lg p-8" onSubmit={(e) => e.preventDefault()}>
            <h3 className="text-sm text-muted">Send a message</h3>
            <input placeholder="Name" className="rounded-lg border border-border bg-transparent px-4 py-3 text-sm text-paper outline-none focus:border-blue" />
            <input placeholder="Phone" className="rounded-lg border border-border bg-transparent px-4 py-3 text-sm text-paper outline-none focus:border-blue" />
            <textarea placeholder="What are you looking to install?" rows={4} className="rounded-lg border border-border bg-transparent px-4 py-3 text-sm text-paper outline-none focus:border-blue" />
            <button className="mt-2 rounded-full bg-blue px-6 py-3 text-sm font-medium text-white hover:bg-blue-deep">
              Send
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
