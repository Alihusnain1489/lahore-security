import { Shield, Users, Building, Car, Eye, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import mannedGuardingBg from "@/assets/manned-guarding-bg.jpg";
import cctvMonitoringBg from "@/assets/cctv-monitoring-bg.jpg";
import eventSecurityBg from "@/assets/event-security-bg.jpg";

export const LahoreSecurityServices = () => {
  const services = [
    {
      icon: Shield,
      title: "Manned Guarding",
      description: "Trained guards for residential, commercial, and industrial properties with 24/7 surveillance",
      image: mannedGuardingBg
    },
    {
      icon: Eye,
      title: "CCTV Monitoring",
      description: "Advanced surveillance systems with real-time monitoring and remote access capabilities",
      image: cctvMonitoringBg
    },
    {
      icon: Users,
      title: "Event Security",
      description: "Professional crowd management, access control, and VIP protection for all event types",
      image: eventSecurityBg
    },
    {
      icon: Car,
      title: "Mobile Patrols",
      description: "Rapid response vehicle patrols for large areas and multiple site monitoring",
      image: mannedGuardingBg
    },
    {
      icon: Building,
      title: "Corporate Security",
      description: "Tailored security solutions for offices, banks, shopping centers, and corporate facilities",
      image: cctvMonitoringBg
    },
    {
      icon: Clock,
      title: "Emergency Response",
      description: "24/7 emergency response team with quick deployment across Lahore and surrounding areas",
      image: eventSecurityBg
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
            <Card key={index} className="border-none shadow-xl hover:shadow-2xl transition-all duration-300 group overflow-hidden bg-white hover:scale-105">
              <div 
                className="aspect-video bg-cover bg-center relative rounded-t-lg"
                style={{ backgroundImage: `url(${service.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-lahore-navy/90 to-lahore-navy/30"></div>
                <div className="absolute bottom-4 left-4 bg-white/20 backdrop-blur-sm rounded-full p-3">
                  <service.icon className="h-8 w-8 text-white drop-shadow-lg" />
                </div>
              </div>
              <CardContent className="p-8 text-center bg-white">
                <h3 className="text-2xl font-bold text-lahore-navy mb-4 group-hover:text-lahore-red transition-colors">
                  {service.title}
                </h3>
                <p className="text-lahore-gray leading-relaxed mb-6 text-base">
                  {service.description}
                </p>
                <Button className="bg-lahore-navy hover:bg-lahore-red text-white transition-all duration-300 shadow-lg hover:shadow-xl">
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