import { LahoreSecurityNavbar } from "@/components/LahoreSecurityNavbar";
import { LahoreSecurityFooter } from "@/components/LahoreSecurityFooter";
import { HeroSection } from "@/components/HeroSection";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, DollarSign, Users, Briefcase, Award } from "lucide-react";
import careersHero from "@/assets/careers-hero.jpg";

const Careers = () => {
  const jobOpenings = [
    {
      title: "Security Guard - Day Shift",
      location: "Lahore, Punjab",
      type: "Full-time",
      salary: "PKR 25,000 - 35,000",
      requirements: ["High school diploma", "Security training certificate", "Clean background check", "Physical fitness"]
    },
    {
      title: "Security Supervisor",
      location: "Lahore, Punjab", 
      type: "Full-time",
      salary: "PKR 40,000 - 55,000",
      requirements: ["2+ years security experience", "Leadership skills", "First aid certification", "Communication skills"]
    },
    {
      title: "Mobile Patrol Officer",
      location: "Lahore, Punjab",
      type: "Full-time", 
      salary: "PKR 30,000 - 45,000",
      requirements: ["Valid driving license", "Security experience", "GPS knowledge", "Emergency response training"]
    },
    {
      title: "CCTV Monitoring Specialist",
      location: "Lahore, Punjab",
      type: "Full-time",
      salary: "PKR 35,000 - 50,000",
      requirements: ["Technical background", "Attention to detail", "Computer literacy", "Night shift availability"]
    },
    {
      title: "Security Manager",
      location: "Lahore, Punjab",
      type: "Full-time",
      salary: "PKR 60,000 - 80,000",
      requirements: ["5+ years management experience", "Security certifications", "Team leadership", "Strategic planning"]
    },
    {
      title: "Event Security Coordinator",
      location: "Lahore, Punjab",
      type: "Part-time",
      salary: "PKR 28,000 - 40,000",
      requirements: ["Event management experience", "Crowd control training", "Communication skills", "Flexible schedule"]
    }
  ];

  const benefits = [
    "Competitive salary packages",
    "Health insurance coverage",
    "Paid training programs", 
    "Career advancement opportunities",
    "Uniform and equipment provided",
    "Performance bonuses",
    "Retirement savings plan",
    "Paid vacation and sick leave",
    "Professional development support",
    "Life insurance coverage"
  ];

  return (
    <div className="min-h-screen">
      <LahoreSecurityNavbar />
      <HeroSection
        title="Build Your Career in Security"
        subtitle="Join our team of dedicated professionals and grow your career in the security industry with comprehensive training, competitive benefits, and advancement opportunities."
        backgroundImage={careersHero}
      />
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-securitas-navy mb-6">Current Job Openings</h2>
            <div className="space-y-6">
              {jobOpenings.map((job, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-securitas-navy mb-2">{job.title}</CardTitle>
                        <div className="flex flex-wrap gap-2 mb-2">
                          <Badge variant="secondary" className="flex items-center">
                            <MapPin className="h-3 w-3 mr-1" />
                            {job.location}
                          </Badge>
                          <Badge variant="outline" className="flex items-center">
                            <Clock className="h-3 w-3 mr-1" />
                            {job.type}
                          </Badge>
                          <Badge variant="outline" className="flex items-center">
                            <DollarSign className="h-3 w-3 mr-1" />
                            {job.salary}
                          </Badge>
                        </div>
                      </div>
                      <Button className="bg-securitas-red hover:bg-securitas-red/90">
                        Apply Now
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-semibold mb-2">Requirements:</h4>
                    <ul className="space-y-1 text-gray-600">
                      {job.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-center">
                          <div className="w-2 h-2 bg-securitas-red rounded-full mr-3"></div>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <Card>
              <CardHeader>
                <CardTitle className="text-securitas-navy flex items-center">
                  <Users className="h-5 w-5 mr-2" />
                  Employee Benefits
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <div className="w-2 h-2 bg-securitas-red rounded-full mr-3"></div>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="text-securitas-navy">Application Process</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm text-gray-600">
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-securitas-red text-white rounded-full flex items-center justify-center text-xs mr-3 mt-0.5">1</div>
                    <span>Submit your application online</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-securitas-red text-white rounded-full flex items-center justify-center text-xs mr-3 mt-0.5">2</div>
                    <span>Background check and verification</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-securitas-red text-white rounded-full flex items-center justify-center text-xs mr-3 mt-0.5">3</div>
                    <span>Interview with our HR team</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-securitas-red text-white rounded-full flex items-center justify-center text-xs mr-3 mt-0.5">4</div>
                    <span>Training and orientation</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="bg-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-securitas-navy mb-4">Ready to Start Your Career?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Don't see a position that matches your skills? Send us your resume and we'll 
            keep you in mind for future opportunities.
          </p>
          <Button size="lg" className="bg-securitas-red hover:bg-securitas-red/90">
            Submit General Application
          </Button>
        </div>
        </div>
      </div>
      <LahoreSecurityFooter />
    </div>
  );
};

export default Careers;