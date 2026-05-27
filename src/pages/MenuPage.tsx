import { useState } from "react";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";

const categories = ["All", "Coffee", "Bakery", "Breakfast", "Desserts", "Drinks"];

const menuItems = [
  { name: "Espresso", price: "$3.50", category: "Coffee", description: "Rich double-shot espresso" },
  { name: "Cappuccino", price: "$4.50", category: "Coffee", description: "Espresso with steamed milk foam" },
  { name: "Signature Latte", price: "$5.50", category: "Coffee", description: "Our house blend with vanilla notes" },
  { name: "Cold Brew", price: "$5.00", category: "Coffee", description: "Slow-steeped 18 hours for smooth flavor" },
  { name: "Flat White", price: "$4.50", category: "Coffee", description: "Velvety microfoam with ristretto" },
  { name: "Mocha", price: "$5.50", category: "Coffee", description: "Espresso, dark chocolate, steamed milk" },
  { name: "Butter Croissant", price: "$4.00", category: "Bakery", description: "Flaky, golden, baked fresh daily" },
  { name: "Almond Danish", price: "$4.50", category: "Bakery", description: "Almond cream with toasted slivers" },
  { name: "Banana Bread", price: "$3.50", category: "Bakery", description: "Moist, walnut-studded, homestyle" },
  { name: "Sourdough Loaf", price: "$6.00", category: "Bakery", description: "Artisan sourdough, perfect crust" },
  { name: "Avocado Toast", price: "$9.00", category: "Breakfast", description: "Smashed avo, poached egg, sourdough" },
  { name: "Granola Bowl", price: "$8.00", category: "Breakfast", description: "Yogurt, seasonal fruit, house granola" },
  { name: "Eggs Benedict", price: "$12.00", category: "Breakfast", description: "Classic hollandaise, ham, English muffin" },
  { name: "Breakfast Burrito", price: "$10.00", category: "Breakfast", description: "Scrambled eggs, beans, cheese, salsa" },
  { name: "Blueberry Cheesecake", price: "$7.50", category: "Desserts", description: "Creamy cheesecake with berry compote" },
  { name: "Chocolate Fondant", price: "$8.00", category: "Desserts", description: "Warm center, vanilla bean ice cream" },
  { name: "Tiramisu", price: "$7.00", category: "Desserts", description: "Classic Italian, espresso-soaked" },
  { name: "Fresh Orange Juice", price: "$4.50", category: "Drinks", description: "Freshly squeezed, no additives" },
  { name: "Iced Matcha Latte", price: "$5.50", category: "Drinks", description: "Ceremonial grade matcha, oat milk" },
  { name: "Smoothie Bowl", price: "$8.50", category: "Drinks", description: "Açaí, banana, granola topping" },
];

const MenuPage = () => {
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? menuItems : menuItems.filter((i) => i.category === active);

  return (
    <Layout>
      <section className="pt-32 pb-24 bg-warm/80">
        <div className="container mx-auto px-4 md:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <p className="font-body text-sm uppercase tracking-[0.2em] text-accent mb-3">What We Serve</p>
              <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground">Our Menu</h1>
            </div>
          </AnimatedSection>

          {/* Category filters */}
          <AnimatedSection delay={0.1}>
            <div className="flex flex-wrap justify-center gap-3 mb-16">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`font-body text-sm font-medium px-5 py-2.5 rounded-full transition-all ${
                    active === cat
                      ? "bg-primary text-primary-foreground"
                      : "bg-card text-muted-foreground hover:bg-secondary shadow-soft"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </AnimatedSection>

          {/* Menu grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((item, i) => (
              <AnimatedSection key={item.name} delay={i * 0.03}>
                <div className="bg-card rounded-2xl p-6 shadow-card hover:shadow-elevated transition-shadow">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-display text-lg font-semibold text-foreground">{item.name}</h3>
                      <p className="font-body text-sm text-muted-foreground mt-1">{item.description}</p>
                    </div>
                    <span className="font-body text-base font-bold text-accent whitespace-nowrap">{item.price}</span>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MenuPage;
