import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, ShoppingCart, Heart, GraduationCap } from "lucide-react";

const Solutions = () => {
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
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-securitas-navy mb-4">Industry Solutions</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tailored security solutions designed to meet the unique challenges and requirements 
            of different industries and business sectors.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {solutions.map((solution, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <solution.icon className="h-12 w-12 text-securitas-red mr-4" />
                  <CardTitle className="text-securitas-navy">{solution.title}</CardTitle>
                </div>
                <p className="text-gray-600">{solution.description}</p>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <h4 className="font-semibold text-securitas-navy mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <div className="w-2 h-2 bg-securitas-red rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-securitas-navy mb-3">Industries We Serve:</h4>
                  <div className="flex flex-wrap gap-2">
                    {solution.industries.map((industry, idx) => (
                      <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                        {industry}
                      </span>
                    ))}
                  </div>
                </div>

                <Button className="w-full bg-securitas-red hover:bg-securitas-red/90">
                  Get Custom Quote
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white rounded-lg p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-securitas-navy mb-4">Why Choose Our Solutions?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our industry-specific approach ensures that you receive security solutions 
              that understand and address the unique challenges of your business sector.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-securitas-red/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Building2 className="h-8 w-8 text-securitas-red" />
              </div>
              <h3 className="font-semibold text-securitas-navy mb-2">Industry Expertise</h3>
              <p className="text-gray-600 text-sm">Deep understanding of sector-specific security challenges and regulations</p>
            </div>

            <div className="text-center">
              <div className="bg-securitas-red/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-securitas-red" />
              </div>
              <h3 className="font-semibold text-securitas-navy mb-2">Customized Approach</h3>
              <p className="text-gray-600 text-sm">Tailored security plans that fit your specific operational requirements</p>
            </div>

            <div className="text-center">
              <div className="bg-securitas-red/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="h-8 w-8 text-securitas-red" />
              </div>
              <h3 className="font-semibold text-securitas-navy mb-2">Ongoing Support</h3>
              <p className="text-gray-600 text-sm">Continuous monitoring and adjustment of security protocols as needed</p>
            </div>
          </div>

          <div className="text-center mt-8">
            <Button size="lg" className="bg-securitas-red hover:bg-securitas-red/90">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solutions;