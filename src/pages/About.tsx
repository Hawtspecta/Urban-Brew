import { Link } from "react-router-dom";
import { Heart, Leaf, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import aboutImage from "@/assets/about-cafe.jpg";
import ownerImage from "@/assets/owner.jpg";

const values = [
  { icon: Heart, title: "Passion First", description: "Every cup is crafted with genuine love for the art of coffee." },
  { icon: Leaf, title: "Locally Sourced", description: "We partner with local farms and roasters for the freshest ingredients." },
  { icon: Users, title: "Community Hub", description: "More than a café — a place where the neighborhood comes together." },
  { icon: Award, title: "Quality Always", description: "From beans to bakes, we never compromise on quality." },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-32 pb-24 bg-warm/80">
        <div className="container mx-auto px-4 md:px-8">
          <AnimatedSection>
            <div className="max-w-2xl mx-auto text-center">
              <p className="font-body text-sm uppercase tracking-[0.2em] text-accent mb-3">Our Story</p>
              <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground leading-[1.1] mb-6">
                Brewed with Heart
              </h1>
              <p className="font-body text-lg text-muted-foreground leading-relaxed">
                What started as a dream between two friends has grown into the neighborhood's favorite gathering spot.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-background/80">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div className="rounded-2xl overflow-hidden shadow-card">
                <img src={aboutImage} alt="Inside Urban Brew Café" className="w-full h-full object-cover" />
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div>
                <p className="font-body text-sm uppercase tracking-[0.2em] text-accent mb-3">Since 2018</p>
                <h2 className="font-display text-4xl font-bold text-foreground mb-6">From a Small Idea to Your Favorite Spot</h2>
                <div className="space-y-4 font-body text-muted-foreground leading-relaxed">
                  <p>
                    Urban Brew Café was born from a simple belief: great coffee should come with great company. Founded by Marco Espinoza in 2018, we set out to create a space where quality meets warmth.
                  </p>
                  <p>
                    We source our beans from ethical roasters, bake our pastries fresh every morning, and train our baristas to pour with precision and care. Every detail matters — from the playlist to the latte art.
                  </p>
                  <p>
                    Today, we're proud to be the go-to café for students, professionals, and families in the Downtown District. Whether you're here for a quick espresso or a long afternoon, you're always welcome.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-warm/80">
        <div className="container mx-auto px-4 md:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <p className="font-body text-sm uppercase tracking-[0.2em] text-accent mb-3">Why Choose Us</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">Our Values</h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <AnimatedSection key={v.title} delay={i * 0.1}>
                <div className="text-center">
                  <div className="w-14 h-14 bg-secondary rounded-xl flex items-center justify-center mx-auto mb-5">
                    <v.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">{v.title}</h3>
                  <p className="font-body text-sm text-muted-foreground">{v.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Owner */}
      <section className="py-24 bg-background/80">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection delay={0.1}>
              <div>
                <p className="font-body text-sm uppercase tracking-[0.2em] text-accent mb-3">Meet the Founder</p>
                <h2 className="font-display text-4xl font-bold text-foreground mb-6">Marco Espinoza</h2>
                <div className="space-y-4 font-body text-muted-foreground leading-relaxed">
                  <p>
                    "I've always believed that a café is more than just coffee — it's the people, the energy, the feeling of belonging. That's what I wanted Urban Brew to be."
                  </p>
                  <p>
                    With over 10 years in the food and hospitality industry, Marco brings his passion for quality and community to every aspect of Urban Brew. From selecting beans to designing the space, his personal touch is in every detail.
                  </p>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection>
              <div className="rounded-2xl overflow-hidden shadow-card max-w-md mx-auto lg:ml-auto">
                <img src={ownerImage} alt="Marco Espinoza, Founder" className="w-full h-full object-cover" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary/80">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <AnimatedSection>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">Come Say Hello</h2>
            <p className="font-body text-primary-foreground/80 mb-8 max-w-md mx-auto">
              We'd love to meet you. Stop by for a coffee, or reach out anytime.
            </p>
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="rounded-full px-8">
                Get in Touch
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default About;
