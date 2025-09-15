import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight } from "lucide-react";

export const HomeBlog = () => {
  const featuredBlogs = [
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
          {featuredBlogs.map((blog) => (
            <Card key={blog.id} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer">
              <div className="aspect-video bg-gradient-to-br from-lahore-navy to-lahore-navy/80 rounded-t-lg relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-lahore-red text-white px-3 py-1 rounded-full text-sm font-medium">
                    {blog.category}
                  </span>
                </div>
              </div>
              <CardHeader className="pb-4">
                <CardTitle className="text-xl text-lahore-navy group-hover:text-lahore-red transition-colors line-clamp-2">
                  {blog.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-lahore-gray leading-relaxed mb-6 line-clamp-3">
                  {blog.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-lahore-gray mb-4">
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    <span>{blog.author}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{blog.date}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-lahore-gray">{blog.readTime}</span>
                  <Button variant="ghost" size="sm" className="text-lahore-navy hover:text-lahore-red group-hover:translate-x-1 transition-all">
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