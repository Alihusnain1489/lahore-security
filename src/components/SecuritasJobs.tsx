import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const SecuritasJobs = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Video/Image Section */}
          <div className="relative">
            <div className="bg-securitas-navy rounded-lg overflow-hidden aspect-video flex items-center justify-center">
              <div className="text-center p-8">
                <div className="text-red-600 text-2xl mb-4">●●●</div>
                <h3 className="text-xl font-semibold mb-2">Guardian Shield - We help make your world a safer place</h3>
                <p className="text-sm opacity-90">Professional Security Services</p>
                <Button 
                  variant="outline" 
                  className="mt-4 bg-red-500 border-white text-white "
                >
                  Watch Video
                </Button>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div>
            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-securitas-navy mb-6">
                  Apply for a Job Today
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  If you are seeking a career that is constantly evolving and full of professional 
                  opportunities, join the Guardian Shield team. Please follow the link to explore 
                  and apply for job roles. Some parts of the recruitment process may be conducted 
                  virtually. Once you are contacted, a Guardian Shield HR Specialist will provide 
                  you with the details of our recruitment process.
                </p>
                <p className="text-gray-700 font-medium mb-8">
                  Find a job that suits your skills.
                </p>
                <Button 
                  size="lg"
                  className="bg-red-500 hover:bg-securitas-navy/90 text-white px-8 py-6 text-lg"
                >
                  APPLY NOW
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};