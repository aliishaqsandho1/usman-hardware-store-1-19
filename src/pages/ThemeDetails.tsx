
import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, ArrowRight, Star, Download } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// Sample theme data
const themes = {
  "business-pro": {
    id: "business-pro",
    name: "Business Pro",
    category: "Business",
    price: 69,
    rating: 4.8,
    reviews: 124,
    description: "A professional theme perfect for corporate websites, consultancies, and service-based businesses. Features a clean, modern design with optimized conversion elements.",
    features: [
      "Responsive design optimized for all devices",
      "Multiple header and footer layouts",
      "Integrated blog module with categories",
      "Testimonial carousel",
      "Team members showcase",
      "Services showcase with detailed pages",
      "Contact form with Google Maps integration",
      "WooCommerce compatibility",
      "Social media integration",
      "SEO optimized structure",
      "Fast loading speeds",
      "Regular updates"
    ],
    images: [
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=1200&h=800",
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1200&h=800",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200&h=800",
    ]
  },
  "real-estate-plus": {
    id: "real-estate-plus",
    name: "Real Estate Plus",
    category: "Real Estate",
    price: 79,
    rating: 4.7,
    reviews: 87,
    description: "A feature-rich theme designed specifically for real estate agencies, property management companies, and individual realtors. Includes property listings, advanced search, and agent profiles.",
    features: [
      "Property listing management",
      "Advanced property search with filters",
      "Agent profiles and listings",
      "Interactive maps integration",
      "Property comparison tool",
      "Mortgage calculator",
      "Client testimonials",
      "Photo galleries with virtual tours",
      "Open house scheduler",
      "Lead capture forms",
      "Email notification system",
      "Mobile-optimized design"
    ],
    images: [
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1200&h=800",
      "https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&q=80&w=1200&h=800",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1200&h=800",
    ]
  },
  "education-hub": {
    id: "education-hub",
    name: "Education Hub",
    category: "Education",
    price: 59,
    rating: 4.9,
    reviews: 156,
    description: "A comprehensive theme for educational institutions, online learning platforms, and schools. Features course management, event calendars, and faculty profiles.",
    features: [
      "Course catalog and management",
      "Faculty and staff directories",
      "Student registration portal",
      "Events and academic calendar",
      "News and announcements",
      "Resource library",
      "Alumni network",
      "Donation and fundraising capabilities",
      "Campus map integration",
      "Multi-language support",
      "Responsive design for all devices",
      "Accessibility compliant"
    ],
    images: [
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=1200&h=800",
      "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&q=80&w=1200&h=800",
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80&w=1200&h=800",
    ]
  },
  "tech-saas": {
    id: "tech-saas",
    name: "Tech & SaaS",
    category: "Tech",
    price: 89,
    rating: 4.6,
    reviews: 92,
    description: "A modern, sleek theme designed for tech startups, SaaS companies, and digital products. Features app showcases, pricing tables, and integration sections.",
    features: [
      "Product feature showcase",
      "Interactive pricing tables",
      "User testimonials and case studies",
      "API documentation template",
      "Integration partner showcase",
      "Team member profiles",
      "Blog with code highlighting",
      "Newsletter subscription",
      "Live chat integration",
      "Analytics dashboard",
      "A/B testing ready",
      "Regular feature updates"
    ],
    images: [
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1200&h=800",
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&q=80&w=1200&h=800",
      "https://images.unsplash.com/photo-1531973576160-7125cd663d86?auto=format&fit=crop&q=80&w=1200&h=800",
    ]
  }
};

const ThemeDetails: React.FC = () => {
  const { themeId } = useParams<{ themeId: string }>();
  const theme = themeId && themes[themeId as keyof typeof themes];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { toast } = useToast();
  
  const handlePurchase = () => {
    toast({
      title: "Theme Added",
      description: `${theme?.name} has been added to your cart.`,
    });
  };
  
  const handleDownload = () => {
    toast({
      title: "Download Started",
      description: "Your theme download will begin shortly.",
    });
  };
  
  if (!theme) {
    return (
      <div className="min-h-screen bg-theme-darker">
        <Navbar />
        <div className="container mx-auto px-4 py-24 text-center">
          <h1 className="text-3xl font-bold mb-4">Theme Not Found</h1>
          <p className="mb-8">The theme you're looking for doesn't exist or has been removed.</p>
          <Link to="/themes">
            <Button>Browse All Themes</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-theme-darker">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8 mb-12">
            {/* Theme Preview */}
            <div className="w-full lg:w-2/3">
              <div className="glass rounded-xl p-2 overflow-hidden animate-fade-in">
                <div className="relative aspect-[16/9] bg-theme-dark rounded-lg overflow-hidden">
                  <img
                    src={theme.images[currentImageIndex]}
                    alt={`${theme.name} preview`}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Navigation dots */}
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                    {theme.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-3 h-3 rounded-full ${
                          currentImageIndex === index ? "bg-white" : "bg-white/40"
                        }`}
                        aria-label={`View image ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Thumbnails */}
              <div className="flex space-x-4 mt-4 overflow-x-auto pb-2">
                {theme.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`flex-shrink-0 w-24 h-16 rounded-lg overflow-hidden ${
                      currentImageIndex === index
                        ? "ring-2 ring-theme-blue"
                        : "opacity-70"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${theme.name} thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
            
            {/* Theme Info */}
            <div className="w-full lg:w-1/3">
              <div className="glass p-6 rounded-xl h-full animate-fade-in">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 text-xs rounded-full bg-theme-blue/20 text-theme-blue">
                    {theme.category}
                  </span>
                </div>
                
                <h1 className="text-3xl font-bold mb-2">{theme.name}</h1>
                
                <div className="flex items-center mb-6">
                  <div className="flex text-yellow-500 mr-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        fill={i < Math.floor(theme.rating) ? "currentColor" : "none"}
                        className={i < Math.floor(theme.rating) ? "" : "opacity-40"}
                      />
                    ))}
                  </div>
                  <span className="text-gray-400 text-sm">
                    {theme.rating} ({theme.reviews} reviews)
                  </span>
                </div>
                
                <div className="text-3xl font-bold mb-6 text-gradient">
                  ${theme.price}
                </div>
                
                <p className="text-gray-400 mb-8">{theme.description}</p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Button
                    onClick={handlePurchase}
                    className="bg-gradient-to-r from-theme-blue to-theme-purple hover:opacity-90 transition flex-1"
                  >
                    Purchase Theme
                  </Button>
                  
                  <Button variant="outline" onClick={handleDownload} className="flex-1">
                    <Download size={18} className="mr-2" />
                    Demo
                  </Button>
                </div>
                
                <Link
                  to="/builder"
                  className="flex items-center justify-center text-theme-blue hover:text-theme-purple transition"
                >
                  <span>Customize This Theme</span>
                  <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
          </div>
          
          {/* Tabs */}
          <div className="glass rounded-xl p-6 mb-12 animate-fade-in">
            <Tabs defaultValue="features">
              <TabsList className="w-full grid grid-cols-3 mb-6">
                <TabsTrigger value="features">Features</TabsTrigger>
                <TabsTrigger value="requirements">Requirements</TabsTrigger>
                <TabsTrigger value="docs">Documentation</TabsTrigger>
              </TabsList>
              
              <TabsContent value="features" className="animate-fade-in">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-8">
                  {theme.features.map((feature, i) => (
                    <div key={i} className="flex items-start">
                      <div className="bg-theme-blue/20 p-1 rounded mr-3 mt-0.5">
                        <Check size={14} className="text-theme-blue" />
                      </div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="requirements" className="animate-fade-in">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium text-white mb-2">WordPress</h3>
                    <p className="text-gray-400">WordPress 5.8 or higher</p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-white mb-2">PHP</h3>
                    <p className="text-gray-400">PHP 7.4 or higher</p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-white mb-2">Recommended Plugins</h3>
                    <ul className="list-disc list-inside text-gray-400 space-y-1">
                      <li>Elementor Page Builder</li>
                      <li>Contact Form 7</li>
                      <li>WooCommerce (for e-commerce features)</li>
                      <li>Yoast SEO</li>
                    </ul>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="docs" className="animate-fade-in">
                <div className="space-y-4">
                  <p className="text-gray-400">
                    Our comprehensive documentation will guide you through installing, setting up, 
                    and customizing your new theme. Access our knowledge base for videos,
                    tutorials, and frequently asked questions.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                    {["Installation Guide", "Theme Options", "Page Builder", "Custom Fields", "Shortcodes", "Widget Areas"].map((doc, i) => (
                      <div key={i} className="glass-card p-4 cursor-pointer hover:scale-105 transition-all duration-300">
                        <h4 className="font-medium">{doc}</h4>
                        <p className="text-sm text-gray-400 mt-1">View documentation</p>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
          
          {/* Related Themes */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Related Themes</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {Object.values(themes)
                .filter(t => t.id !== theme.id)
                .slice(0, 3)
                .map(relatedTheme => (
                  <Link key={relatedTheme.id} to={`/themes/${relatedTheme.id}`}>
                    <div className="glass-card overflow-hidden group">
                      <div className="aspect-[16/9] bg-theme-dark overflow-hidden">
                        <img
                          src={relatedTheme.images[0]}
                          alt={relatedTheme.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-4">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-medium group-hover:text-theme-blue transition-colors">
                            {relatedTheme.name}
                          </h3>
                          <span className="text-gradient font-bold">
                            ${relatedTheme.price}
                          </span>
                        </div>
                        <span className="text-sm text-gray-400">{relatedTheme.category}</span>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ThemeDetails;
