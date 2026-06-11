import { Star } from "lucide-react";

const reviews = [
  { name: "Sarah M.", text: "Best burger in Clarksville! The portions are huge, staff is so welcoming, and the view from the dining room is unreal.", tag: "Burgers" },
  { name: "James T.", text: "Their banana pudding is dangerously good. I drive from Nashville every couple weeks just to grab some.", tag: "Desserts" },
  { name: "Linda & Rob", text: "We hosted our 25th anniversary dinner here. The staff went above and beyond — felt like a high-end restaurant at a fair price.", tag: "Events" },
  { name: "Marcus D.", text: "Gator bites and fried green tomatoes are the move. Don't sleep on the appetizers.", tag: "Appetizers" },
  { name: "Holly P.", text: "Took my parents on Sunday and they wouldn't stop talking about the ribs. Hidden gem absolutely.", tag: "Ribs" },
  { name: "Daniel R.", text: "Friendly service every single time. They remember our names and our drink orders.", tag: "Service" },
  { name: "Ashley K.", text: "Pretty country club setting but no stuffiness. Brought the kids — they were welcomed and well-fed.", tag: "Family" },
  { name: "Brian L.", text: "Catering team handled our office party of 60 flawlessly. Food was hot, plentiful, and delicious.", tag: "Catering" },
  { name: "Megan F.", text: "Key lime pie was a religious experience. Need I say more?", tag: "Desserts" },
];

export default function Reviews() {
  return (
    <div>
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-5xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">What People Are Saying</p>
          <h1 className="mt-3 font-display text-5xl font-bold sm:text-6xl text-balance">Loved by Clarksville.</h1>
          <div className="mt-8 inline-flex flex-col items-center gap-3 rounded-3xl border border-primary-foreground/15 bg-primary-foreground/5 px-10 py-7 backdrop-blur">
            <div className="flex gap-1 text-accent">
              {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-7 w-7 fill-current" />)}
            </div>
            <div className="font-display text-6xl font-bold">4.8</div>
            <div className="text-sm text-primary-foreground/80">Based on 1,700+ Google reviews</div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="columns-1 gap-6 md:columns-2 lg:columns-3">
          {reviews.map((r) => (
            <figure key={r.name} className="mb-6 break-inside-avoid rounded-2xl border border-border bg-card p-6 shadow-soft">
              <div className="flex items-center justify-between">
                <div className="flex gap-0.5 text-accent">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                </div>
                <span className="rounded-full bg-muted px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">{r.tag}</span>
              </div>
              <blockquote className="mt-3 text-foreground/90">"{r.text}"</blockquote>
              <figcaption className="mt-4 text-sm font-semibold text-muted-foreground">— {r.name}</figcaption>
            </figure>
          ))}
        </div>
      </section>
    </div>
  );
}
