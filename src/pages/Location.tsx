import { Link } from "react-router-dom";
import { MapPin, Phone, Clock, Navigation, Car, Landmark, Star, Utensils } from "lucide-react";

export default function Location() {
  return (
    <div>
      <section className="relative bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">Find Us</p>
          <h1 className="mt-2 font-display text-5xl font-bold sm:text-6xl text-balance">Inside Clarksville Country Club.</h1>
          <p className="mt-4 max-w-2xl text-lg/8 text-primary-foreground/90">
            Easy to find, hard to forget. Scenic golf course views, plenty of parking, and a warm welcome waiting inside.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="space-y-5">
          {[
            {
              icon: MapPin, label: "Address",
              title: "334 Fairway Dr\nClarksville, TN 37043",
              sub: "Inside Clarksville Country Club",
            },
            {
              icon: Phone, label: "Phone",
              title: "(931) 241-4040",
              href: "tel:+19312414040",
              sub: "Call ahead for takeout or event inquiries",
            },
            {
              icon: Clock, label: "Hours",
              title: "Open Daily",
              sub: "Sunday – Saturday: 11 AM – 9 PM\nKitchen may close early based on volume",
            },
            {
              icon: Car, label: "Parking",
              title: "Free & plentiful",
              sub: "Plenty of parking available at Clarksville Country Club",
            },
            {
              icon: Landmark, label: "Venue",
              title: "Country Club Setting",
              sub: "Casual dining with golf course views. Family friendly.",
            },
          ].map((item) => (
            <div key={item.label} className="flex gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-gold text-primary">
                <item.icon className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{item.label}</div>
                {item.href ? (
                  <a href={item.href} className="mt-1 block font-display text-xl font-semibold text-primary hover:underline">{item.title}</a>
                ) : (
                  <div className="mt-1 whitespace-pre-line font-display text-xl font-semibold text-foreground">{item.title}</div>
                )}
                <div className="mt-1 whitespace-pre-line text-sm text-muted-foreground">{item.sub}</div>
              </div>
            </div>
          ))}

          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=334+Fairway+Dr,+Clarksville,+TN"
              target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-soft transition hover:opacity-90"
            >
              <Navigation className="h-5 w-5" /> Get Directions
            </a>
            <a
              href="tel:+19312414040"
              className="inline-flex items-center gap-2 rounded-full bg-secondary px-6 py-3 font-semibold text-secondary-foreground shadow-soft transition hover:opacity-90"
            >
              <Phone className="h-5 w-5" /> Call Now
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

      <section className="border-t border-border bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Star, label: "4.8★ rating", sub: "1,700+ happy guests" },
              { icon: Utensils, label: "Huge portions", sub: "American comfort food done right" },
              { icon: MapPin, label: "Scenic location", sub: "Golf course views while you dine" },
              { icon: Clock, label: "Open late", sub: "Daily until 9 PM" },
            ].map((item) => (
              <div key={item.label} className="rounded-2xl border border-border bg-card p-6 text-center shadow-soft">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gradient-gold text-primary">
                  <item.icon className="h-5 w-5" />
                </div>
                <div className="mt-3 font-display text-lg font-semibold text-foreground">{item.label}</div>
                <div className="mt-1 text-sm text-muted-foreground">{item.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-border bg-card p-8 shadow-warm sm:p-12">
          <h2 className="font-display text-3xl font-bold text-foreground">What to expect</h2>
          <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
            Pbody's sits inside Clarksville Country Club, offering a relaxed, family-friendly atmosphere with beautiful greenside views. Whether you're stopping in after a round of golf or bringing the family for burgers and ribs, you'll find affordable prices, generous portions, and a staff that treats you like a regular.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/menu" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-soft transition hover:opacity-90">
              <Utensils className="h-5 w-5" /> View Menu
            </Link>
            <Link to="/order" className="inline-flex items-center gap-2 rounded-full bg-secondary px-6 py-3 font-semibold text-secondary-foreground shadow-soft transition hover:opacity-90">
              Order Online
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
