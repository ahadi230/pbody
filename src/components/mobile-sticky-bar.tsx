import { Link } from "react-router-dom";
import { Phone, ShoppingBag, MapPin } from "lucide-react";

export function MobileStickyBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-border bg-background/95 backdrop-blur md:hidden">
      <a href="tel:+19312414040" className="flex flex-col items-center justify-center gap-1 py-2.5 text-xs font-medium text-foreground">
        <Phone className="h-5 w-5 text-primary" /> Call
      </a>
      <Link to="/order" className="flex flex-col items-center justify-center gap-1 bg-primary py-2.5 text-xs font-semibold text-primary-foreground">
        <ShoppingBag className="h-5 w-5" /> Order Now
      </Link>
      <a
        href="https://www.google.com/maps/dir/?api=1&destination=334+Fairway+Dr,+Clarksville,+TN"
        target="_blank"
        rel="noreferrer"
        className="flex flex-col items-center justify-center gap-1 py-2.5 text-xs font-medium text-foreground"
      >
        <MapPin className="h-5 w-5 text-primary" /> Directions
      </a>
    </div>
  );
}
