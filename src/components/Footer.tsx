import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-espresso text-primary-foreground">
      <div className="container mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl font-bold mb-4">Urban Brew</h3>
            <p className="font-body text-sm opacity-80 leading-relaxed">
              Crafting exceptional coffee and baked goods since 2018. Your neighborhood café for fresh flavors and warm conversations.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-body text-sm font-semibold uppercase tracking-wider mb-4 opacity-70">Quick Links</h4>
            <div className="flex flex-col gap-2.5">
              {[
                { label: "Home", to: "/" },
                { label: "About Us", to: "/about" },
                { label: "Our Menu", to: "/menu" },
                { label: "Contact", to: "/contact" },
              ].map((link) => (
                <Link key={link.to} to={link.to} className="font-body text-sm opacity-80 hover:opacity-100 transition-opacity">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-body text-sm font-semibold uppercase tracking-wider mb-4 opacity-70">Contact</h4>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 mt-0.5 opacity-70 shrink-0" />
                <span className="font-body text-sm opacity-80">123 Brew Street, Downtown District</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 opacity-70 shrink-0" />
                <a href="tel:+15551234567" className="font-body text-sm opacity-80 hover:opacity-100">+1 (555) 123-4567</a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 opacity-70 shrink-0" />
                <a href="mailto:hello@urbanbrew.cafe" className="font-body text-sm opacity-80 hover:opacity-100">hello@urbanbrew.cafe</a>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-body text-sm font-semibold uppercase tracking-wider mb-4 opacity-70">Hours</h4>
            <div className="flex flex-col gap-2.5">
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 opacity-70 shrink-0" />
                <div className="font-body text-sm opacity-80">
                  <p>Mon–Fri: 7:00 AM – 9:00 PM</p>
                  <p>Sat–Sun: 8:00 AM – 10:00 PM</p>
                </div>
              </div>
              <div className="flex items-center gap-3 mt-3">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="opacity-70 hover:opacity-100 transition-opacity">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="opacity-70 hover:opacity-100 transition-opacity">
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center">
          <p className="font-body text-xs opacity-50">
            © {new Date().getFullYear()} Urban Brew Café. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
