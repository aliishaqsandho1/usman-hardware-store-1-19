import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Filter } from "lucide-react";

const Themes: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  
  const themes = [
    {
      id: 1,
      name: "Business Pro",
      category: "business",
      description: "A professional theme for modern businesses with custom post types.",
      price: "$79",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      name: "Realtor Premium",
      category: "real-estate",
      description: "Perfect for real estate agents with property listings integration.",
      price: "$89",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop"
    },
    {
      id: 3,
      name: "Edu Learning",
      category: "education",
      description: "An educational theme with course management and student profiles.",
      price: "$79",
      image: "https://images.unsplash.com/photo-1523240794102-9ebd172decd7?w=400&h=300&fit=crop"
    },
    {
      id: 4,
      name: "SaaS Platform",
      category: "tech",
      description: "Modern SaaS theme with landing pages and feature showcases.",
      price: "$99",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop"
    },
    {
      id: 5,
      name: "Creative Portfolio",
      category: "portfolio",
      description: "Showcase your work with this minimal, elegant portfolio theme.",
      price: "$69",
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&h=300&fit=crop"
    },
    {
      id: 6,
      name: "Shop Commerce",
      category: "ecommerce",
      description: "A full-featured e-commerce theme with WooCommerce integration.",
      price: "$109",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop"
    },
    {
      id: 7,
      name: "Restaurant Menu",
      category: "food",
      description: "Display menus and take reservations with this restaurant theme.",
      price: "$79",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop"
    },
    {
      id: 8,
      name: "Legal Practice",
      category: "business",
      description: "Professional theme designed for law firms and legal services.",
      price: "$89",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=300&fit=crop"
    },
    {
      id: 9,
      name: "Health & Wellness",
      category: "health",
      description: "Perfect for fitness centers, spas, and wellness businesses.",
      price: "$79",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop"
    },
    {
      id: 10,
      name: "Photography Studio",
      category: "portfolio",
      description: "Elegant theme for photographers to showcase their work and book sessions.",
      price: "$85",
      image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=400&h=300&fit=crop"
    },
    {
      id: 11,
      name: "Consulting Agency",
      category: "business",
      description: "Professional theme for consulting firms with case studies and testimonials.",
      price: "$95",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop"
    },
    {
      id: 12,
      name: "Event Planner",
      category: "events",
      description: "Complete event planning theme with booking system and gallery showcase.",
      price: "$89",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400&h=300&fit=crop"
    },
    {
      id: 13,
      name: "Tech Startup",
      category: "tech",
      description: "Modern startup theme with product demos and investor relations.",
      price: "$119",
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=400&h=300&fit=crop"
    },
    {
      id: 14,
      name: "Fashion Boutique",
      category: "ecommerce",
      description: "Stylish fashion theme with lookbook and size guide features.",
      price: "$129",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop"
    },
    {
      id: 15,
      name: "Dental Clinic",
      category: "health",
      description: "Medical theme designed for dental practices with appointment booking.",
      price: "$99",
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=400&h=300&fit=crop"
    },
    {
      id: 16,
      name: "Architecture Firm",
      category: "portfolio",
      description: "Sophisticated theme for architects to showcase projects and services.",
      price: "$109",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop"
    },
    {
      id: 17,
      name: "Coffee Shop",
      category: "food",
      description: "Warm and inviting theme for cafes with menu and online ordering.",
      price: "$79",
      image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=400&h=300&fit=crop"
    },
    {
      id: 18,
      name: "Travel Agency",
      category: "travel",
      description: "Adventure-themed design for travel agencies with booking integration.",
      price: "$95",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=300&fit=crop"
    },
    {
      id: 19,
      name: "Music Studio",
      category: "entertainment",
      description: "Dynamic theme for music producers and recording studios.",
      price: "$89",
      image: "https://images.unsplash.com/photo-1598653222000-6b7b7a552625?w=400&h=300&fit=crop"
    },
    {
      id: 20,
      name: "Pet Services",
      category: "services",
      description: "Friendly theme for pet groomers, vets, and pet care services.",
      price: "$75",
      image: "https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=400&h=300&fit=crop"
    },
    {
      id: 21,
      name: "Interior Design",
      category: "portfolio",
      description: "Luxury interior design theme with project galleries and consultations.",
      price: "$115",
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=400&h=300&fit=crop"
    },
    {
      id: 22,
      name: "Financial Advisor",
      category: "business",
      description: "Trustworthy theme for financial planning and investment services.",
      price: "$105",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop"
    },
    {
      id: 23,
      name: "Wedding Planner",
      category: "events",
      description: "Romantic theme for wedding planners with vendor directories.",
      price: "$99",
      image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=400&h=300&fit=crop"
    },
    {
      id: 24,
      name: "Mobile App",
      category: "tech",
      description: "App landing page theme with feature highlights and download links.",
      price: "$89",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop"
    },
    {
      id: 25,
      name: "Jewelry Store",
      category: "ecommerce",
      description: "Elegant jewelry theme with product zoom and wishlist features.",
      price: "$139",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=300&fit=crop"
    },
    {
      id: 26,
      name: "Yoga Studio",
      category: "health",
      description: "Peaceful theme for yoga studios with class schedules and meditation guides.",
      price: "$85",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop"
    },
    {
      id: 27,
      name: "Marketing Agency",
      category: "business",
      description: "Creative marketing theme with case studies and ROI calculators.",
      price: "$125",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop"
    },
    {
      id: 28,
      name: "Bakery & Pastry",
      category: "food",
      description: "Sweet bakery theme with online ordering and custom cake builder.",
      price: "$89",
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=300&fit=crop"
    },
    {
      id: 29,
      name: "Personal Trainer",
      category: "health",
      description: "Motivational theme for fitness trainers with workout plans and progress tracking.",
      price: "$79",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop"
    },
    {
      id: 30,
      name: "Art Gallery",
      category: "portfolio",
      description: "Sophisticated gallery theme for artists and art exhibitions with virtual tours.",
      price: "$95",
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=300&fit=crop"
    },
    {
      id: 31,
      name: "Car Dealership",
      category: "automotive",
      description: "Professional automotive theme with inventory management and financing calculator.",
      price: "$119",
      image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400&h=300&fit=crop"
    },
    {
      id: 32,
      name: "Beauty Salon",
      category: "beauty",
      description: "Glamorous salon theme with appointment booking and service showcase.",
      price: "$89",
      image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=400&h=300&fit=crop"
    },
    {
      id: 33,
      name: "Construction Company",
      category: "construction",
      description: "Robust construction theme with project portfolios and client testimonials.",
      price: "$105",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&h=300&fit=crop"
    },
    {
      id: 34,
      name: "Bookstore",
      category: "ecommerce",
      description: "Literary bookstore theme with book reviews and author events calendar.",
      price: "$85",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop"
    },
    {
      id: 35,
      name: "Digital Agency",
      category: "tech",
      description: "Modern digital agency theme with project showcases and client portals.",
      price: "$135",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=300&fit=crop"
    },
    {
      id: 36,
      name: "Garden Center",
      category: "retail",
      description: "Natural garden center theme with plant care guides and seasonal catalogs.",
      price: "$79",
      image: "https://images.unsplash.com/photo-1416879595882-338989a2e8c0?w=400&h=300&fit=crop"
    },
    {
      id: 37,
      name: "Language School",
      category: "education",
      description: "Multilingual education theme with course catalogs and student progress tracking.",
      price: "$95",
      image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=400&h=300&fit=crop"
    },
    {
      id: 38,
      name: "Music School",
      category: "education",
      description: "Harmonious music school theme with lesson scheduling and student recitals.",
      price: "$89",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop"
    },
    {
      id: 39,
      name: "Tattoo Studio",
      category: "art",
      description: "Edgy tattoo studio theme with artist portfolios and appointment booking.",
      price: "$85",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop"
    },
    {
      id: 40,
      name: "Veterinary Clinic",
      category: "health",
      description: "Compassionate vet clinic theme with pet care tips and emergency contact.",
      price: "$99",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop"
    },
    {
      id: 41,
      name: "Bike Shop",
      category: "retail",
      description: "Cycling enthusiast theme with bike customization and repair services.",
      price: "$75",
      image: "https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?w=400&h=300&fit=crop"
    },
    {
      id: 42,
      name: "Craft Brewery",
      category: "food",
      description: "Artisanal brewery theme with beer tasting events and tour bookings.",
      price: "$109",
      image: "https://images.unsplash.com/photo-1518176258765-fc3d1b2f42c8?w=400&h=300&fit=crop"
    },
    {
      id: 43,
      name: "Tech Support",
      category: "services",
      description: "Professional IT support theme with ticket system and knowledge base.",
      price: "$95",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop"
    },
    {
      id: 44,
      name: "Photography Classes",
      category: "education",
      description: "Creative photography education theme with course modules and student galleries.",
      price: "$89",
      image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=400&h=300&fit=crop"
    },
    {
      id: 45,
      name: "Antique Shop",
      category: "ecommerce",
      description: "Vintage antique shop theme with item history and restoration services.",
      price: "$95",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop"
    },
    {
      id: 46,
      name: "Spa & Wellness",
      category: "health",
      description: "Luxurious spa theme with treatment menus and relaxation guides.",
      price: "$115",
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=400&h=300&fit=crop"
    },
    {
      id: 47,
      name: "Furniture Store",
      category: "ecommerce",
      description: "Elegant furniture store theme with room planner and customization tools.",
      price: "$125",
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=300&fit=crop"
    },
    {
      id: 48,
      name: "Security Company",
      category: "services",
      description: "Trustworthy security services theme with monitoring systems and emergency contacts.",
      price: "$105",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop"
    },
    {
      id: 49,
      name: "Wine Tasting",
      category: "food",
      description: "Sophisticated wine tasting theme with cellar tours and wine club membership.",
      price: "$99",
      image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400&h=300&fit=crop"
    }
  ];
  
  const filteredThemes = selectedCategory === "all" 
    ? themes 
    : themes.filter(theme => theme.category === selectedCategory);
  
  const categories = [
    { id: "all", name: "All Themes" },
    { id: "business", name: "Business" },
    { id: "real-estate", name: "Real Estate" },
    { id: "education", name: "Education" },
    { id: "tech", name: "Tech & SaaS" },
    { id: "portfolio", name: "Portfolio" },
    { id: "ecommerce", name: "E-commerce" },
    { id: "food", name: "Food & Restaurant" },
    { id: "health", name: "Health" },
    { id: "events", name: "Events" },
    { id: "travel", name: "Travel" },
    { id: "entertainment", name: "Entertainment" },
    { id: "services", name: "Services" },
    { id: "automotive", name: "Automotive" },
    { id: "beauty", name: "Beauty" },
    { id: "construction", name: "Construction" },
    { id: "retail", name: "Retail" },
    { id: "art", name: "Art" }
  ];
  
  return (
    <div className="min-h-screen bg-theme-darker">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Theme Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              WordPress <span className="text-gradient">Themes</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Browse our collection of premium, lightweight WordPress themes designed for performance and flexibility.
            </p>
          </div>
          
          {/* Search and Filters */}
          <div className="max-w-6xl mx-auto mb-12">
            <div className="glass rounded-xl p-6">
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="relative flex-grow">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  <Input placeholder="Search themes..." className="pl-10 bg-theme-dark border-gray-700" />
                </div>
                <div className="flex items-center space-x-2">
                  <Filter size={18} className="text-gray-400" />
                  <span className="text-gray-400">Filters:</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  <select className="bg-theme-dark border border-gray-700 rounded-md px-3 py-2 text-sm">
                    <option>Price: Any</option>
                    <option>Under $50</option>
                    <option>$50 - $100</option>
                    <option>Over $100</option>
                  </select>
                  <select className="bg-theme-dark border border-gray-700 rounded-md px-3 py-2 text-sm">
                    <option>Sort: Featured</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Newest First</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          
          {/* Categories */}
          <div className="max-w-6xl mx-auto mb-8 overflow-x-auto">
            <div className="flex space-x-2 min-w-max pb-4">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  className={selectedCategory === category.id 
                    ? "bg-gradient-to-r from-theme-blue to-theme-purple" 
                    : "border-gray-700"}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </div>
          
          {/* Theme Grid */}
          <div className="max-w-6xl mx-auto mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredThemes.map((theme) => (
                <Card key={theme.id} className="glass-card overflow-hidden">
                  <div 
                    className="h-48 relative bg-cover bg-center"
                    style={{ backgroundImage: `url(${theme.image})` }}
                  >
                    <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                    <div className="absolute bottom-4 right-4">
                      <Button size="sm" variant="outline">Preview</Button>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-bold">{theme.name}</h3>
                      <span className="text-theme-blue font-medium">{theme.price}</span>
                    </div>
                    <p className="text-gray-300 mb-4">{theme.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="bg-theme-dark px-3 py-1 rounded-full text-xs text-gray-400 capitalize">
                        {theme.category.replace('-', ' ')}
                      </span>
                      <Button className="bg-gradient-to-r from-theme-blue to-theme-purple hover:opacity-90 transition-opacity">
                        Buy Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          {/* CTA */}
          <div className="max-w-4xl mx-auto text-center">
            <div className="glass rounded-2xl p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Can't Find The Perfect Theme?
              </h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Build your own custom theme with our easy-to-use theme builder. No coding required!
              </p>
              <Button size="lg" className="bg-gradient-to-r from-theme-blue to-theme-purple hover:opacity-90 transition-opacity">
                Try Theme Builder
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Themes;
