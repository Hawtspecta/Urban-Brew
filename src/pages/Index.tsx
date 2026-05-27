import { Link } from "react-router-dom";
import { Coffee, UtensilsCrossed, Truck, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import heroImage from "@/assets/hero-cafe.jpg";
import latteImage from "@/assets/food-latte.jpg";
import toastImage from "@/assets/food-toast.jpg";
import croissantImage from "@/assets/food-croissant.jpg";
import cakeImage from "@/assets/food-cake.jpg";

const services = [
  { icon: Coffee, title: "Dine In", description: "Relax in our cozy space with freshly brewed coffee and pastries." },
  { icon: Truck, title: "Takeaway", description: "Grab your favorites on the go — ready in minutes." },
  { icon: UtensilsCrossed, title: "Catering", description: "Let us handle your events with custom café catering packages." },
];

const featured = [
  { name: "Signature Latte", price: "$5.50", image: latteImage },
  { name: "Avocado Toast", price: "$9.00", image: toastImage },
  { name: "Butter Croissant", price: "$4.00", image: croissantImage },
  { name: "Blueberry Cheesecake", price: "$7.50", image: cakeImage },
];

const testimonials = [
  { name: "Sarah M.", text: "The best coffee in the neighborhood, hands down. The ambiance is perfect for working or catching up with friends.", rating: 5 },
  { name: "James R.", text: "Their pastries are incredible — fresh every morning. Urban Brew has become my daily stop before work.", rating: 5 },
  { name: "Priya K.", text: "Loved the catering for our team event. Professional, delicious, and everyone was impressed!", rating: 5 },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Urban Brew Café interior" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-espresso/60" />
        </div>
        <div className="relative container mx-auto px-4 md:px-8 py-32">
          <div className="max-w-2xl">
            <AnimatedSection>
              <p className="font-body text-sm uppercase tracking-[0.2em] text-latte mb-4">Café & Bakery • Est. 2018</p>
              <h1 className="font-display text-5xl md:text-7xl font-bold text-primary-foreground leading-[1.1] mb-6">
                Fresh Coffee.<br />Real Conversations.
              </h1>
              <p className="font-body text-lg text-latte/90 mb-8 max-w-lg">
                Your neighborhood spot for specialty coffee, handmade pastries, and genuine connection.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/menu">
                  <Button size="lg" className="rounded-full text-base px-8">
                    View Menu
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="rounded-full text-base px-8 border-primary-foreground/30 hover:bg-primary-foreground/10">
                    Book a Table
                  </Button>
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-warm/80">
        <div className="container mx-auto px-4 md:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <p className="font-body text-sm uppercase tracking-[0.2em] text-accent mb-3">What We Offer</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">Our Services</h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((svc, i) => (
              <AnimatedSection key={svc.title} delay={i * 0.1}>
                <div className="h-full flex flex-col bg-card rounded-2xl p-8 shadow-card text-center hover:shadow-elevated transition-all duration-500 ease-out hover:-translate-y-1">
                  <div className="w-14 h-14 bg-secondary rounded-xl flex items-center justify-center mx-auto mb-5">
                    <svc.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">{svc.title}</h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed flex-1">{svc.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Items */}
      <section className="py-24 bg-background/80">
        <div className="container mx-auto px-4 md:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <p className="font-body text-sm uppercase tracking-[0.2em] text-accent mb-3">Customer Favorites</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">Featured Items</h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featured.map((item, i) => (
              <AnimatedSection key={item.name} delay={i * 0.1}>
                <div className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-lg font-semibold text-foreground">{item.name}</h3>
                    <p className="font-body text-accent font-semibold mt-1">{item.price}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection delay={0.3}>
            <div className="text-center mt-12">
              <Link to="/menu">
                <Button variant="outline" size="lg" className="rounded-full px-8">
                  See Full Menu
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-warm/80">
        <div className="container mx-auto px-4 md:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <p className="font-body text-sm uppercase tracking-[0.2em] text-accent mb-3">What People Say</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">Customer Love</h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <AnimatedSection key={t.name} delay={i * 0.1}>
                <div className="h-full flex flex-col bg-card rounded-2xl p-8 shadow-card transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-elevated">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-caramel text-caramel" />
                    ))}
                  </div>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed mb-5 flex-1">"{t.text}"</p>
                  <p className="font-body text-sm font-semibold text-foreground">— {t.name}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-24 bg-background/80">
        <div className="container mx-auto px-4 md:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <p className="font-body text-sm uppercase tracking-[0.2em] text-accent mb-3">Find Us</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">Visit Our Café</h2>
              <p className="font-body text-muted-foreground mt-4">123 Brew Street, Downtown District</p>
            </div>
          </AnimatedSection>
          <AnimatedSection>
            <div className="rounded-2xl overflow-hidden shadow-card">
              <iframe
                title="Urban Brew Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2!2d-73.99!3d40.75!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ1JzAwLjAiTiA3M8KwNTknMjQuMCJX!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary/80">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <AnimatedSection>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Ready for the best coffee in town?
            </h2>
            <p className="font-body text-primary-foreground/80 mb-8 max-w-md mx-auto">
              Walk in, call ahead, or message us on WhatsApp. We're always ready to brew.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <Button size="lg" variant="secondary" className="rounded-full px-8">
                  Get in Touch
                </Button>
              </Link>
              <a href="tel:+15551234567">
                <Button size="lg" variant="outline" className="rounded-full px-8 border-primary-foreground/30 hover:bg-primary-foreground/10">
                  Call Now
                </Button>
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
