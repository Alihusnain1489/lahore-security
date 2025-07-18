import { Shield, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export const SecuritasFooter = () => {
  return (
    <footer className="bg-securitas-navy text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <span className="text-securitas-red text-xl">●●●</span>
              <span className="ml-2 text-xl font-bold">Guardian Shield</span>
            </div>
            <p className="text-white/80 mb-6 leading-relaxed">
              Professional security services protecting what matters most to you. 
              Serving Lahore with excellence and dedication.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-6 w-6 text-white/60 hover:text-white cursor-pointer transition-colors" />
              <Twitter className="h-6 w-6 text-white/60 hover:text-white cursor-pointer transition-colors" />
              <Linkedin className="h-6 w-6 text-white/60 hover:text-white cursor-pointer transition-colors" />
              <Instagram className="h-6 w-6 text-white/60 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3 text-white/80">
              <li><a href="#" className="hover:text-white transition-colors">Personal Protection</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Family Security</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Celebrity Protection</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Event Security</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Mobile Patrol</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3 text-white/80">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Leadership</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Training Camp</a></li>
              <li><a href="#" className="hover:text-white transition-colors">News</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <div className="space-y-3 text-white/80">
              <p>DHA Phase VI, Lahore</p>
              <p>WhatsApp: 03261052244</p>
              <p>Email: mr.alihusnain11@gmail.com</p>
              <p className="text-securitas-red">24/7 Emergency Response</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm">
              © 2024 Guardian Shield. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};