import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight, CheckCircle, Building, Shield } from "lucide-react";
import { motion } from "framer-motion";

// Import blog images
import securityGuardImg from "@/assets/security-guard-blog.jpg";
import cctvControlRoomImg from "@/assets/cctv-control-room-blog.jpg";
import eventSecurityImg from "@/assets/event-security-blog.jpg";
import mobilePatrolImg from "@/assets/mobile-patrol-blog.jpg";
import corporateSecurityImg from "@/assets/corporate-security-blog.jpg";
import emergencyResponseImg from "@/assets/emergency-response-blog.jpg";

// Import project showcase images
import mallSecurityImg from "@/assets/mall-security-project.jpg";
import bankSecurityImg from "@/assets/bank-security-project.jpg";
import industrialSecurityImg from "@/assets/industrial-security-project.jpg";
import residentialSecurityImg from "@/assets/residential-security-project.jpg";

export const HomeBlog = () => {
  const featuredBlogs = [
    {
      id: 1,
      title: "5 Reasons to Hire Professional Security Guards in Lahore",
      excerpt: "Discover why professional security guards are essential for protecting your business and property in Lahore's dynamic commercial environment and growing security needs.",
      author: "Ahmed Khan",
      date: "March 15, 2024",
      readTime: "5 min read",
      category: "Security Tips",
      image: securityGuardImg
    },
    {
      id: 2,
      title: "How CCTV Monitoring Prevents Crime in Commercial Areas",
      excerpt: "Learn about the effectiveness of 24/7 CCTV monitoring systems in deterring criminal activities, reducing theft, and ensuring comprehensive business safety.",
      author: "Sarah Ali",
      date: "March 10, 2024",
      readTime: "7 min read",
      category: "Technology",
      image: cctvControlRoomImg
    },
    {
      id: 3,
      title: "Event Security Checklist for Safe Gatherings",
      excerpt: "A comprehensive guide to planning and implementing security measures for successful and safe events, from small corporate meetings to large public gatherings.",
      author: "Muhammad Hassan",
      date: "March 5, 2024",
      readTime: "6 min read",
      category: "Event Security",
      image: eventSecurityImg
    },
    {
      id: 4,
      title: "Mobile Patrol Benefits for Large Properties",
      excerpt: "Understanding how mobile patrol services provide cost-effective security coverage for warehouses, industrial sites, and large residential complexes.",
      author: "Fatima Sheikh",
      date: "February 28, 2024",
      readTime: "4 min read",
      category: "Mobile Patrols",
      image: mobilePatrolImg
    },
    {
      id: 5,
      title: "Corporate Security Best Practices in Pakistan",
      excerpt: "Essential security protocols every business should implement to protect employees, assets, and confidential information in today's business environment.",
      author: "Ali Raza",
      date: "February 25, 2024",
      readTime: "8 min read",
      category: "Corporate Security",
      image: corporateSecurityImg
    },
    {
      id: 6,
      title: "Emergency Response: First 5 Minutes Matter",
      excerpt: "How professional security teams respond to emergencies and why rapid response capabilities are crucial for minimizing damage and ensuring safety.",
      author: "Ayesha Malik",
      date: "February 20, 2024",
      readTime: "6 min read",
      category: "Emergency Response",
      image: emergencyResponseImg
    }
  ];

  const completedProjects = [
    {
      id: 1,
      title: "Grand Mall Lahore - Complete Security Overhaul",
      description: "Implemented comprehensive security solution including 50+ CCTV cameras, 24/7 guard stations, and crowd management systems for one of Lahore's largest shopping destinations.",
      client: "Grand Mall Management",
      completion: "December 2023",
      scope: "Mall Security",
      guards: "15 Guards",
      image: mallSecurityImg,
      features: ["24/7 CCTV Monitoring", "Crowd Control Systems", "Emergency Response Team", "Access Control"]
    },
    {
      id: 2,
      title: "United Bank Branch Network Security",
      description: "Secured 12 bank branches across Lahore with state-of-the-art security systems, trained personnel, and rapid response protocols ensuring zero security incidents.",
      client: "United Bank Limited",
      completion: "November 2023",
      scope: "Banking Security",
      guards: "36 Guards",
      image: bankSecurityImg,
      features: ["Armed Security Guards", "Vault Protection", "ATM Security", "Customer Safety Protocols"]
    },
    {
      id: 3,
      title: "Industrial Zone Perimeter Security",
      description: "Developed and deployed comprehensive perimeter security for 5-acre industrial facility including mobile patrols, sensor systems, and control room monitoring.",
      client: "Pak Industrial Corp",
      completion: "October 2023",
      scope: "Industrial Security",
      guards: "20 Guards",
      image: industrialSecurityImg,
      features: ["Perimeter Monitoring", "Mobile Patrol Units", "24/7 Control Room", "Asset Protection"]
    },
    {
      id: 4,
      title: "DHA Phase 5 Residential Security",
      description: "Enhanced security infrastructure for premium residential community serving 500+ families with gated access, patrol services, and emergency response systems.",
      client: "DHA Lahore",
      completion: "September 2023",
      scope: "Residential Security",
      guards: "12 Guards",
      image: residentialSecurityImg,
      features: ["Gated Community Access", "Resident Safety Patrols", "Emergency Response", "Visitor Management"]
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

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {featuredBlogs.slice(0, 6).map((blog, index) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="border-none shadow-xl hover:shadow-2xl transition-all duration-300 group cursor-pointer bg-white hover:scale-105">
              <div className="aspect-video relative overflow-hidden rounded-t-lg">
                <img 
                  src={blog.image} 
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
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
              </motion.div>
              ))}
        </div>

        {/* Completed Projects Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-lahore-navy mb-4 flex items-center justify-center gap-3">
              <CheckCircle className="h-8 w-8 text-lahore-red" />
              Completed Security Projects
            </h3>
            <p className="text-lg text-lahore-gray max-w-2xl mx-auto">
              Showcasing our successful security implementations across Lahore's leading businesses and communities
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {completedProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="border-none shadow-xl hover:shadow-2xl transition-all duration-300 group cursor-pointer bg-white hover:scale-102">
                <div className="aspect-video relative overflow-hidden rounded-t-lg">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <div className="bg-green-500/90 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg flex items-center gap-2">
                      <CheckCircle className="h-4 w-4" />
                      Completed
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2">
                      <Shield className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </div>
                <CardHeader className="pb-4 bg-white">
                  <CardTitle className="text-xl font-bold text-lahore-navy group-hover:text-lahore-red transition-colors line-clamp-2 leading-tight">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0 bg-white">
                  <p className="text-lahore-gray leading-relaxed mb-4 line-clamp-3 text-base">
                    {project.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                    <div className="bg-lahore-light/30 rounded-lg p-3">
                      <div className="flex items-center text-lahore-gray mb-1">
                        <Building className="h-4 w-4 mr-2 text-lahore-red" />
                        <span className="font-medium">Client</span>
                      </div>
                      <span className="text-lahore-navy font-semibold">{project.client}</span>
                    </div>
                    <div className="bg-lahore-light/30 rounded-lg p-3">
                      <div className="flex items-center text-lahore-gray mb-1">
                        <Calendar className="h-4 w-4 mr-2 text-lahore-red" />
                        <span className="font-medium">Completed</span>
                      </div>
                      <span className="text-lahore-navy font-semibold">{project.completion}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.features.slice(0, 3).map((feature, index) => (
                      <span key={index} className="text-xs bg-lahore-navy/10 text-lahore-navy px-3 py-1 rounded-full font-medium">
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-lahore-navy bg-lahore-light/50 px-3 py-1 rounded-full">{project.guards}</span>
                    <Button className="bg-lahore-navy hover:bg-lahore-red text-white group-hover:translate-x-1 transition-all shadow-lg">
                      View Details <ArrowRight className="h-4 w-4 ml-1" />
                    </Button>
                  </div>
                  </CardContent>
                </Card>
              </motion.div>
              ))}
          </div>
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