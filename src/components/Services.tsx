import { Shield, Users, Camera, Dumbbell, Star, Baby } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Baby,
    title: "Child Protection Services",
    description: "Safe escort services for children to school and playgrounds with trained security personnel.",
    features: ["School Drop-off/Pick-up", "Playground Supervision", "Trained Child Escorts"]
  },
  {
    icon: Users,
    title: "Family Protection",
    description: "Comprehensive protection for families during shopping, outings, and daily activities.",
    features: ["Market Escorts", "Family Outings", "Home Security"]
  },
  {
    icon: Star,
    title: "VIP & Celebrity Protection",
    description: "Discreet and professional protection services for actors, politicians, and high-profile individuals.",
    features: ["Close Protection", "Event Security", "Privacy Assurance"]
  },
  {
    icon: Shield,
    title: "Women's Safety Services",
    description: "Specialized protection services designed specifically for women's safety and security needs.",
    features: ["Personal Escorts", "Safe Transportation", "Emergency Response"]
  },
  {
    icon: Camera,
    title: "Event Security",
    description: "Professional security management for corporate events, weddings, and private functions.",
    features: ["Crowd Management", "Access Control", "Emergency Protocols"]
  },
  {
    icon: Dumbbell,
    title: "Training Camp (Coming Soon)",
    description: "Physical fitness and self-defense training camp for personal security enhancement.",
    features: ["Fitness Training", "Self-Defense", "Security Awareness"]
  }
];

export const Services = () => {
  return (
    <section id="services" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Our Security Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive protection solutions tailored to your specific security needs across Lahore
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-gradient-card shadow-security hover:shadow-gold transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-primary rounded-lg mr-4">
                    <service.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary">{service.title}</h3>
                </div>
                
                <p className="text-muted-foreground mb-4">{service.description}</p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-foreground">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground mb-4">
            Need a custom security solution? We provide tailored protection services for foreign clients and special requirements.
          </p>
          <div className="inline-flex items-center space-x-2 text-accent font-semibold">
            <Shield className="h-5 w-5" />
            <span>All services available across Lahore - DHA Phase VI Based</span>
          </div>
        </div>
      </div>
    </section>
  );
};