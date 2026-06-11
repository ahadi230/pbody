import { useState } from "react";
import { Link } from "react-router-dom";
import { Truck, ShoppingBag, Phone, Clock, ArrowRight } from "lucide-react";

export default function Order() {
  const [mode, setMode] = useState<"pickup" | "delivery">("pickup");
  return (
    <div>
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-5xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">Order Online</p>
          <h1 className="mt-2 font-display text-5xl font-bold sm:text-6xl text-balance">Pbody's, to go.</h1>
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/85">
            Choose pickup or delivery and we'll have your order ready in minutes.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-3 rounded-full bg-muted p-1.5">
          <button
            onClick={() => setMode("pickup")}
            className={`flex items-center justify-center gap-2 rounded-full px-4 py-3 font-semibold transition ${
              mode === "pickup" ? "bg-primary text-primary-foreground shadow-soft" : "text-foreground"
            }`}
          >
            <ShoppingBag className="h-5 w-5" /> Pickup
          </button>
          <button
            onClick={() => setMode("delivery")}
            className={`flex items-center justify-center gap-2 rounded-full px-4 py-3 font-semibold transition ${
              mode === "delivery" ? "bg-primary text-primary-foreground shadow-soft" : "text-foreground"
            }`}
          >
            <Truck className="h-5 w-5" /> Delivery
          </button>
        </div>

        <div className="mt-8 rounded-3xl border border-border bg-card p-8 shadow-soft">
          {mode === "pickup" ? (
            <div>
              <h2 className="font-display text-3xl font-bold">Pickup at Pbody's</h2>
              <p className="mt-2 text-muted-foreground">Ready in 15–25 minutes. Pick up at 334 Fairway Dr, Clarksville, TN.</p>
              <div className="mt-6 flex items-center gap-3 rounded-xl bg-muted/60 p-4 text-sm">
                <Clock className="h-5 w-5 text-primary" /> Open daily until 9 PM
              </div>
              <a
                href="tel:+19312414040"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 text-lg font-semibold text-primary-foreground shadow-warm"
              >
                <Phone className="h-5 w-5" /> Call to Order — (931) 241-4040
              </a>
              <Link to="/menu" className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full border border-border px-6 py-4 font-semibold text-foreground hover:bg-muted">
                Browse Menu <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ) : (
            <div>
              <h2 className="font-display text-3xl font-bold">Delivery</h2>
              <p className="mt-2 text-muted-foreground">Order through your preferred delivery partner:</p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {["DoorDash", "Uber Eats", "Grubhub"].map((p) => (
                  <a
                    key={p}
                    href="#"
                    className="flex items-center justify-between rounded-2xl border border-border bg-background p-5 shadow-soft transition hover:border-primary hover:shadow-warm"
                  >
                    <span className="font-display text-lg font-semibold">{p}</span>
                    <ArrowRight className="h-5 w-5 text-primary" />
                  </a>
                ))}
              </div>
              <p className="mt-6 text-sm text-muted-foreground">Delivery areas and fees vary by partner.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
