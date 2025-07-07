import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CTASection: React.FC = () => {
  return (
    <section className="py-20 bg-theme-darker relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-theme-blue/5 to-theme-purple/5"></div>
        <div className="absolute top-[30%] right-[10%] w-[30%] h-[30%] bg-theme-blue opacity-5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[20%] left-[15%] w-[25%] h-[25%] bg-theme-purple opacity-5 rounded-full blur-[100px]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="glass max-w-4xl mx-auto rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Build Your <span className="text-gradient">Perfect Theme?</span>
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses that have already transformed their online presence 
            with ThemeMorphic's custom WordPress themes. Start building yours today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/builder">
              <Button size="lg" className="bg-gradient-to-r from-theme-blue to-theme-purple hover:opacity-90 transition-opacity">
                Start Building Now
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-gray-700 hover:bg-gray-800">
                Schedule a Demo
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
