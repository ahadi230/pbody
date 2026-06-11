import { useState } from "react";
import { Link } from "react-router-dom";
import { Star, ShoppingBag } from "lucide-react";
import burgerImg from "@/assets/food-burger.jpg";
import ribsImg from "@/assets/food-ribs.jpg";
import appsImg from "@/assets/food-apps.jpg";
import chickenImg from "@/assets/food-chicken.jpg";
import dessertImg from "@/assets/food-dessert.jpg";
import steakImg from "@/assets/food-steak.jpg";
import saladImg from "@/assets/food-salad.jpg";

type Item = { name: string; desc: string; price: string; popular?: boolean };
type Cat = { id: string; label: string; img: string; items: Item[] };

const categories: Cat[] = [
  {
    id: "burgers", label: "Burgers", img: burgerImg,
    items: [
      { name: "Pbody's Classic Burger", desc: "Half-pound smash patty, American cheese, lettuce, tomato, onion, brioche bun", price: "$12", popular: true },
      { name: "Bacon BBQ Burger", desc: "Cheddar, crispy bacon, onion straws, house BBQ sauce", price: "$14", popular: true },
      { name: "Mushroom Swiss Burger", desc: "Sautéed mushrooms, swiss, garlic aioli", price: "$13" },
      { name: "Black & Bleu Burger", desc: "Blackened seasoning, bleu cheese crumbles, caramelized onions", price: "$15" },
    ],
  },
  {
    id: "apps", label: "Appetizers", img: appsImg,
    items: [
      { name: "Gator Bites", desc: "Fried alligator tail, cajun remoulade", price: "$11", popular: true },
      { name: "Fried Green Tomatoes", desc: "Cornmeal-crusted, comeback sauce", price: "$9", popular: true },
      { name: "House Chips", desc: "Hand-cut potato chips with onion dip", price: "$7" },
      { name: "Loaded Cheese Fries", desc: "Bacon, cheddar, scallions, ranch", price: "$10" },
    ],
  },
  {
    id: "chicken", label: "Chicken", img: chickenImg,
    items: [
      { name: "Chicken & Waffles", desc: "Buttermilk fried chicken, Belgian waffle, maple butter", price: "$14", popular: true },
      { name: "Cashew Chicken", desc: "Wok-fried chicken, cashews, jasmine rice", price: "$15" },
      { name: "Grilled Chicken Plate", desc: "Marinated breast, two sides", price: "$13" },
    ],
  },
  {
    id: "steaks", label: "Steaks & Ribs", img: steakImg,
    items: [
      { name: "Baby Back Ribs (Full)", desc: "Slow-smoked, house BBQ glaze, two sides", price: "$22", popular: true },
      { name: "Baby Back Ribs (Half)", desc: "Half rack, two sides", price: "$16" },
      { name: "Ribeye Steak", desc: "12oz hand-cut, herb butter, two sides", price: "$24" },
      { name: "Sirloin Tip Plate", desc: "8oz center-cut, two sides", price: "$19" },
    ],
  },
  {
    id: "salads", label: "Salads", img: saladImg,
    items: [
      { name: "House Salad", desc: "Mixed greens, tomato, cucumber, onion, choice of dressing", price: "$8" },
      { name: "Grilled Chicken Caesar", desc: "Romaine, parmesan, croutons, caesar", price: "$13" },
      { name: "Steak Salad", desc: "Sirloin tips over greens, blue cheese, balsamic", price: "$16" },
    ],
  },
  {
    id: "desserts", label: "Desserts", img: dessertImg,
    items: [
      { name: "Banana Pudding", desc: "House recipe, vanilla wafers, fresh whipped cream", price: "$7", popular: true },
      { name: "Key Lime Pie", desc: "Tart & creamy, graham crust", price: "$7", popular: true },
      { name: "Caramel Pie", desc: "Salted caramel, buttery crust", price: "$7" },
      { name: "Warm Brownie Sundae", desc: "Vanilla ice cream, hot fudge, whipped cream", price: "$8" },
    ],
  },
];

// ribsImg kept for ribs category — steakImg already assigned above
categories[3].img = steakImg;

export default function Menu() {
  const [active, setActive] = useState("burgers");
  const cat = categories.find((c) => c.id === active)!;

  return (
    <div>
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">Our Menu</p>
          <h1 className="mt-2 font-display text-5xl font-bold sm:text-6xl text-balance">Comfort food, made with care.</h1>
          <p className="mt-4 max-w-2xl text-primary-foreground/80">
            Most plates land in the $10–$20 range, and every portion comes hungry-friendly. Tap a category to explore.
          </p>
        </div>
      </section>

      <div className="sticky top-16 z-30 border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-4 py-3 sm:px-6 lg:px-8">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setActive(c.id)}
              className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition ${
                active === c.id
                  ? "bg-primary text-primary-foreground shadow-soft"
                  : "bg-muted text-foreground hover:bg-muted/70"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <div className="relative overflow-hidden rounded-3xl shadow-warm">
            <img src={cat.img} alt={cat.label} loading="lazy" className="h-72 w-full object-cover sm:h-96 lg:h-full" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 text-primary-foreground">
              <h2 className="font-display text-4xl font-bold">{cat.label}</h2>
            </div>
          </div>

          <div className="divide-y divide-border rounded-3xl bg-card p-2 shadow-soft">
            {cat.items.map((it) => (
              <div key={it.name} className="flex items-start justify-between gap-6 p-5 sm:p-6">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-display text-xl font-semibold text-foreground">{it.name}</h3>
                    {it.popular && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-accent/20 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-accent-foreground">
                        <Star className="h-3 w-3 fill-current text-accent" /> Popular
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">{it.desc}</p>
                </div>
                <div className="shrink-0 font-display text-xl font-bold text-primary">{it.price}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 rounded-2xl bg-muted/60 p-6">
          <p className="text-foreground">Ready to eat? Order pickup or delivery in minutes.</p>
          <Link to="/order" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-soft">
            <ShoppingBag className="h-5 w-5" /> Order Online
          </Link>
        </div>
      </section>
    </div>
  );
}
