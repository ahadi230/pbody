import { Link } from "react-router-dom";
import { MapPin, Phone, Clock, Star } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mt-16 bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4 lg:px-8">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 font-display text-2xl font-bold">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-gold">
              <span className="text-primary">P</span>
            </span>
            Pbody's
          </div>
          <p className="mt-4 max-w-md text-sm text-primary-foreground/80">
            Clarksville's hidden gem for comfort food and unforgettable events. Inside Clarksville Country Club — open to the public.
          </p>
          <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-3 py-1.5 text-sm">
            <Star className="h-4 w-4 fill-accent text-accent" />
            <span className="font-semibold">4.8</span>
            <span className="text-primary-foreground/70">· 1,700+ Google reviews</span>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-accent">Visit</h4>
          <ul className="mt-4 space-y-3 text-sm text-primary-foreground/85">
            <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 text-accent" /> 334 Fairway Dr, Clarksville, TN</li>
            <li className="flex items-start gap-2"><Phone className="mt-0.5 h-4 w-4 text-accent" /> <a href="tel:+19312414040" className="hover:underline">(931) 241-4040</a></li>
            <li className="flex items-start gap-2"><Clock className="mt-0.5 h-4 w-4 text-accent" /> Open until 9 PM</li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-accent">Explore</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/menu" className="text-primary-foreground/85 hover:text-accent">Menu</Link></li>
            <li><Link to="/order" className="text-primary-foreground/85 hover:text-accent">Order Online</Link></li>
            <li><Link to="/events" className="text-primary-foreground/85 hover:text-accent">Events & Catering</Link></li>
            <li><Link to="/about" className="text-primary-foreground/85 hover:text-accent">About</Link></li>
            <li><Link to="/reviews" className="text-primary-foreground/85 hover:text-accent">Reviews</Link></li>
            <li><Link to="/contact" className="text-primary-foreground/85 hover:text-accent">Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto flex max-w-7xl flex-col items-start gap-2 px-4 py-5 text-xs text-primary-foreground/60 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} Pbody's Restaurant & Event Center. All rights reserved.</p>
          <p>Inside Clarksville Country Club · Clarksville, TN</p>
        </div>
      </div>
    </footer>
  );
}
