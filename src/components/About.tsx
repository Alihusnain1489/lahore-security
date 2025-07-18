import { Award, MapPin, Clock, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">About Guardian Shield</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Led by military expertise and managed with professional excellence, we deliver uncompromising security solutions
          </p>
        </div>

        {/* Leadership Team */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <Card className="bg-gradient-card shadow-security">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="p-4 bg-primary rounded-full mr-6">
                  <Award className="h-8 w-8 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary">Retired Colonel Nauman Asghar</h3>
                  <p className="text-accent font-semibold">Chief Executive Officer</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                With decades of military service and strategic security expertise, Colonel Nauman Asghar brings 
                unparalleled leadership to Guardian Shield. His extensive experience in defense operations and 
                personnel management ensures the highest standards of security services.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card shadow-security">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="p-4 bg-accent rounded-full mr-6">
                  <Shield className="h-8 w-8 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary">Ali Husnain</h3>
                  <p className="text-accent font-semibold">Company Manager</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Ali Husnain oversees daily operations and client relations, ensuring seamless service delivery 
                and maintaining the highest quality standards. His expertise in security management and customer 
                service excellence drives our operational success.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Company Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-accent mb-2">24/7</div>
            <p className="text-muted-foreground">Security Coverage</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-accent mb-2">100%</div>
            <p className="text-muted-foreground">Lahore Coverage</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-accent mb-2">6+</div>
            <p className="text-muted-foreground">Service Categories</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-accent mb-2">DHA VI</div>
            <p className="text-muted-foreground">Headquarters</p>
          </div>
        </div>

        {/* Key Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="p-4 bg-primary/10 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <MapPin className="h-8 w-8 text-primary" />
            </div>
            <h4 className="text-xl font-semibold text-primary mb-2">Lahore Based</h4>
            <p className="text-muted-foreground">
              Headquartered in DHA Phase VI with comprehensive coverage across all areas of Lahore
            </p>
          </div>

          <div className="text-center">
            <div className="p-4 bg-accent/10 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Clock className="h-8 w-8 text-accent" />
            </div>
            <h4 className="text-xl font-semibold text-primary mb-2">Round-the-Clock</h4>
            <p className="text-muted-foreground">
              24/7 availability for emergency response and continuous security monitoring
            </p>
          </div>

          <div className="text-center">
            <div className="p-4 bg-primary/10 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Award className="h-8 w-8 text-primary" />
            </div>
            <h4 className="text-xl font-semibold text-primary mb-2">Military Excellence</h4>
            <p className="text-muted-foreground">
              Led by retired military leadership ensuring discipline, precision, and reliability
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};