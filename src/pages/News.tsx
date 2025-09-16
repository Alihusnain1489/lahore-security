import { LahoreSecurityNavbar } from "@/components/LahoreSecurityNavbar";
import { LahoreSecurityFooter } from "@/components/LahoreSecurityFooter";
import { HeroSection } from "@/components/HeroSection";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight, Newspaper, Globe, Award } from "lucide-react";
import newsHero from "@/assets/news-hero.jpg";
import pressBg from "@/assets/press-conference-bg.jpg";
import corporateBg from "@/assets/corporate-security-bg.jpg";
import trainingBg from "@/assets/training-bg.jpg";

const News = () => {
  const featuredNews = [
    {
      title: "Media Coverage",
      description: "Lahore Security featured in leading news outlets for innovation in security technology",
      image: pressBg,
      category: "Press Coverage"
    },
    {
      title: "Corporate Partnerships",
      description: "Expanding partnerships with major corporations for enhanced security solutions",
      image: corporateBg,
      category: "Business Growth"
    },
    {
      title: "Training Excellence",
      description: "Award-winning training programs setting new industry standards",
      image: trainingBg,
      category: "Training & Development"
    }
  ];

  const newsArticles = [
    {
      title: "Lahore Security Expands Operations to Three New Districts",
      excerpt: "We're proud to announce our expansion into DHA, Gulberg, and Johar Town, bringing professional security services to more communities across Lahore with state-of-the-art technology and trained personnel.",
      date: "March 15, 2025",
      author: "Lahore Security Team",
      category: "Company News",
      featured: true
    },
    {
      title: "Revolutionary AI-Powered Surveillance System Launched",
      excerpt: "Our new artificial intelligence-enhanced CCTV monitoring system provides real-time threat detection and automated incident response, setting new standards in security technology.",
      date: "March 10, 2025", 
      author: "Technology Department",
      category: "Innovation",
      featured: false
    },
    {
      title: "Partnership with Punjab Police for Enhanced Security",
      excerpt: "Lahore Security strengthens collaboration with law enforcement agencies to provide integrated security solutions and faster emergency response times across the city.",
      date: "March 5, 2025",
      author: "Management Team",
      category: "Partnerships",
      featured: false
    },
    {
      title: "Security Excellence Award from Chamber of Commerce",
      excerpt: "Lahore Security receives prestigious recognition for outstanding contribution to business security and crime prevention in the commercial sector.",
      date: "February 28, 2025",
      author: "Lahore Security Team", 
      category: "Awards",
      featured: false
    },
    {
      title: "Advanced Crisis Management Training Program Introduced",
      excerpt: "New comprehensive training modules focus on emergency response, crisis communication, and advanced security protocols to ensure our team stays ahead of evolving threats.",
      date: "February 20, 2025",
      author: "Training Department",
      category: "Training",
      featured: false
    },
    {
      title: "Mobile Security Units Deployed Across Lahore",
      excerpt: "Fleet of 50 new mobile patrol vehicles equipped with GPS tracking and communication systems now provides rapid response security services throughout the metropolitan area.",
      date: "February 15, 2025",
      author: "Operations Team",
      category: "Services",
      featured: false
    }
  ];

  const pressReleases = [
    {
      title: "Lahore Security Introduces Smart Building Integration",
      date: "March 18, 2025",
      excerpt: "Revolutionary IoT-based security solutions for smart buildings provide automated access control and integrated monitoring systems."
    },
    {
      title: "International Security Standards Certification Achieved",
      date: "March 12, 2025", 
      excerpt: "Lahore Security becomes first local company to achieve ISO 27001 and ISO 45001 certifications for information security and occupational health standards."
    },
    {
      title: "Community Safety Initiative Program Launched",
      date: "March 8, 2025",
      excerpt: "Free security awareness workshops and emergency preparedness training offered to residential communities across Lahore."
    },
    {
      title: "Strategic Partnership with Leading Technology Providers",
      date: "February 25, 2025",
      excerpt: "Collaboration with international security technology companies brings cutting-edge surveillance and access control solutions to Pakistan."
    }
  ];

  const upcomingEvents = [
    {
      title: "Annual Security Excellence Conference",
      date: "April 15, 2025",
      location: "Expo Center Lahore"
    },
    {
      title: "Career Fair - Security & Technology Jobs",
      date: "April 8, 2025", 
      location: "Lahore Security Headquarters"
    },
    {
      title: "Community Safety Workshop Series",
      date: "March 30, 2025",
      location: "Multiple Locations Across Lahore"
    },
    {
      title: "Advanced Security Training Certification",
      date: "April 22, 2025",
      location: "Training Academy, Model Town"
    }
  ];

  return (
    <div className="min-h-screen">
      <LahoreSecurityNavbar />
      <HeroSection
        title="Latest News & Updates"
        subtitle="Stay informed about the latest developments, innovations, and achievements from Lahore Security. Discover our ongoing commitment to excellence in security services."
        backgroundImage={newsHero}
      />
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">

        {/* Featured News Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {featuredNews.map((news, index) => (
            <Card key={index} className="relative overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${news.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-securitas-navy/90 to-securitas-navy/70"></div>
              </div>
              <CardContent className="relative z-10 p-8 text-center text-white">
                <Badge className="bg-securitas-red mb-4">{news.category}</Badge>
                <h3 className="text-xl font-bold mb-3">{news.title}</h3>
                <p className="text-white/90 mb-4">{news.description}</p>
                <Button className="bg-white text-securitas-navy hover:bg-white/90">
                  Read More <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main News Section */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-securitas-navy mb-6">Latest News</h2>
            
            {/* Featured Article */}
            {newsArticles.filter(article => article.featured).map((article, index) => (
              <Card key={index} className="mb-8 border-l-4 border-l-securitas-red">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className="bg-securitas-red">{article.category}</Badge>
                    <Badge variant="secondary">Featured</Badge>
                  </div>
                  <CardTitle className="text-securitas-navy text-xl">{article.title}</CardTitle>
                  <div className="flex items-center gap-4 text-gray-500 text-sm">
                    <span className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {article.date}
                    </span>
                    <span className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {article.author}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{article.excerpt}</p>
                  <Button className="bg-securitas-red hover:bg-securitas-red/90">
                    Read More <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}

            {/* Regular Articles */}
            <div className="space-y-6">
              {newsArticles.filter(article => !article.featured).map((article, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline">{article.category}</Badge>
                    </div>
                    <CardTitle className="text-securitas-navy">{article.title}</CardTitle>
                    <div className="flex items-center gap-4 text-gray-500 text-sm">
                      <span className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {article.date}
                      </span>
                      <span className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        {article.author}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{article.excerpt}</p>
                    <Button variant="outline" className="border-securitas-red text-securitas-red hover:bg-securitas-red hover:text-white">
                      Read More <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Press Releases */}
            <Card>
              <CardHeader>
                <CardTitle className="text-securitas-navy">Press Releases</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {pressReleases.map((release, index) => (
                    <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0 last:pb-0">
                      <h4 className="font-semibold text-securitas-navy mb-1">{release.title}</h4>
                      <p className="text-sm text-gray-500 mb-2">{release.date}</p>
                      <p className="text-sm text-gray-600">{release.excerpt}</p>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4">
                  View All Press Releases
                </Button>
              </CardContent>
            </Card>

            {/* Upcoming Events */}
            <Card>
              <CardHeader>
                <CardTitle className="text-securitas-navy">Upcoming Events</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingEvents.map((event, index) => (
                    <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0 last:pb-0">
                      <h4 className="font-semibold text-securitas-navy mb-1">{event.title}</h4>
                      <p className="text-sm text-gray-500 mb-1">{event.date}</p>
                      <p className="text-sm text-gray-600">{event.location}</p>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4">
                  View All Events
                </Button>
              </CardContent>
            </Card>

            {/* Newsletter Signup */}
            <Card>
              <CardHeader>
                <CardTitle className="text-securitas-navy">Stay Updated</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4 text-sm">
                  Subscribe to our newsletter to receive the latest news and updates.
                </p>
                <div className="space-y-3">
                  <input 
                    type="email" 
                    placeholder="Enter your email"
                    className="w-full p-2 border border-gray-300 rounded-md text-sm"
                  />
                  <Button className="w-full bg-securitas-red hover:bg-securitas-red/90">
                    Subscribe
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        </div>
      </div>
      <LahoreSecurityFooter />
    </div>
  );
};

export default News;