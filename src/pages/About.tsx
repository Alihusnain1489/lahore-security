import { LahoreSecurityNavbar } from "@/components/LahoreSecurityNavbar";
import { LahoreSecurityFooter } from "@/components/LahoreSecurityFooter";
import { HeroSection } from "@/components/HeroSection";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Users, Award, Clock } from "lucide-react";
import aboutHero from "@/assets/about-hero.jpg";

const About = () => {
  return (
    <div className="min-h-screen">
      <LahoreSecurityNavbar />
      <HeroSection
        title="Securing Lahore, Securing You"
        subtitle="Lahore Security is committed to providing reliable and professional security services across Pakistan. With years of experience, our trained personnel and cutting-edge technology ensure complete safety for our clients."
        backgroundImage={aboutHero}
      />
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="text-center">
              <CardHeader>
                <Shield className="h-12 w-12 text-lahore-red mx-auto mb-4" />
                <CardTitle>Trusted Security</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lahore-gray">Professional security services you can rely on</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Users className="h-12 w-12 text-lahore-red mx-auto mb-4" />
                <CardTitle>Expert Team</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lahore-gray">Highly trained and experienced security professionals</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Award className="h-12 w-12 text-lahore-red mx-auto mb-4" />
                <CardTitle>Quality Service</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lahore-gray">Committed to delivering exceptional service quality</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Clock className="h-12 w-12 text-lahore-red mx-auto mb-4" />
                <CardTitle>24/7 Coverage</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lahore-gray">Round-the-clock security services available</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-lahore-navy mb-6">Our Mission</h2>
              <p className="text-lahore-gray mb-6">
                To provide superior security services that protect people, property, and assets while 
                maintaining the highest standards of professionalism and integrity.
              </p>
              <p className="text-lahore-gray">
                Our commitment extends beyond basic security to building lasting partnerships with 
                our clients and communities. We embody our core values: Integrity, Vigilance, and Helpfulness.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-lahore-navy mb-4">Why Choose Lahore Security?</h3>
              <ul className="space-y-3 text-lahore-gray">
                <li className="flex items-center">
                  <Shield className="h-5 w-5 text-lahore-red mr-3" />
                  Licensed and bonded security services
                </li>
                <li className="flex items-center">
                  <Users className="h-5 w-5 text-lahore-red mr-3" />
                  Comprehensive background checks
                </li>
                <li className="flex items-center">
                  <Award className="h-5 w-5 text-lahore-red mr-3" />
                  Ongoing training and certification
                </li>
                <li className="flex items-center">
                  <Clock className="h-5 w-5 text-lahore-red mr-3" />
                  Rapid response capabilities
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <LahoreSecurityFooter />
    </div>
  );
};

export default About;