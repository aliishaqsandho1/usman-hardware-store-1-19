import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

// Define theme categories and demo data
const categories = [
  { id: "all", label: "All Themes" },
  { id: "business", label: "Business" },
  { id: "real-estate", label: "Real Estate" },
  { id: "education", label: "Education" },
  { id: "tech", label: "Tech & SaaS" },
  { id: "ecommerce", label: "E-Commerce" },
];

const themes = [
  {
    id: 1,
    title: "Nexus Pro",
    description: "Modern Business Theme",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=800&auto=format",
    category: "business",
  },
  {
    id: 2,
    title: "PropertyPulse",
    description: "Real Estate Showcase",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format",
    category: "real-estate",
  },
  {
    id: 3,
    title: "EduSmart",
    description: "Educational Platform",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format",
    category: "education",
  },
  {
    id: 4,
    title: "TechFlow",
    description: "SaaS Landing Page",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=800&auto=format",
    category: "tech",
  },
  {
    id: 5,
    title: "ShopWave",
    description: "E-Commerce Store",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=800&auto=format",
    category: "ecommerce",
  },
  {
    id: 6,
    title: "Corporax",
    description: "Corporate Identity",
    image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?q=80&w=800&auto=format",
    category: "business",
  },
  {
    id: 7,
    title: "StartupHub",
    description: "Startup Landing Page",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=800&auto=format",
    category: "tech",
  },
  {
    id: 8,
    title: "LuxuryHomes",
    description: "Premium Real Estate",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=800&auto=format",
    category: "real-estate",
  },
  {
    id: 9,
    title: "EduConnect",
    description: "Online Learning Platform",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format",
    category: "education",
  },
  {
    id: 10,
    title: "MarketPlace",
    description: "Multi-Vendor Store",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format",
    category: "ecommerce",
  },
  {
    id: 11,
    title: "EnterprisePlus",
    description: "Enterprise Solutions",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format",
    category: "business",
  },
  {
    id: 12,
    title: "CloudStack",
    description: "Cloud Services Platform",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format",
    category: "tech",
  },
  {
    id: 13,
    title: "UrbanLiving",
    description: "City Apartments",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=800&auto=format",
    category: "real-estate",
  },
  {
    id: 14,
    title: "SkillAcademy",
    description: "Professional Training",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format",
    category: "education",
  },
  {
    id: 15,
    title: "FashionHub",
    description: "Fashion E-Commerce",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&auto=format",
    category: "ecommerce",
  },
  {
    id: 16,
    title: "ConsultPro",
    description: "Consulting Services",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=800&auto=format",
    category: "business",
  },
  {
    id: 17,
    title: "DataViz",
    description: "Analytics Dashboard",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format",
    category: "tech",
  },
  {
    id: 18,
    title: "VillaEstate",
    description: "Luxury Villas",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=800&auto=format",
    category: "real-estate",
  },
  {
    id: 19,
    title: "CodeAcademy",
    description: "Programming School",
    image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?q=80&w=800&auto=format",
    category: "education",
  },
  {
    id: 20,
    title: "ElectroMart",
    description: "Electronics Store",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=800&auto=format",
    category: "ecommerce",
  },
  {
    id: 21,
    title: "FinanceCorp",
    description: "Financial Services",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800&auto=format",
    category: "business",
  },
  {
    id: 22,
    title: "AI Platform",
    description: "AI Solutions Hub",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format",
    category: "tech",
  },
  {
    id: 23,
    title: "CommercialSpace",
    description: "Office Buildings",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format",
    category: "real-estate",
  },
  {
    id: 24,
    title: "LanguageLab",
    description: "Language Learning",
    image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=800&auto=format",
    category: "education",
  },
  {
    id: 25,
    title: "HealthStore",
    description: "Health & Wellness",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?q=80&w=800&auto=format",
    category: "ecommerce",
  },
  {
    id: 26,
    title: "MarketingPro",
    description: "Digital Marketing",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format",
    category: "business",
  },
];

const ShowcaseSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredThemes = activeCategory === "all" 
    ? themes 
    : themes.filter(theme => theme.category === activeCategory);

  return (
    <section className="py-20 bg-theme-dark relative overflow-hidden" id="themes">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[20%] -right-[15%] w-[40%] h-[40%] bg-theme-blue opacity-5 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-[10%] -left-[10%] w-[30%] h-[30%] bg-theme-purple opacity-5 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Theme Showcase</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Browse our collection of professionally designed themes for various industries.
            Customize any theme to match your exact requirements.
          </p>
        </div>

        <Tabs defaultValue="all" value={activeCategory} onValueChange={setActiveCategory} className="w-full">
          <div className="flex justify-center mb-12">
            <TabsList className="glass h-auto p-1 flex flex-wrap justify-center">
              {categories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="data-[state=active]:bg-theme-blue/20 data-[state=active]:text-white px-4 py-2"
                >
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <TabsContent value={activeCategory} className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredThemes.map((theme) => (
                <ThemeCard key={theme.id} theme={theme} />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-12 text-center">
          <Button variant="outline" className="border-gray-700 hover:bg-gray-800">
            View All Themes
          </Button>
        </div>
      </div>
    </section>
  );
};

interface ThemeProps {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
}

const ThemeCard: React.FC<{ theme: ThemeProps }> = ({ theme }) => {
  return (
    <div className="group glass-card overflow-hidden animate-scale-in" style={{ animationDelay: `${theme.id * 0.1}s` }}>
      <div className="relative overflow-hidden aspect-[16/10]">
        <img 
          src={theme.image} 
          alt={theme.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-6 w-full">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-bold text-lg text-white">{theme.title}</h3>
                <p className="text-sm text-gray-300">{theme.description}</p>
              </div>
              <Button size="sm" variant="secondary" className="bg-white/10 text-white hover:bg-white/20">
                Preview
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="p-5">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="font-bold text-white">{theme.title}</h3>
            <p className="text-sm text-gray-400">{theme.description}</p>
          </div>
          <Button size="sm" className="bg-theme-blue hover:bg-theme-blue/90">
            Customize
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ShowcaseSection;
