import { Shield, Phone, Mail, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="h-8 w-8 text-accent" />
              <span className="text-2xl font-bold">Guardian Shield</span>
            </div>
            <p className="text-primary-foreground/80 mb-4">
              Professional security and protection services across Lahore. Led by military expertise 
              and managed with professional excellence for your complete safety and peace of mind.
            </p>
            <div className="flex flex-col space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span>Licensed & Insured Security Services</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span>Military Leadership & Expertise</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span>24/7 Emergency Response Available</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-accent">Our Services</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>Child Protection Services</li>
              <li>Family Protection</li>
              <li>VIP & Celebrity Security</li>
              <li>Women's Safety Services</li>
              <li>Event Security</li>
              <li>Foreign Client Protection</li>
              <li>Training Camp (Coming Soon)</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-accent">Contact Info</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-accent" />
                <span>03261052244</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-accent" />
                <span>mr.alihusnain11@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-accent" />
                <span>DHA Phase VI, Lahore</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-primary-foreground/60">
              © 2024 Guardian Shield Lahore. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <span className="text-sm text-primary-foreground/60">
                CEO: Retired Colonel Nauman Asghar | Manager: Ali Husnain
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};