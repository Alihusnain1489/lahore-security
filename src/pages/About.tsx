import { LahoreSecurityNavbar } from "@/components/LahoreSecurityNavbar";
import { LahoreSecurityFooter } from "@/components/LahoreSecurityFooter";
import { HeroSection } from "@/components/HeroSection";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Users, Award, Clock, Building, Target, Star } from "lucide-react";
import aboutHero from "@/assets/about-hero.jpg";
import corporateBg from "@/assets/corporate-security-bg.jpg";
import retailBg from "@/assets/retail-security-bg.jpg";
import trainingBg from "@/assets/training-bg.jpg";

const About = () => {
  const achievements = [
    {
      title: "Corporate Excellence",
      description: "Leading provider of corporate security solutions across Lahore",
      image: corporateBg,
      stats: "500+ Corporate Clients"
    },
    {
      title: "Retail Protection",
      description: "Specialized security services for shopping centers and retail stores",
      image: retailBg,
      stats: "200+ Retail Locations"
    },
    {
      title: "Professional Training",
      description: "Advanced training programs for security personnel excellence",
      image: trainingBg,
      stats: "1000+ Trained Guards"
    }
  ];

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
          {/* Achievement Cards with Background Images */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {achievements.map((achievement, index) => (
              <Card key={index} className="relative overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${achievement.image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-lahore-navy/90 to-lahore-navy/70"></div>
                </div>
                <CardContent className="relative z-10 p-8 text-center text-white">
                  <h3 className="text-xl font-bold mb-3">{achievement.title}</h3>
                  <p className="text-white/90 mb-4">{achievement.description}</p>
                  <div className="bg-lahore-red px-4 py-2 rounded-full inline-block">
                    <span className="font-semibold">{achievement.stats}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

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