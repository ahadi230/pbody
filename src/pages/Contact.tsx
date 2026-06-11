import { MapPin, Phone, Clock, Navigation } from "lucide-react";

export default function Contact() {
  return (
    <div>
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">Find Us</p>
          <h1 className="mt-2 font-display text-5xl font-bold sm:text-6xl text-balance">Come see us.</h1>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="space-y-6">
          {[
            { icon: MapPin, t: "Address", v: "334 Fairway Dr\nClarksville, TN 37043" },
            { icon: Phone, t: "Phone", v: "(931) 241-4040", href: "tel:+19312414040" },
            { icon: Clock, t: "Hours", v: "Open daily until 9 PM" },
          ].map((item) => (
            <div key={item.t} className="flex gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-gold text-primary">
                <item.icon className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{item.t}</div>
                {item.href ? (
                  <a href={item.href} className="mt-1 block whitespace-pre-line font-display text-xl font-semibold text-primary hover:underline">{item.v}</a>
                ) : (
                  <div className="mt-1 whitespace-pre-line font-display text-xl font-semibold text-foreground">{item.v}</div>
                )}
              </div>
            </div>
          ))}
          <div className="flex flex-wrap gap-3">
            <a href="tel:+19312414040" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-soft">
              <Phone className="h-5 w-5" /> Call Now
            </a>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=334+Fairway+Dr,+Clarksville,+TN"
              target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-secondary px-6 py-3 font-semibold text-secondary-foreground shadow-soft"
            >
              <Navigation className="h-5 w-5" /> Get Directions
            </a>
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl border border-border shadow-warm">
          <iframe
            title="Pbody's location map"
            src="https://www.google.com/maps?q=334+Fairway+Dr,+Clarksville,+TN&output=embed"
            width="100%"
            height="100%"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-[420px] w-full border-0 lg:h-full"
          />
        </div>
      </section>
    </div>
  );
}
