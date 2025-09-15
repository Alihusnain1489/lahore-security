import { LahoreSecurityNavbar } from "@/components/LahoreSecurityNavbar";
import { LahoreSecurityFooter } from "@/components/LahoreSecurityFooter";
import { HeroSection } from "@/components/HeroSection";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Car, KeyRound, Users, Eye, Clock, Building } from "lucide-react";
import servicesHero from "@/assets/services-hero.jpg";

const Services = () => {
  const services = [
    {
      icon: Shield,
      title: "Manned Guarding",
      description: "Trained guards for residential, commercial, and industrial properties",
      features: ["Licensed security personnel", "24/7 availability", "Armed and unarmed options", "Regular patrol reports"]
    },
    {
      icon: Car,
      title: "Mobile Patrols",
      description: "Rapid response vehicles to monitor and secure large areas",
      features: ["Scheduled and random patrols", "Real-time GPS tracking", "Emergency response", "Detailed reporting"]
    },
    {
      icon: Eye,
      title: "CCTV Monitoring",
      description: "24/7 surveillance with modern technology and monitoring centers",
      features: ["HD camera systems", "Remote monitoring", "Alert notifications", "Digital recording"]
    },
    {
      icon: Users,
      title: "Event Security",
      description: "Crowd management, entry checks, and VIP protection for all events",
      features: ["Crowd control", "VIP protection", "Emergency planning", "Coordination with authorities"]
    },
    {
      icon: Building,
      title: "Corporate Security Solutions",
      description: "Tailored security for offices, banks, and commercial establishments",
      features: ["Access control", "Executive protection", "Risk assessment", "Security consulting"]
    }
  ];

  return (
    <div className="min-h-screen">
      <LahoreSecurityNavbar />
      <HeroSection
        title="Professional Security Services"
        subtitle="Comprehensive security solutions tailored to meet your specific needs across Lahore and Pakistan."
        backgroundImage={servicesHero}
      />
      
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-lahore-navy mb-4">Our Services</h2>
            <p className="text-xl text-lahore-gray max-w-3xl mx-auto">
              From individual security guards to complete security systems, we provide 
              professional solutions for every security need.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <service.icon className="h-12 w-12 text-lahore-red mb-4" />
                  <CardTitle className="text-lahore-navy">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lahore-gray mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-lahore-gray">
                        <div className="w-2 h-2 bg-lahore-red rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6 bg-lahore-red hover:bg-lahore-red/90 text-white">
                    Request Quote
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-white rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-lahore-navy mb-4">Custom Security Solutions</h2>
            <p className="text-lahore-gray mb-6 max-w-2xl mx-auto">
              Every client has unique security needs. We work with you to develop customized 
              security solutions that provide maximum protection within your budget.
            </p>
            <Button size="lg" className="bg-lahore-red hover:bg-lahore-red/90 text-white">
              Request Custom Quote
            </Button>
          </div>
        </div>
      </div>
      
      <LahoreSecurityFooter />
    </div>
  );
};

export default Services;