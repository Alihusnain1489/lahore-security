import { LahoreSecurityNavbar } from "@/components/LahoreSecurityNavbar";
import { LahoreSecurityFooter } from "@/components/LahoreSecurityFooter";
import { HeroSection } from "@/components/HeroSection";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, User } from "lucide-react";
import newsHero from "@/assets/news-hero.jpg";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "5 Reasons to Hire Professional Security Guards in Lahore",
      excerpt: "Discover why professional security guards are essential for protecting your business and property in Lahore's dynamic environment.",
      author: "Security Expert",
      date: "March 15, 2024",
      readTime: "5 min read",
      category: "Security Tips"
    },
    {
      id: 2,
      title: "How CCTV Monitoring Prevents Crime in Commercial Areas",
      excerpt: "Learn about the effectiveness of 24/7 CCTV monitoring systems in deterring criminal activities and ensuring business safety.",
      author: "Tech Specialist",
      date: "March 10, 2024",
      readTime: "7 min read",
      category: "Technology"
    },
    {
      id: 3,
      title: "Event Security Checklist for Safe Gatherings",
      excerpt: "A comprehensive guide to planning and implementing security measures for successful and safe events in Lahore.",
      author: "Event Security Manager",
      date: "March 5, 2024",
      readTime: "6 min read",
      category: "Event Security"
    }
  ];

  return (
    <div className="min-h-screen">
      <LahoreSecurityNavbar />
      <HeroSection
        title="Security Insights & News"
        subtitle="Stay informed with the latest security trends, tips, and insights from our expert team at Lahore Security."
        backgroundImage={newsHero}
      />
      
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-lahore-navy mb-4">Latest Articles</h2>
            <p className="text-lahore-gray max-w-2xl mx-auto">
              Expert insights and practical advice to help you make informed security decisions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-video bg-gradient-to-br from-lahore-light to-lahore-navy/20 rounded-t-lg"></div>
                <CardHeader>
                  <div className="flex items-center justify-between text-sm text-lahore-gray mb-2">
                    <span className="bg-lahore-red/10 text-lahore-red px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span>{post.readTime}</span>
                  </div>
                  <CardTitle className="text-xl text-lahore-navy hover:text-lahore-red transition-colors cursor-pointer">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lahore-gray mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-lahore-gray">
                      <User className="h-4 w-4 mr-1" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center text-sm text-lahore-gray">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <Button 
                    className="w-full mt-4 bg-lahore-navy hover:bg-lahore-navy/90 text-white"
                  >
                    Read More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="mt-16 bg-lahore-light rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-lahore-navy mb-4">Stay Updated</h3>
            <p className="text-lahore-gray mb-6 max-w-md mx-auto">
              Subscribe to our newsletter for the latest security insights and company updates
            </p>
            <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-2 border border-lahore-gray/30 rounded-lg focus:outline-none focus:border-lahore-navy"
              />
              <Button className="bg-lahore-red hover:bg-lahore-red/90 text-white px-6">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <LahoreSecurityFooter />
    </div>
  );
};

export default Blog;