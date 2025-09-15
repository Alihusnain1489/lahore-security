import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const SecuritasContact = () => {
  return (
    <section className="py-20 bg-securitas-navy ">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Contact Guardian Shield</h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Get in touch with our security experts for a customized protection solution
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-8 text-white">Get in Touch</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-securitas-red w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">WhatsApp</h4>
                      <p className="text-white/80">03261052244</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-securitas-red w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Email</h4>
                      <p className="text-white/80">mr.alihusnain11@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-securitas-red w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Location</h4>
                      <p className="text-white/80">DHA Phase VI, Lahore</p>
                      <p className="text-white/60 text-sm">Services available across all Lahore</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-securitas-red w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Availability</h4>
                      <p className="text-white/80">24/7 Emergency Response</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Leadership & Training Info */}
          <div className="space-y-8">
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-white">Leadership Team</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-white text-lg">CEO</h4>
                    <p className="text-white/80">CoL(R) Nauman Asghar</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-white text-lg">Manager</h4>
                    <p className="text-white/80">Ali Husnain</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-securitas-red/20 border-securitas-red/30 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-white">Coming Soon</h3>
                <h4 className="text-lg font-medium mb-2 text-white">Physical Fitness Training Camp</h4>
                <p className="text-white/80 mb-6">
                  We're expanding our services to include comprehensive physical fitness training for security professionals and enthusiasts.
                </p>
                <Button 
                  variant="outline" 
                  className="bg-transparent border-white text-white hover:bg-white hover:text-securitas-red"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};