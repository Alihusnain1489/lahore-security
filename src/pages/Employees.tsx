import { LahoreSecurityNavbar } from "@/components/LahoreSecurityNavbar";
import { LahoreSecurityFooter } from "@/components/LahoreSecurityFooter";
import { HeroSection } from "@/components/HeroSection";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, Users, Trophy, BookOpen, Shield, Clock, Phone, Mail } from "lucide-react";
import employeesHero from "@/assets/employees-hero.jpg";

const Employees = () => {
  const resources = [
    {
      icon: FileText,
      title: "Employee Handbook",
      description: "Complete guide to policies, procedures, and expectations",
      type: "PDF Document"
    },
    {
      icon: Shield,
      title: "Safety Protocols",
      description: "Essential safety guidelines and emergency procedures",
      type: "Training Material"
    },
    {
      icon: Clock,
      title: "Scheduling System",
      description: "View your schedule and request time off",
      type: "Online Portal"
    },
    {
      icon: BookOpen,
      title: "Training Modules",
      description: "Ongoing education and skill development programs",
      type: "E-Learning"
    },
    {
      icon: Users,
      title: "Performance Portal",
      description: "Track your performance metrics and career progress",
      type: "Dashboard"
    },
    {
      icon: Trophy,
      title: "Recognition Center",
      description: "View awards, achievements, and appreciation letters",
      type: "Archive"
    }
  ];

  const benefits = [
    {
      category: "Health & Wellness",
      items: ["Medical insurance coverage", "Dental and vision plans", "Mental health support", "Fitness program discounts", "Annual health checkups", "Wellness workshops"]
    },
    {
      category: "Financial Benefits", 
      items: ["Competitive salary", "Performance bonuses", "Overtime compensation", "End-of-service benefits", "Transportation allowance", "Meal vouchers"]
    },
    {
      category: "Professional Development",
      items: ["Paid training programs", "Certification assistance", "Career advancement opportunities", "Skills development workshops", "Leadership development", "International certifications"]
    },
    {
      category: "Work-Life Balance",
      items: ["Flexible scheduling", "Paid time off", "Holiday pay", "Family support programs", "Childcare assistance", "Recreation facilities"]
    }
  ];

  const trainingPrograms = [
    {
      title: "Basic Security Training",
      duration: "40 hours",
      description: "Fundamental security principles and procedures",
      required: true
    },
    {
      title: "Customer Service Excellence", 
      duration: "16 hours",
      description: "Professional communication and service delivery",
      required: true
    },
    {
      title: "Emergency Response Certification",
      duration: "24 hours", 
      description: "First aid, CPR, and emergency procedures",
      required: false
    },
    {
      title: "Advanced Security Operations",
      duration: "32 hours",
      description: "Specialized security techniques and leadership",
      required: false
    },
    {
      title: "Technology & Surveillance Systems",
      duration: "20 hours",
      description: "CCTV operation, access control, and digital security",
      required: false
    },
    {
      title: "Crisis Management & De-escalation",
      duration: "18 hours",
      description: "Conflict resolution and crisis communication skills",
      required: false
    }
  ];

  return (
    <div className="min-h-screen">
      <LahoreSecurityNavbar />
      <HeroSection
        title="Employee Resources & Development"
        subtitle="Welcome to your employee portal. Access training materials, resources, benefits information, and professional development opportunities designed to support your career growth."
        backgroundImage={employeesHero}
      />
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">

        {/* Quick Access Resources */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {resources.map((resource, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader className="text-center">
                <resource.icon className="h-12 w-12 text-securitas-red mx-auto mb-4" />
                <CardTitle className="text-securitas-navy">{resource.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-3">{resource.description}</p>
                <Badge variant="secondary">{resource.type}</Badge>
                <Button className="w-full mt-4 bg-securitas-red hover:bg-securitas-red/90">
                  Access Resource
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Training Programs */}
          <div>
            <h2 className="text-2xl font-bold text-securitas-navy mb-6 flex items-center">
              <BookOpen className="h-6 w-6 mr-2" />
              Training Programs
            </h2>
            <div className="space-y-4">
              {trainingPrograms.map((program, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-securitas-navy">{program.title}</CardTitle>
                      {program.required && (
                        <Badge className="bg-securitas-red">Required</Badge>
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Clock className="h-4 w-4" />
                      <span>{program.duration}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{program.description}</p>
                    <Button variant="outline" className="border-securitas-red text-securitas-red hover:bg-securitas-red hover:text-white">
                      Enroll Now
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Employee Benefits */}
          <div>
            <h2 className="text-2xl font-bold text-securitas-navy mb-6 flex items-center">
              <Trophy className="h-6 w-6 mr-2" />
              Employee Benefits
            </h2>
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-securitas-navy">{benefit.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {benefit.items.map((item, idx) => (
                        <li key={idx} className="flex items-center text-gray-600">
                          <div className="w-2 h-2 bg-securitas-red rounded-full mr-3"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Important Links */}
        <div className="bg-white rounded-lg p-8">
          <h2 className="text-2xl font-bold text-securitas-navy mb-6 text-center">Important Links & Contacts</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Users className="h-12 w-12 text-securitas-red mx-auto mb-4" />
              <h3 className="font-semibold text-lahore-navy mb-2">HR Department</h3>
              <p className="text-gray-600 text-sm mb-3">For questions about benefits, policies, or workplace issues</p>
              <p className="text-lahore-red font-medium flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                hr@lahoresecurity.pk
              </p>
              <p className="text-gray-600 flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                +92 42 3658 7410
              </p>
            </div>

            <div className="text-center">
              <BookOpen className="h-12 w-12 text-securitas-red mx-auto mb-4" />
              <h3 className="font-semibold text-lahore-navy mb-2">Training Portal</h3>
              <p className="text-gray-600 text-sm mb-3">Access online training modules and track your progress</p>
              <Button className="bg-lahore-red hover:bg-lahore-red/90">
                Login to Portal
              </Button>
            </div>

            <div className="text-center">
              <Shield className="h-12 w-12 text-securitas-red mx-auto mb-4" />
              <h3 className="font-semibold text-lahore-navy mb-2">Emergency Support</h3>
              <p className="text-gray-600 text-sm mb-3">24/7 support for work-related emergencies</p>
              <p className="text-lahore-red font-medium text-lg flex items-center justify-center">
                <Phone className="h-5 w-5 mr-2" />
                +92 300 8552 147
              </p>
            </div>
          </div>
        </div>
        </div>
      </div>
      <LahoreSecurityFooter />
    </div>
  );
};

export default Employees;