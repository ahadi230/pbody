import { useState } from "react";
import { Heart, Briefcase, PartyPopper, Trees, Check } from "lucide-react";
import eventsImg from "@/assets/events.jpg";

const types = [
  { icon: Heart, t: "Weddings & Receptions", d: "Ceremony & reception space with scenic golf course backdrop." },
  { icon: PartyPopper, t: "Private Parties", d: "Birthdays, anniversaries, reunions — your room, your night." },
  { icon: Briefcase, t: "Corporate Events", d: "Meetings, holiday parties, retreats with full-service catering." },
  { icon: Trees, t: "Golf Outings", d: "Pair your tournament or outing with food worth talking about." },
];

const packages = [
  { name: "Casual Gathering", from: "$25/person", features: ["Buffet-style menu", "Two house sides", "Tea & soft drinks", "Up to 40 guests"] },
  { name: "Signature Event", from: "$45/person", features: ["Plated 3-course menu", "Private dining room", "Dedicated event captain", "Up to 100 guests"], featured: true },
  { name: "Full Venue Wedding", from: "Custom quote", features: ["Indoor + outdoor space", "Custom menu design", "Linens & setup included", "Up to 200 guests"] },
];

export default function Events() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <div>
      <section className="relative isolate overflow-hidden">
        <img src={eventsImg} alt="Outdoor event setup at Clarksville Country Club" loading="lazy" width={1600} height={1067} className="absolute inset-0 -z-10 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-primary/65" />
        <div className="mx-auto max-w-4xl px-4 py-24 text-center text-primary-foreground sm:px-6 lg:px-8 lg:py-32">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">Events & Catering</p>
          <h1 className="mt-3 font-display text-5xl font-bold sm:text-6xl text-balance">Celebrate on the greens.</h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-primary-foreground/90">
            From intimate rehearsal dinners to full-venue weddings — host a beautiful event with the country club setting and the comfort-food kitchen Clarksville loves.
          </p>
          <a href="#quote" className="mt-8 inline-flex rounded-full bg-accent px-7 py-3 font-semibold text-accent-foreground shadow-warm hover:scale-[1.02] transition">
            Request Event Quote
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <h2 className="font-display text-4xl font-bold text-balance">What we host</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {types.map((t) => (
            <div key={t.t} className="rounded-2xl border border-border bg-card p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-warm">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <t.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-xl font-semibold">{t.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{t.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-muted/40">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl font-bold text-balance">Event packages</h2>
          <p className="mt-2 max-w-2xl text-muted-foreground">Starting points — every event gets a custom quote tailored to your guest count and menu preferences.</p>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {packages.map((p) => (
              <div key={p.name} className={`rounded-3xl p-7 shadow-soft ${p.featured ? "bg-primary text-primary-foreground ring-2 ring-accent" : "bg-card"}`}>
                {p.featured && <div className="mb-3 inline-block rounded-full bg-accent px-3 py-1 text-xs font-bold uppercase tracking-wider text-accent-foreground">Most Popular</div>}
                <h3 className="font-display text-2xl font-semibold">{p.name}</h3>
                <p className={`mt-1 font-display text-3xl font-bold ${p.featured ? "text-accent" : "text-primary"}`}>{p.from}</p>
                <ul className="mt-5 space-y-3 text-sm">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <Check className={`mt-0.5 h-4 w-4 shrink-0 ${p.featured ? "text-accent" : "text-primary"}`} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="quote" className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-border bg-card p-8 shadow-soft sm:p-10">
          <h2 className="font-display text-3xl font-bold sm:text-4xl text-balance">Request an event quote</h2>
          <p className="mt-2 text-muted-foreground">Tell us about your event and we'll be in touch within 1 business day.</p>

          {submitted ? (
            <div className="mt-8 rounded-2xl bg-primary/10 p-6 text-primary">
              <p className="font-semibold">Thanks — we got it!</p>
              <p className="mt-1 text-sm text-foreground/80">A member of our events team will reach out shortly.</p>
            </div>
          ) : (
            <form
              className="mt-8 grid gap-4 sm:grid-cols-2"
              onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
            >
              <label className="block">
                <span className="text-sm font-medium">Name</span>
                <input required maxLength={100} className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2.5 text-foreground focus:border-primary focus:outline-none" />
              </label>
              <label className="block">
                <span className="text-sm font-medium">Email</span>
                <input required type="email" maxLength={255} className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2.5 text-foreground focus:border-primary focus:outline-none" />
              </label>
              <label className="block">
                <span className="text-sm font-medium">Phone</span>
                <input required type="tel" maxLength={20} className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2.5 text-foreground focus:border-primary focus:outline-none" />
              </label>
              <label className="block">
                <span className="text-sm font-medium">Event type</span>
                <select className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2.5 text-foreground focus:border-primary focus:outline-none">
                  <option>Wedding</option>
                  <option>Rehearsal Dinner</option>
                  <option>Corporate</option>
                  <option>Birthday / Anniversary</option>
                  <option>Golf Outing</option>
                  <option>Other</option>
                </select>
              </label>
              <label className="block">
                <span className="text-sm font-medium">Estimated guests</span>
                <input type="number" min={1} max={500} className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2.5 text-foreground focus:border-primary focus:outline-none" />
              </label>
              <label className="block">
                <span className="text-sm font-medium">Date</span>
                <input type="date" className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2.5 text-foreground focus:border-primary focus:outline-none" />
              </label>
              <label className="block sm:col-span-2">
                <span className="text-sm font-medium">Tell us about your event</span>
                <textarea rows={4} maxLength={1000} className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2.5 text-foreground focus:border-primary focus:outline-none" />
              </label>
              <div className="sm:col-span-2">
                <button type="submit" className="w-full rounded-full bg-primary py-3 font-semibold text-primary-foreground shadow-soft hover:opacity-90 sm:w-auto sm:px-8">
                  Send Request
                </button>
              </div>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
