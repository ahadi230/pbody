import { Link } from "react-router-dom";
import { Star, ShoppingBag, UtensilsCrossed, CalendarHeart, MapPin, ArrowRight, Award, Heart, Cake } from "lucide-react";
import heroImg from "@/assets/hero-restaurant.jpg";
import burgerImg from "@/assets/food-burger.jpg";
import ribsImg from "@/assets/food-ribs.jpg";
import dessertImg from "@/assets/food-dessert.jpg";
import appsImg from "@/assets/food-apps.jpg";
import chickenImg from "@/assets/food-chicken.jpg";
import golfImg from "@/assets/golf-course.jpg";

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <img
          src={heroImg}
          alt="Pbody's dining room overlooking Clarksville Country Club golf course at sunset"
          width={1920}
          height={1280}
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-overlay" />
        <div className="absolute inset-0 -z-10 bg-primary/40" />

        <div className="mx-auto max-w-7xl px-4 pb-24 pt-20 sm:px-6 sm:pt-28 lg:px-8 lg:pb-32 lg:pt-40">
          <div className="max-w-2xl text-primary-foreground">
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-primary/30 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent backdrop-blur">
              <Star className="h-3.5 w-3.5 fill-accent" /> 4.8 ★ · 1,700+ Reviews
            </div>
            <h1 className="mt-5 font-display text-5xl font-bold leading-[1.05] text-balance sm:text-6xl lg:text-7xl">
              Clarksville's hidden gem for <span className="text-accent">comfort food</span> & events.
            </h1>
            <p className="mt-5 max-w-xl text-lg text-primary-foreground/85">
              Big portions. Warm hospitality. A scenic country-club setting open to everyone. Order online, dine in, or host your next celebration with us.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/order" className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-base font-semibold text-accent-foreground shadow-warm transition hover:scale-[1.02]">
                <ShoppingBag className="h-5 w-5" /> Order Online
              </Link>
              <Link to="/menu" className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 bg-primary-foreground/10 px-6 py-3 text-base font-semibold text-primary-foreground backdrop-blur hover:bg-primary-foreground/20">
                <UtensilsCrossed className="h-5 w-5" /> View Menu
              </Link>
              <Link to="/events" className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 bg-primary-foreground/10 px-6 py-3 text-base font-semibold text-primary-foreground backdrop-blur hover:bg-primary-foreground/20">
                <CalendarHeart className="h-5 w-5" /> Book an Event
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="border-b border-border bg-card">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-10 sm:px-6 md:grid-cols-4 lg:px-8">
          {[
            { icon: Star, label: "4.8★ Rating", sub: "1,700+ Google reviews" },
            { icon: Award, label: "Local Favorite", sub: "Since day one" },
            { icon: Heart, label: "Family Friendly", sub: "Community first" },
            { icon: Cake, label: "Famous Desserts", sub: "Banana pudding & more" },
          ].map((t) => (
            <div key={t.label} className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-gold text-primary">
                <t.icon className="h-5 w-5" />
              </div>
              <div>
                <div className="font-display text-lg font-semibold text-foreground">{t.label}</div>
                <div className="text-xs text-muted-foreground">{t.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOD GALLERY */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">Crowd Favorites</p>
            <h2 className="mt-2 font-display text-4xl font-bold text-foreground sm:text-5xl text-balance">
              Made-from-scratch comfort, plated generously.
            </h2>
          </div>
          <Link to="/menu" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all">
            See full menu <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-6">
          {[
            { img: burgerImg, title: "Signature Burgers", price: "$12-16", span: "lg:col-span-3 lg:row-span-2 aspect-square lg:aspect-auto" },
            { img: ribsImg, title: "Smokehouse Ribs", price: "$18-22", span: "lg:col-span-3 aspect-[4/3]" },
            { img: dessertImg, title: "Banana Pudding", price: "$7", span: "lg:col-span-2 aspect-square" },
            { img: appsImg, title: "Fried Appetizers", price: "$8-12", span: "lg:col-span-2 aspect-square" },
            { img: chickenImg, title: "Chicken & Waffles", price: "$14", span: "lg:col-span-2 aspect-square" },
          ].map((f) => (
            <div key={f.title} className={`group relative overflow-hidden rounded-2xl shadow-soft ${f.span}`}>
              <img src={f.img} alt={f.title} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 text-primary-foreground">
                <div className="font-display text-2xl font-semibold">{f.title}</div>
                <div className="text-sm text-accent">{f.price}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY PEOPLE LOVE US */}
      <section className="bg-muted/50">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-semibold uppercase tracking-widest text-accent">Why People Love Us</p>
          <h2 className="mx-auto mt-2 max-w-2xl text-center font-display text-4xl font-bold text-foreground sm:text-5xl text-balance">
            "It's the kind of place you'll tell your friends about."
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { q: "Huge portions, amazing flavor, and the staff treats you like family. Best burger in Clarksville, hands down.", a: "Sarah M." },
              { q: "The banana pudding alone is worth the drive. Beautiful view of the golf course while you eat — true hidden gem.", a: "James T." },
              { q: "We hosted our anniversary dinner here and the team made it unforgettable. Already planning our next event.", a: "Linda & Rob" },
            ].map((t) => (
              <figure key={t.a} className="rounded-2xl bg-card p-7 shadow-soft">
                <div className="flex gap-0.5 text-accent">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                </div>
                <blockquote className="mt-4 text-foreground/90">"{t.q}"</blockquote>
                <figcaption className="mt-4 text-sm font-semibold text-muted-foreground">— {t.a}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* EVENTS CTA */}
      <section className="relative isolate overflow-hidden">
        <img src={golfImg} alt="Clarksville Country Club golf course at sunset" loading="lazy" className="absolute inset-0 -z-10 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-primary/80" />
        <div className="mx-auto max-w-5xl px-4 py-24 text-center text-primary-foreground sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">Events & Catering</p>
          <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl text-balance">
            Host your next celebration on the country club greens.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/85">
            Weddings, rehearsal dinners, corporate gatherings, and private parties — with scenic views and a kitchen that delivers every time.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/events" className="rounded-full bg-accent px-7 py-3 font-semibold text-accent-foreground shadow-warm hover:scale-[1.02] transition">
              Request Event Quote
            </Link>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=334+Fairway+Dr,+Clarksville,+TN"
              target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/40 px-7 py-3 font-semibold backdrop-blur hover:bg-primary-foreground/10"
            >
              <MapPin className="h-5 w-5" /> Get Directions
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
