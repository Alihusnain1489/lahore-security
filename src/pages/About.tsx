import { SecuritasNavbar } from "@/components/SecuritasNavbar";
import { SecuritasFooter } from "@/components/SecuritasFooter";
import { HeroSection } from "@/components/HeroSection";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Users, Award, Clock } from "lucide-react";
import aboutHero from "@/assets/about-hero.jpg";

const About = () => {
  return (
    <div className="min-h-screen">
      <SecuritasNavbar />
      <HeroSection
        title="About Guardian Shield"
        subtitle="Over 90 years of protecting what matters most. Learn about our commitment to excellence and our dedicated team of security professionals."
        backgroundImage={aboutHero}
      />
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="text-center">
              <CardHeader>
                <Shield className="h-12 w-12 text-securitas-red mx-auto mb-4" />
                <CardTitle>Trusted Security</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Professional security services you can rely on</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Users className="h-12 w-12 text-securitas-red mx-auto mb-4" />
                <CardTitle>Expert Team</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Highly trained and experienced security professionals</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Award className="h-12 w-12 text-securitas-red mx-auto mb-4" />
                <CardTitle>Quality Service</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Committed to delivering exceptional service quality</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Clock className="h-12 w-12 text-securitas-red mx-auto mb-4" />
                <CardTitle>24/7 Coverage</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Round-the-clock security services available</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-securitas-navy mb-6">Our Mission</h2>
              <p className="text-gray-600 mb-6">
                To provide superior security services that protect people, property, and assets while 
                maintaining the highest standards of professionalism and integrity.
              </p>
              <p className="text-gray-600">
                Our commitment extends beyond basic security to building lasting partnerships with 
                our clients and communities.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-securitas-navy mb-4">Why Choose Us?</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <Shield className="h-5 w-5 text-securitas-red mr-3" />
                  Licensed and bonded security services
                </li>
                <li className="flex items-center">
                  <Users className="h-5 w-5 text-securitas-red mr-3" />
                  Comprehensive background checks
                </li>
                <li className="flex items-center">
                  <Award className="h-5 w-5 text-securitas-red mr-3" />
                  Ongoing training and certification
                </li>
                <li className="flex items-center">
                  <Clock className="h-5 w-5 text-securitas-red mr-3" />
                  Rapid response capabilities
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <SecuritasFooter />
    </div>
  );
};

export default About;