import { Shield, Users, Building, Car, Eye, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const LahoreSecurityServices = () => {
  const services = [
    {
      icon: Shield,
      title: "Manned Guarding",
      description: "Trained guards for residential, commercial, and industrial properties",
      image: "/api/placeholder/300/200"
    },
    {
      icon: Eye,
      title: "CCTV Monitoring",
      description: "24/7 surveillance with modern technology and monitoring centers",
      image: "/api/placeholder/300/200"
    },
    {
      icon: Users,
      title: "Event Security",
      description: "Crowd management, entry checks, and VIP protection for all events",
      image: "/api/placeholder/300/200"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-lahore-navy mb-6">
            Our Security Services
          </h2>
          <p className="text-xl text-lahore-gray max-w-3xl mx-auto">
            Comprehensive security solutions tailored to meet your specific needs across Lahore and Pakistan
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 group">
              <div className="aspect-video bg-gradient-to-br from-lahore-light to-lahore-navy/10 rounded-t-lg"></div>
              <CardContent className="p-8 text-center">
                <div className="bg-lahore-navy/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <service.icon className="h-8 w-8 text-lahore-navy" />
                </div>
                <h3 className="text-xl font-semibold text-lahore-navy mb-4">
                  {service.title}
                </h3>
                <p className="text-lahore-gray leading-relaxed mb-6">
                  {service.description}
                </p>
                <Button variant="outline" className="border-lahore-navy text-lahore-navy hover:bg-lahore-navy hover:text-white">
                  Request Quote
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-lahore-light rounded-lg p-8 md:p-12">
          <h3 className="text-3xl font-bold text-lahore-navy text-center mb-12">Why Choose Lahore Security?</h3>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <Clock className="h-12 w-12 text-lahore-red mx-auto mb-4" />
              <h4 className="font-semibold text-lahore-navy mb-2">24/7 Availability</h4>
              <p className="text-lahore-gray text-sm">Round-the-clock security services</p>
            </div>
            <div className="text-center">
              <Shield className="h-12 w-12 text-lahore-red mx-auto mb-4" />
              <h4 className="font-semibold text-lahore-navy mb-2">Licensed Guards</h4>
              <p className="text-lahore-gray text-sm">Fully licensed and trained personnel</p>
            </div>
            <div className="text-center">
              <Eye className="h-12 w-12 text-lahore-red mx-auto mb-4" />
              <h4 className="font-semibold text-lahore-navy mb-2">Modern Technology</h4>
              <p className="text-lahore-gray text-sm">Latest security equipment and systems</p>
            </div>
            <div className="text-center">
              <Building className="h-12 w-12 text-lahore-red mx-auto mb-4" />
              <h4 className="font-semibold text-lahore-navy mb-2">Trusted by Businesses</h4>
              <p className="text-lahore-gray text-sm">Serving banks, malls, and offices</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};