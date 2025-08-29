import { useState } from "react";
import { Menu, X, Search, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const SecuritasNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    {
      name: "About Us",
      path: "/about"
    },
    {
      name: "Services",
      path: "/services"
    },
    {
      name: "Solutions",
      path: "/solutions"
    },
    {
      name: "Careers", 
      path: "/careers"
    },
    {
      name: "Our Employees",
      path: "/employees"
    },
    {
      name: "News",
      path: "/news"
    },
    {
      name: "Contact Us",
      path: "/contact"
    }
  ];

  return (
    <nav className="bg-securitas-navy text-white fixed top-0 left-0 right-0 z-50">
      {/* Top Bar */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-12 text-sm">
            <div className="hidden md:flex items-center space-x-6">
              <span>EN</span>
              <button className="flex items-center space-x-1 hover:text-gray-300 transition-colors">
                <Globe className="h-4 w-4" />
                <span>Global Sites</span>
              </button>
            </div>
            <div className="flex items-center space-x-4 ml-auto">
              <Search className="h-4 w-4 hidden sm:block" />
              <Button 
                variant="outline" 
                size="sm"
                className="bg-transparent border-white text-white hover:bg-white hover:text-securitas-navy text-xs sm:text-sm px-3 sm:px-4"
              >
                <span className="hidden sm:inline">Request a Quote</span>
                <span className="sm:hidden">Quote</span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-lg sm:text-xl font-bold flex items-center">
              <span className="text-securitas-red">●●●</span>
              <span className="ml-2">
                <span className="hidden sm:inline">Guardian Shield</span>
                <span className="sm:hidden">GS</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navItems.map((item) => (
              <Link 
                key={item.name}
                to={item.path}
                className="hover:text-gray-300 transition-colors py-2 text-sm xl:text-base"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:bg-white/10"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-white/10">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-white hover:text-gray-300 transition-colors py-2 px-2 rounded"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-white/10">
                <Button 
                  variant="outline" 
                  className="bg-transparent border-white text-white hover:bg-white hover:text-securitas-navy w-full"
                  onClick={() => setIsOpen(false)}
                >
                  Request a Quote
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};