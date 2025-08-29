import { useState } from "react";
import { ChevronDown, Menu, X, Search, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const SecuritasNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    {
      name: "About Us",
      path: "/about",
      hasDropdown: true,
      items: [
        { name: "Our Company", path: "/about" },
        { name: "Leadership", path: "/about" },
        { name: "History", path: "/about" },
        { name: "Careers", path: "/careers" }
      ]
    },
    {
      name: "Careers", 
      path: "/careers",
      hasDropdown: true,
      items: [
        { name: "Current Openings", path: "/careers" },
        { name: "Benefits", path: "/careers" },
        { name: "Training", path: "/careers" }
      ]
    },
    {
      name: "Services",
      path: "/services", 
      hasDropdown: true,
      items: [
        { name: "Security Guards", path: "/services" },
        { name: "Mobile Patrol", path: "/services" },
        { name: "Access Control", path: "/services" },
        { name: "Event Security", path: "/services" }
      ]
    },
    {
      name: "Solutions",
      path: "/solutions",
      hasDropdown: true,
      items: [
        { name: "Corporate", path: "/solutions" },
        { name: "Retail", path: "/solutions" },
        { name: "Healthcare", path: "/solutions" },
        { name: "Education", path: "/solutions" }
      ]
    },
    {
      name: "Our Employees",
      path: "/employees",
      hasDropdown: true,
      items: [
        { name: "Resources", path: "/employees" },
        { name: "Training Portal", path: "/employees" },
        { name: "Benefits", path: "/employees" }
      ]
    },
    {
      name: "Contact Us",
      path: "/contact",
      hasDropdown: true,
      items: [
        { name: "Get a Quote", path: "/contact" },
        { name: "Locations", path: "/contact" },
        { name: "Support", path: "/contact" }
      ]
    },
    {
      name: "News",
      path: "/news",
      hasDropdown: true,
      items: [
        { name: "Latest News", path: "/news" },
        { name: "Press Releases", path: "/news" },
        { name: "Events", path: "/news" }
      ]
    }
  ];

  return (
    <nav className="bg-securitas-navy text-white fixed top-0 left-0 right-0 z-50">
      {/* Top Bar */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-12 text-sm">
            <div className="flex items-center space-x-6">
              <span>EN</span>
              <button className="flex items-center space-x-1">
                <Globe className="h-4 w-4" />
                <span>Global Sites</span>
              </button>
            </div>
            <div className="flex items-center space-x-4">
              <Search className="h-4 w-4" />
              <Button 
                variant="outline" 
                size="sm"
                className="bg-transparent border-white text-white hover:bg-white hover:text-securitas-navy"
              >
                Request a Quote
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
            <Link to="/" className="text-xl font-bold">
              <span className="text-securitas-red">●●●</span>
              <span className="ml-2">Guardian Shield</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <DropdownMenu key={item.name}>
                <DropdownMenuTrigger className="flex items-center space-x-1 hover:text-gray-300 transition-colors py-2">
                  <Link to={item.path} className="flex items-center space-x-1">
                    <span>{item.name}</span>
                    {item.hasDropdown && <ChevronDown className="h-4 w-4" />}
                  </Link>
                </DropdownMenuTrigger>
                {item.hasDropdown && (
                  <DropdownMenuContent className="bg-white text-foreground min-w-48">
                    {item.items.map((subItem) => (
                      <DropdownMenuItem key={subItem.name} className="hover:bg-gray-100">
                        <Link to={subItem.path} className="w-full">
                          {subItem.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                )}
              </DropdownMenu>
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
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <div key={item.name}>
                  <Link 
                    to={item.path}
                    className="text-left text-white hover:text-gray-300 transition-colors w-full py-2 block"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.hasDropdown && (
                    <div className="ml-4 mt-2 space-y-2">
                      {item.items.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.path}
                          className="block text-gray-300 hover:text-white transition-colors text-sm py-1"
                          onClick={() => setIsOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Button 
                variant="outline" 
                className="bg-transparent border-white text-white hover:bg-white hover:text-securitas-navy w-fit mt-4"
              >
                Request a Quote
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};