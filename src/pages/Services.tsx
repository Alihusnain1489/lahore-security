import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Car, KeyRound, Users } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Shield,
      title: "Security Guards",
      description: "Professional, uniformed security officers for your premises",
      features: ["Highly trained personnel", "24/7 availability", "Armed and unarmed options", "Regular patrol reports"]
    },
    {
      icon: Car,
      title: "Mobile Patrol",
      description: "Regular patrol services for multiple locations",
      features: ["Scheduled and random patrols", "Real-time reporting", "Emergency response", "GPS tracking"]
    },
    {
      icon: KeyRound,
      title: "Access Control",
      description: "Comprehensive access management solutions",
      features: ["Electronic access systems", "Visitor management", "Key control", "Entry monitoring"]
    },
    {
      icon: Users,
      title: "Event Security",
      description: "Professional security for events and gatherings",
      features: ["Crowd control", "VIP protection", "Emergency planning", "Coordination with authorities"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-securitas-navy mb-4">Our Security Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive security solutions tailored to meet your specific needs. 
            From individual security guards to complete security systems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <service.icon className="h-12 w-12 text-securitas-red mb-4" />
                <CardTitle className="text-securitas-navy">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <div className="w-2 h-2 bg-securitas-red rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full mt-6 bg-securitas-red hover:bg-securitas-red/90">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-securitas-navy mb-4">Custom Security Solutions</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Every client has unique security needs. We work with you to develop customized 
            security solutions that provide maximum protection within your budget.
          </p>
          <Button size="lg" className="bg-securitas-red hover:bg-securitas-red/90">
            Request Custom Quote
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Services;