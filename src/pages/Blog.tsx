
import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Search, Calendar, User, Tag } from "lucide-react";

const Blog: React.FC = () => {
  const [filter, setFilter] = useState("all");
  
  const blogPosts = [
    {
      id: 1,
      title: "10 Ways to Speed Up Your WordPress Site",
      excerpt: "Learn how to optimize your WordPress site for maximum performance and speed.",
      category: "performance",
      author: "Alex Morgan",
      date: "April 20, 2025",
      image: "post1"
    },
    {
      id: 2,
      title: "The Future of WordPress Themes in 2025",
      excerpt: "Explore the latest trends and technologies shaping the future of WordPress themes.",
      category: "trends",
      author: "Jordan Lee",
      date: "April 15, 2025",
      image: "post2"
    },
    {
      id: 3,
      title: "How to Create a Custom Theme Without Coding",
      excerpt: "A step-by-step guide to creating your own custom WordPress theme without writing a single line of code.",
      category: "tutorials",
      author: "Taylor Kim",
      date: "April 10, 2025",
      image: "post3"
    },
    {
      id: 4,
      title: "Essential Plugins for Every WordPress Site",
      excerpt: "Discover the must-have plugins that every WordPress website should install.",
      category: "plugins",
      author: "Casey Chen",
      date: "April 5, 2025",
      image: "post4"
    },
    {
      id: 5,
      title: "WordPress Security: Best Practices",
      excerpt: "Protect your WordPress site with these essential security measures and best practices.",
      category: "security",
      author: "Alex Morgan",
      date: "March 30, 2025",
      image: "post5"
    },
    {
      id: 6,
      title: "Building an E-commerce Site with WordPress",
      excerpt: "A comprehensive guide to setting up an online store with WordPress and WooCommerce.",
      category: "tutorials",
      author: "Jordan Lee",
      date: "March 25, 2025",
      image: "post6"
    }
  ];
  
  const filteredPosts = filter === "all" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === filter);
  
  return (
    <div className="min-h-screen bg-theme-darker">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Blog Header */}
          <div className="mb-12 text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              ThemeMorphic <span className="text-gradient">Blog</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Insights, tutorials, and updates from our team of WordPress experts.
            </p>
          </div>
          
          {/* Search and Filters */}
          <div className="max-w-5xl mx-auto mb-12">
            <div className="glass rounded-xl p-6">
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <div className="relative flex-grow">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  <Input 
                    placeholder="Search articles..." 
                    className="pl-10 bg-theme-dark border-gray-700"
                  />
                </div>
                <div className="flex flex-wrap gap-2">
                  {["all", "tutorials", "trends", "performance", "plugins", "security"].map((category) => (
                    <Button 
                      key={category}
                      variant={filter === category ? "default" : "outline"} 
                      size="sm"
                      className={filter === category ? "bg-gradient-to-r from-theme-blue to-theme-purple" : "border-gray-700"}
                      onClick={() => setFilter(category)}
                    >
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Blog Posts Grid */}
          <div className="max-w-5xl mx-auto mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredPosts.map((post) => (
                <Card key={post.id} className="glass-card overflow-hidden hover:transform hover:scale-[1.02] transition-transform">
                  <div className="relative h-48 bg-gray-800 overflow-hidden">
                    <div className="absolute top-0 right-0 bg-theme-purple/80 text-xs font-medium py-1 px-3 rounded-bl-lg">
                      {post.category.charAt(0).toUpperCase() + post.category.slice(1)}
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3">
                      <a href="#" className="hover:text-theme-blue transition-colors">
                        {post.title}
                      </a>
                    </h3>
                    <p className="text-gray-300 mb-4">{post.excerpt}</p>
                  </CardContent>
                  <CardFooter className="px-6 pb-6 pt-0 flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-400">
                      <User size={14} className="mr-1" />
                      <span className="mr-4">{post.author}</span>
                      <Calendar size={14} className="mr-1" />
                      <span>{post.date}</span>
                    </div>
                    <a href="#" className="text-theme-blue text-sm hover:underline">
                      Read More
                    </a>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
          
          {/* Newsletter Section */}
          <div className="max-w-3xl mx-auto">
            <div className="glass rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h2>
              <p className="text-gray-300 mb-6">
                Get the latest WordPress tips, tutorials, and ThemeMorphic updates directly to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input placeholder="Your email address" className="bg-theme-dark border-gray-700" />
                <Button className="bg-gradient-to-r from-theme-blue to-theme-purple hover:opacity-90 transition-opacity whitespace-nowrap">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
