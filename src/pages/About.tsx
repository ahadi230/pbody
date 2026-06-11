import { Heart, Users, MapPin, Utensils } from "lucide-react";
import heroImg from "@/assets/hero-restaurant.jpg";
import golfImg from "@/assets/golf-course.jpg";

export default function About() {
  return (
    <div>
      <section className="relative isolate overflow-hidden">
        <img src={heroImg} alt="Pbody's dining room" loading="lazy" width={1920} height={1280} className="absolute inset-0 -z-10 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-primary/70" />
        <div className="mx-auto max-w-4xl px-4 py-24 text-center text-primary-foreground sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">Our Story</p>
          <h1 className="mt-3 font-display text-5xl font-bold sm:text-6xl text-balance">
            Big plates. Real people. A little piece of Clarksville.
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="prose prose-lg max-w-none text-foreground/90">
          <p className="text-xl leading-relaxed">
            Tucked inside Clarksville Country Club at 334 Fairway Drive, Pbody's started with a simple idea: serve the kind of food you'd cook for your own family, and treat every guest like one too.
          </p>
          <p className="mt-6 leading-relaxed">
            We're not just for members — we're open to the whole community, and that's the way we like it. From quick weekday lunches to anniversary dinners with a view of the 18th green, Pbody's has become Clarksville's go-to for honest comfort food and warm hospitality.
          </p>
          <p className="mt-6 leading-relaxed">
            Our reputation has been built one plate at a time: signature smash burgers, slow-smoked ribs, golden gator bites, and desserts that locals keep coming back for. With over 1,700 five-star reviews, we're humbled — and we still cook every plate like it's our first.
          </p>
        </div>
      </section>

      <section className="bg-muted/50">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-16 sm:px-6 md:grid-cols-4 lg:px-8">
          {[
            { icon: Heart, t: "Hospitality first", d: "We treat guests like neighbors, because most of them are." },
            { icon: Utensils, t: "Big portions", d: "Generous plates that satisfy without emptying your wallet." },
            { icon: Users, t: "Community rooted", d: "Family-friendly, locally loved, open to the public." },
            { icon: MapPin, t: "A scenic setting", d: "Country club views without the country club price tag." },
          ].map((v) => (
            <div key={v.t} className="rounded-2xl bg-card p-6 shadow-soft">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-gold text-primary">
                <v.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-xl font-semibold">{v.t}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{v.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative isolate overflow-hidden">
        <img src={golfImg} alt="Golf course" loading="lazy" className="absolute inset-0 -z-10 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-primary/85" />
        <div className="mx-auto max-w-3xl px-4 py-20 text-center text-primary-foreground sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl font-bold sm:text-5xl text-balance">
            "The best meals come from the simplest moments."
          </h2>
          <p className="mt-4 text-primary-foreground/80">— The Pbody's Team</p>
        </div>
      </section>
    </div>
  );
}
