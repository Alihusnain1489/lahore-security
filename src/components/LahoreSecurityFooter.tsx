import { Phone, Mail, MapPin, Shield } from "lucide-react";

export const LahoreSecurityFooter = () => {
  return (
    <footer className="bg-lahore-navy text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-6">
              <Shield className="h-8 w-8 text-lahore-red mr-3" />
              <h3 className="text-2xl font-bold">Lahore Security</h3>
            </div>
            <p className="text-white/80 mb-6 max-w-md">
              Securing Lahore, Securing You. Professional security services with integrity, 
              vigilance, and helpfulness at the core of everything we do.
            </p>
            <div className="space-y-3">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-lahore-red mr-3" />
                <span className="text-white/80">DHA Phase 5, Lahore, Pakistan</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-lahore-red mr-3" />
                <span className="text-white/80">+92-326-1052244</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-lahore-red mr-3" />
                <span className="text-white/80">contact@lahore-security.com</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3 text-white/80">
              <li>Manned Guarding</li>
              <li>CCTV Monitoring</li>
              <li>Mobile Patrols</li>
              <li>Event Security</li>
              <li>Corporate Solutions</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-white/80">
              <li><a href="/about" className="hover:text-lahore-red transition-colors">About Us</a></li>
              <li><a href="/services" className="hover:text-lahore-red transition-colors">Services</a></li>
              <li><a href="/careers" className="hover:text-lahore-red transition-colors">Careers</a></li>
              <li><a href="/contact" className="hover:text-lahore-red transition-colors">Contact</a></li>
              <li><a href="/news" className="hover:text-lahore-red transition-colors">News</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm mb-4 md:mb-0">
              © 2024 Lahore Security. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-white/60">
              <a href="#" className="hover:text-lahore-red transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-lahore-red transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-lahore-red transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};