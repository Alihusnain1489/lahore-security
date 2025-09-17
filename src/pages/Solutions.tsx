import { LahoreSecurityNavbar } from "@/components/LahoreSecurityNavbar";
import { LahoreSecurityFooter } from "@/components/LahoreSecurityFooter";
import { HeroSection } from "@/components/HeroSection";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, ShoppingCart, Heart, GraduationCap, Factory, Home, Shield } from "lucide-react";
import { motion } from "framer-motion";
import solutionsHero from "@/assets/solutions-hero.jpg";
import corporateBg from "@/assets/corporate-security-bg.jpg";
import retailBg from "@/assets/retail-security-bg.jpg";
import healthcareBg from "@/assets/healthcare-security-bg.jpg";
import educationBg from "@/assets/education-security-bg.jpg";

const Solutions = () => {
  const solutionHighlights = [
    {
      title: "Corporate Security Excellence",
      description: "Comprehensive protection for businesses and corporate facilities",
      image: corporateBg,
      clients: "500+ Corporations"
    },
    {
      title: "Retail Security Solutions",
      description: "Specialized protection for retail environments and shopping centers",
      image: retailBg,
      clients: "200+ Retail Stores"
    },
    {
      title: "Healthcare Security",
      description: "Professional security tailored for medical facilities and hospitals",
      image: healthcareBg,
      clients: "50+ Healthcare Facilities"
    },
    {
      title: "Educational Security",
      description: "Safe learning environments for schools and educational institutions",
      image: educationBg,
      clients: "100+ Educational Institutions"
    }
  ];

  const solutions = [
    {
      icon: Building2,
      title: "Corporate Security",
      description: "Comprehensive security solutions for office buildings and corporate facilities",
      features: [
        "Executive protection services",
        "Building access control",
        "Visitor management systems", 
        "Emergency response planning",
        "Security consulting"
      ],
      industries: ["Financial institutions", "Government offices", "Technology companies", "Legal firms"]
    },
    {
      icon: ShoppingCart,
      title: "Retail Security",
      description: "Specialized security services for retail stores and shopping centers",
      features: [
        "Loss prevention programs",
        "Customer service security",
        "Cash handling procedures",
        "Inventory protection",
        "Emergency procedures"
      ],
      industries: ["Shopping malls", "Department stores", "Retail chains", "Specialty shops"]
    },
    {
      icon: Heart,
      title: "Healthcare Security",
      description: "Professional security tailored for healthcare facilities and hospitals",
      features: [
        "Patient and visitor safety",
        "HIPAA compliance support",
        "Emergency department security",
        "Pharmaceutical protection",
        "Incident documentation"
      ],
      industries: ["Hospitals", "Clinics", "Medical centers", "Pharmaceutical companies"]
    },
    {
      icon: GraduationCap,
      title: "Educational Security",
      description: "Safety and security solutions for educational institutions",
      features: [
        "Campus safety programs",
        "Student protection services",
        "Event security management",
        "Emergency response protocols",
        "Visitor screening"
      ],
      industries: ["Universities", "Schools", "Training centers", "Educational facilities"]
    },
    {
      icon: Factory,
      title: "Industrial Security",
      description: "Heavy-duty security solutions for manufacturing and industrial facilities",
      features: [
        "Perimeter security systems",
        "Asset protection programs",
        "Industrial safety protocols",
        "Equipment monitoring",
        "Shift security coverage"
      ],
      industries: ["Manufacturing plants", "Warehouses", "Industrial complexes", "Power plants"]
    },
    {
      icon: Home,
      title: "Residential Security",
      description: "Tailored security services for residential communities and housing societies",
      features: [
        "Gated community security",
        "Residential patrol services",
        "Emergency response systems",
        "Visitor access control",
        "Community safety programs"
      ],
      industries: ["Housing societies", "Apartment complexes", "Gated communities", "Private residences"]
    }
  ];

  return (
    <div className="min-h-screen">
      <LahoreSecurityNavbar />
      <HeroSection
        title="Comprehensive Industry Solutions"
        subtitle="Tailored security solutions designed to meet the unique challenges and requirements of different industries and business sectors across Lahore and Punjab."
        backgroundImage={solutionsHero}
      />
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">

        {/* Solution Highlight Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {solutionHighlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="relative overflow-hidden group hover:shadow-xl hover:scale-102 transition-all duration-300">
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${highlight.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-lahore-navy/90 to-lahore-navy/70"></div>
              </div>
              <CardContent className="relative z-10 p-6 text-center text-white">
                <Shield className="h-8 w-8 text-lahore-red mx-auto mb-3" />
                <h3 className="text-lg font-bold mb-2">{highlight.title}</h3>
                <p className="text-white/90 text-sm mb-3">{highlight.description}</p>
                <div className="bg-lahore-red px-3 py-1 rounded-full inline-block">
                  <span className="text-sm font-semibold">{highlight.clients}</span>
                </div>
                  </CardContent>
                </Card>
              </motion.div>
              ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="hover:shadow-lg hover:scale-102 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <solution.icon className="h-12 w-12 text-lahore-red mr-4" />
                  <CardTitle className="text-lahore-navy">{solution.title}</CardTitle>
                </div>
                <p className="text-gray-600">{solution.description}</p>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <h4 className="font-semibold text-lahore-navy mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <div className="w-2 h-2 bg-lahore-red rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-lahore-navy mb-3">Industries We Serve:</h4>
                  <div className="flex flex-wrap gap-2">
                    {solution.industries.map((industry, idx) => (
                      <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                        {industry}
                      </span>
                    ))}
                  </div>
                </div>

                <Button className="w-full bg-lahore-red hover:bg-lahore-red/90">
                  Get Custom Quote
                </Button>
              </CardContent>
            </Card>
            </motion.div>
          ))}
        </div>

        <div className="bg-white rounded-lg p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-lahore-navy mb-4">Why Choose Our Solutions?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our industry-specific approach ensures that you receive security solutions 
              that understand and address the unique challenges of your business sector.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-lahore-red/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Building2 className="h-8 w-8 text-lahore-red" />
              </div>
              <h3 className="font-semibold text-lahore-navy mb-2">Industry Expertise</h3>
              <p className="text-gray-600 text-sm">Deep understanding of sector-specific security challenges and regulations</p>
            </div>

            <div className="text-center">
              <div className="bg-lahore-red/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-lahore-red" />
              </div>
              <h3 className="font-semibold text-lahore-navy mb-2">Customized Approach</h3>
              <p className="text-gray-600 text-sm">Tailored security plans that fit your specific operational requirements</p>
            </div>

            <div className="text-center">
              <div className="bg-lahore-red/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="h-8 w-8 text-lahore-red" />
              </div>
              <h3 className="font-semibold text-lahore-navy mb-2">Ongoing Support</h3>
              <p className="text-gray-600 text-sm">Continuous monitoring and adjustment of security protocols as needed</p>
            </div>
          </div>

          <div className="text-center mt-8">
            <Button size="lg" className="bg-lahore-red hover:bg-lahore-red/90">
              Schedule Consultation
            </Button>
          </div>
        </div>
        </div>
      </div>
      <LahoreSecurityFooter />
    </div>
  );
};

export default Solutions;