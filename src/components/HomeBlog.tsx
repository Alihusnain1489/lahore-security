import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight } from "lucide-react";

export const HomeBlog = () => {
  const featuredBlogs = [
    {
      id: 1,
      title: "5 Reasons to Hire Professional Security Guards in Lahore",
      excerpt: "Discover why professional security guards are essential for protecting your business and property in Lahore's dynamic commercial environment and growing security needs.",
      author: "Ahmed Khan",
      date: "March 15, 2024",
      readTime: "5 min read",
      category: "Security Tips"
    },
    {
      id: 2,
      title: "How CCTV Monitoring Prevents Crime in Commercial Areas",
      excerpt: "Learn about the effectiveness of 24/7 CCTV monitoring systems in deterring criminal activities, reducing theft, and ensuring comprehensive business safety.",
      author: "Sarah Ali",
      date: "March 10, 2024",
      readTime: "7 min read",
      category: "Technology"
    },
    {
      id: 3,
      title: "Event Security Checklist for Safe Gatherings",
      excerpt: "A comprehensive guide to planning and implementing security measures for successful and safe events, from small corporate meetings to large public gatherings.",
      author: "Muhammad Hassan",
      date: "March 5, 2024",
      readTime: "6 min read",
      category: "Event Security"
    },
    {
      id: 4,
      title: "Mobile Patrol Benefits for Large Properties",
      excerpt: "Understanding how mobile patrol services provide cost-effective security coverage for warehouses, industrial sites, and large residential complexes.",
      author: "Fatima Sheikh",
      date: "February 28, 2024",
      readTime: "4 min read",
      category: "Mobile Patrols"
    },
    {
      id: 5,
      title: "Corporate Security Best Practices in Pakistan",
      excerpt: "Essential security protocols every business should implement to protect employees, assets, and confidential information in today's business environment.",
      author: "Ali Raza",
      date: "February 25, 2024",
      readTime: "8 min read",
      category: "Corporate Security"
    },
    {
      id: 6,
      title: "Emergency Response: First 5 Minutes Matter",
      excerpt: "How professional security teams respond to emergencies and why rapid response capabilities are crucial for minimizing damage and ensuring safety.",
      author: "Ayesha Malik",
      date: "February 20, 2024",
      readTime: "6 min read",
      category: "Emergency Response"
    }
  ];

  return (
    <section className="py-20 bg-lahore-light/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-lahore-navy mb-6">
            Security Insights & News
          </h2>
          <p className="text-xl text-lahore-gray max-w-3xl mx-auto">
            Stay informed with the latest security trends, expert tips, and industry insights from our professional team
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {featuredBlogs.slice(0, 6).map((blog) => (
            <Card key={blog.id} className="border-none shadow-xl hover:shadow-2xl transition-all duration-300 group cursor-pointer bg-white hover:scale-105">
              <div className="aspect-video bg-gradient-to-br from-lahore-navy via-lahore-navy/90 to-lahore-red/80 rounded-t-lg relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <span className="bg-lahore-red/90 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                    {blog.category}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4">
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2">
                    <Calendar className="h-6 w-6 text-white" />
                  </div>
                </div>
              </div>
              <CardHeader className="pb-4 bg-white">
                <CardTitle className="text-xl font-bold text-lahore-navy group-hover:text-lahore-red transition-colors line-clamp-2 leading-tight">
                  {blog.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0 bg-white">
                <p className="text-lahore-gray leading-relaxed mb-6 line-clamp-3 text-base">
                  {blog.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-lahore-gray mb-4 bg-lahore-light/30 rounded-lg p-3">
                  <div className="flex items-center font-medium">
                    <User className="h-4 w-4 mr-2 text-lahore-red" />
                    <span>{blog.author}</span>
                  </div>
                  <div className="flex items-center font-medium">
                    <Calendar className="h-4 w-4 mr-2 text-lahore-red" />
                    <span>{blog.date}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-lahore-navy bg-lahore-light/50 px-3 py-1 rounded-full">{blog.readTime}</span>
                  <Button className="bg-lahore-navy hover:bg-lahore-red text-white group-hover:translate-x-1 transition-all shadow-lg">
                    Read More <ArrowRight className="h-4 w-4 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            className="bg-lahore-navy hover:bg-lahore-navy/90 text-white px-8 py-3"
            size="lg"
          >
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  );
};