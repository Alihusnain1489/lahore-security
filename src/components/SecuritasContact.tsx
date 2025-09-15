import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const SecuritasContact = () => {
  return (
    <section className="py-20 bg-securitas-navy">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-black">Contact Guardian Shield</h2>
          <p className="text-xl max-w-3xl mx-auto text-gray-700">
            Get in touch with our security experts for a customized protection solution
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <Card className="bg-white border-gray-200">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-8 text-black">Get in Touch</h3>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-securitas-red w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1 text-black">WhatsApp</h4>
                      <p className="text-gray-700">03261052244</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-securitas-red w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1 text-black">Email</h4>
                      <p className="text-gray-700">mr.alihusnain11@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-securitas-red w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1 text-black">Location</h4>
                      <p className="text-gray-700">DHA Phase VI, Lahore</p>
                      <p className="text-gray-500 text-sm">Services available across all Lahore</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-securitas-red w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1 text-black">Availability</h4>
                      <p className="text-gray-700">24/7 Emergency Response</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Leadership & Training Info */}
          <div className="space-y-8">
            <Card className="bg-white border-gray-200">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-black">Leadership Team</h3>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-lg text-black">CEO</h4>
                    <p className="text-gray-700">Retired Colonel Nauman Asghar</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg text-black">Manager</h4>
                    <p className="text-gray-700">Ali Husnain</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-securitas-red/10 border-securitas-red/30">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-black">Coming Soon</h3>
                <h4 className="text-lg font-medium mb-2 text-black">
                  Physical Fitness Training Camp
                </h4>
                <p className="text-gray-700 mb-6">
                  We're expanding our services to include comprehensive physical fitness training
                  for security professionals and enthusiasts.
                </p>
                <Button
                  variant="outline"
                  className="bg-transparent border-securitas-red text-securitas-red hover:bg-securitas-red hover:text-white"
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
