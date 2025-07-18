import { Shield, Users, Building, Car, Eye, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const SecuritasServices = () => {
  const services = [
    {
      icon: Shield,
      title: "Personal Protection",
      description: "Family protection for market visits, school runs, and daily activities"
    },
    {
      icon: Users,
      title: "Celebrity Protection",
      description: "Professional security services for actors and public figures"
    },
    {
      icon: Building,
      title: "Event Security",
      description: "Comprehensive security solutions for events of all sizes"
    },
    {
      icon: Car,
      title: "Mobile Patrol",
      description: "24/7 mobile security patrol services across Lahore"
    },
    {
      icon: Eye,
      title: "Surveillance",
      description: "Advanced monitoring and surveillance systems"
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock security support and emergency response"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-securitas-navy mb-6">
            Our Security Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive security solutions tailored to meet your specific needs across Lahore
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="bg-securitas-navy/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <service.icon className="h-8 w-8 text-securitas-navy" />
                </div>
                <h3 className="text-xl font-semibold text-securitas-navy mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};