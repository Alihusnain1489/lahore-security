import { useState } from "react";
import { ChevronDown, Menu, X, Search, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
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
      hasDropdown: true,
      items: ["Our Company", "Leadership", "History", "Careers"]
    },
    {
      name: "Careers",
      hasDropdown: true,
      items: ["Current Openings", "Benefits", "Training"]
    },
    {
      name: "Services",
      hasDropdown: true,
      items: ["Security Guards", "Mobile Patrol", "Access Control", "Event Security"]
    },
    {
      name: "Solutions",
      hasDropdown: true,
      items: ["Corporate", "Retail", "Healthcare", "Education"]
    },
    {
      name: "Our Employees",
      hasDropdown: true,
      items: ["Resources", "Training Portal", "Benefits"]
    },
    {
      name: "Contact Us",
      hasDropdown: true,
      items: ["Get a Quote", "Locations", "Support"]
    },
    {
      name: "News",
      hasDropdown: true,
      items: ["Latest News", "Press Releases", "Events"]
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
            <div className="text-xl font-bold">
              <span className="text-securitas-red">●●●</span>
              <span className="ml-2">Guardian Shield</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <DropdownMenu key={item.name}>
                <DropdownMenuTrigger className="flex items-center space-x-1 hover:text-gray-300 transition-colors py-2">
                  <span>{item.name}</span>
                  {item.hasDropdown && <ChevronDown className="h-4 w-4" />}
                </DropdownMenuTrigger>
                {item.hasDropdown && (
                  <DropdownMenuContent className="bg-white text-foreground min-w-48">
                    {item.items.map((subItem) => (
                      <DropdownMenuItem key={subItem} className="hover:bg-gray-100">
                        {subItem}
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
                  <button className="text-left text-white hover:text-gray-300 transition-colors w-full py-2">
                    {item.name}
                  </button>
                  {item.hasDropdown && (
                    <div className="ml-4 mt-2 space-y-2">
                      {item.items.map((subItem) => (
                        <button
                          key={subItem}
                          className="block text-gray-300 hover:text-white transition-colors text-sm py-1"
                        >
                          {subItem}
                        </button>
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