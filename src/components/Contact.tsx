import { Phone, Mail, MapPin, MessageCircle, Clock, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Get In Touch</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to secure your safety? Contact us for immediate assistance or consultation
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <Card className="bg-gradient-card shadow-security">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-accent rounded-lg">
                      <Phone className="h-5 w-5 text-accent-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary">WhatsApp & Call</h4>
                      <p className="text-muted-foreground">03261052244</p>
                      <p className="text-sm text-accent">24/7 Emergency Line</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-primary rounded-lg">
                      <Mail className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary">Email</h4>
                      <p className="text-muted-foreground">mr.alihusnain11@gmail.com</p>
                      <p className="text-sm text-accent">Professional Inquiries</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-accent rounded-lg">
                      <MapPin className="h-5 w-5 text-accent-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary">Location</h4>
                      <p className="text-muted-foreground">DHA Phase VI, Lahore</p>
                      <p className="text-sm text-accent">Service Area: All Lahore</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-primary rounded-lg">
                      <Clock className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary">Availability</h4>
                      <p className="text-muted-foreground">24/7 Operations</p>
                      <p className="text-sm text-accent">Emergency Response Ready</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Contact Actions */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card className="bg-gradient-card shadow-security hover:shadow-gold transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="p-4 bg-accent rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <MessageCircle className="h-8 w-8 text-accent-foreground" />
                  </div>
                  <h4 className="text-xl font-semibold text-primary mb-2">WhatsApp Chat</h4>
                  <p className="text-muted-foreground mb-4">
                    Get instant response on WhatsApp for immediate security needs
                  </p>
                  <Button 
                    className="bg-accent text-accent-foreground hover:bg-accent/90 w-full"
                    onClick={() => window.open('https://wa.me/923261052244', '_blank')}
                  >
                    Chat on WhatsApp
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card shadow-security hover:shadow-gold transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="p-4 bg-primary rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Phone className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h4 className="text-xl font-semibold text-primary mb-2">Emergency Call</h4>
                  <p className="text-muted-foreground mb-4">
                    Direct hotline for urgent security assistance and consultations
                  </p>
                  <Button 
                    variant="outline" 
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground w-full"
                    onClick={() => window.open('tel:+923261052244', '_blank')}
                  >
                    Call Now
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Service Areas */}
            <Card className="bg-gradient-card shadow-security">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Shield className="h-6 w-6 text-accent mr-3" />
                  <h3 className="text-xl font-bold text-primary">Service Coverage</h3>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-muted-foreground">DHA Phase I-VI</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-muted-foreground">Gulberg</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-muted-foreground">Model Town</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-muted-foreground">Johar Town</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-muted-foreground">Cantt Area</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-muted-foreground">All Lahore</span>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-accent/10 rounded-lg">
                  <p className="text-center text-primary font-semibold">
                    🚨 Emergency Response: Immediate deployment across Lahore within minutes
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};