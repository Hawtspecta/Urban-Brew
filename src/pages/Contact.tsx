import { useState } from "react";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message sent!", description: "We'll get back to you within 24 hours." });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <Layout>
      <section className="pt-32 pb-24 bg-warm">
        <div className="container mx-auto px-4 md:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <p className="font-body text-sm uppercase tracking-[0.2em] text-accent mb-3">Get in Touch</p>
              <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground">Contact Us</h1>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <AnimatedSection>
              <div className="bg-card rounded-2xl p-8 shadow-card">
                <h2 className="font-display text-2xl font-bold text-foreground mb-6">Send a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="font-body text-sm font-medium text-foreground mb-1.5 block">Name</label>
                    <Input
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Your name"
                      required
                      className="rounded-xl"
                    />
                  </div>
                  <div>
                    <label className="font-body text-sm font-medium text-foreground mb-1.5 block">Email</label>
                    <Input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="your@email.com"
                      required
                      className="rounded-xl"
                    />
                  </div>
                  <div>
                    <label className="font-body text-sm font-medium text-foreground mb-1.5 block">Message</label>
                    <Textarea
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="How can we help?"
                      rows={5}
                      required
                      className="rounded-xl"
                    />
                  </div>
                  <Button type="submit" size="lg" className="rounded-full w-full">
                    Send Message
                  </Button>
                </form>
              </div>
            </AnimatedSection>

            {/* Info */}
            <AnimatedSection delay={0.2}>
              <div className="space-y-8">
                <div>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-6">Contact Info</h2>
                  <div className="space-y-5">
                    {[
                      { icon: MapPin, label: "Address", value: "123 Brew Street, Downtown District" },
                      { icon: Phone, label: "Phone", value: "+1 (555) 123-4567", href: "tel:+15551234567" },
                      { icon: Mail, label: "Email", value: "hello@urbanbrew.cafe", href: "mailto:hello@urbanbrew.cafe" },
                    ].map((item) => (
                      <div key={item.label} className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center shrink-0">
                          <item.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-body text-xs uppercase tracking-wider text-muted-foreground mb-0.5">{item.label}</p>
                          {item.href ? (
                            <a href={item.href} className="font-body text-sm text-foreground hover:text-primary transition-colors">{item.value}</a>
                          ) : (
                            <p className="font-body text-sm text-foreground">{item.value}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-accent" /> Business Hours
                  </h3>
                  <div className="font-body text-sm text-muted-foreground space-y-1">
                    <p>Monday – Friday: 7:00 AM – 9:00 PM</p>
                    <p>Saturday – Sunday: 8:00 AM – 10:00 PM</p>
                  </div>
                </div>

                <a
                  href="https://wa.me/15551234567"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="lg" className="rounded-full gap-2 mt-4">
                    <MessageCircle className="w-5 h-5" />
                    Message on WhatsApp
                  </Button>
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="pb-0">
        <div className="rounded-t-2xl overflow-hidden">
          <iframe
            title="Urban Brew Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2!2d-73.99!3d40.75!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ1JzAwLjAiTiA3M8KwNTknMjQuMCJX!5e0!3m2!1sen!2sus!4v1234567890"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
