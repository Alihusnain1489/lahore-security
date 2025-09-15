import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight } from "lucide-react";

const News = () => {
  const newsArticles = [
    {
      title: "Guardian Shield Expands Security Services Across Lahore",
      excerpt: "We're pleased to announce the expansion of our security services to cover additional areas of Lahore, bringing professional security solutions closer to more communities.",
      date: "January 15, 2025",
      author: "Guardian Shield Team",
      category: "Company News",
      featured: true
    },
    {
      title: "New Advanced Training Program for Security Personnel",
      excerpt: "Our comprehensive training program ensures all security officers receive the latest in security protocols, emergency response, and customer service excellence.",
      date: "January 10, 2025", 
      author: "Training Department",
      category: "Training",
      featured: false
    },
    {
      title: "Partnership with Local Law Enforcement Strengthened",
      excerpt: "Guardian Shield continues to work closely with local police and emergency services to ensure rapid response and comprehensive security coverage.",
      date: "January 5, 2025",
      author: "Management Team",
      category: "Partnerships",
      featured: false
    },
    {
      title: "Award for Excellence in Security Services",
      excerpt: "Guardian Shield has been recognized for outstanding service quality and professionalism in the security industry.",
      date: "December 28, 2024",
      author: "Guardian Shield Team", 
      category: "Awards",
      featured: false
    }
  ];

  const pressReleases = [
    {
      title: "Guardian Shield Launches Mobile Patrol Services",
      date: "January 20, 2025",
      excerpt: "New mobile patrol services provide enhanced security coverage for multiple locations with real-time monitoring and reporting."
    },
    {
      title: "Technology Integration in Security Operations",
      date: "January 8, 2025", 
      excerpt: "Implementation of advanced GPS tracking and digital reporting systems improves service quality and response times."
    }
  ];

  const upcomingEvents = [
    {
      title: "Security Awareness Workshop",
      date: "February 15, 2025",
      location: "Lahore Community Center"
    },
    {
      title: "Job Fair - Security Positions",
      date: "February 28, 2025", 
      location: "Guardian Shield Office"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-securitas-navy mb-4">News & Updates</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay informed about the latest news, updates, and developments from Guardian Shield.
          </p>
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
  );
};

export default News;