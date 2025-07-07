import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center gradient-bg overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-[10%] -right-[10%] w-[40%] h-[40%] bg-theme-purple opacity-10 rounded-full blur-[120px]"></div>
        <div className="absolute top-[60%] -left-[5%] w-[30%] h-[30%] bg-theme-blue opacity-10 rounded-full blur-[100px]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10 mt-16 md:mt-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left animate-fade-in">
            <span className="inline-block px-3 py-1 mb-6 text-xs font-medium text-theme-blue bg-theme-blue/10 rounded-full">
              WordPress Theme Builder
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-gradient">Build Custom Themes,</span>
              <br />Fast & Lightweight
            </h1>
            <p className="text-lg text-gray-300 mb-8 max-w-lg mx-auto lg:mx-0">
              Create professional, bloat-free WordPress themes tailored to your exact needs.
              No coding required, just your vision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/themes">
                <Button size="lg" className="bg-gradient-to-r from-theme-blue to-theme-purple hover:opacity-90 transition-opacity">
                  Start Building
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/themes">
                <Button size="lg" variant="outline" className="border-gray-700 hover:bg-gray-800">
                  View Themes Gallery
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="hidden lg:block relative">
            <div className="relative aspect-square w-full">
              <div className="absolute inset-0 glass rounded-2xl overflow-hidden">
                <div className="w-full h-full bg-cover bg-center opacity-80" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=1920&auto=format')" }}></div>
                <div className="absolute inset-0 bg-gradient-to-br from-theme-purple/30 to-theme-blue/30"></div>
              </div>
              
              {/* Floating UI elements */}
              <div className="absolute top-[15%] -left-[10%] glass-card p-4 w-[60%] animate-float" style={{ animationDelay: "0s" }}>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-theme-purple/30 flex items-center justify-center">
                    <span className="text-theme-blue">01</span>
                  </div>
                  <div className="text-left">
                    <h3 className="font-medium text-white">Select Industry</h3>
                    <p className="text-xs text-gray-300">Business, Real Estate, Education...</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute top-[40%] -right-[10%] glass-card p-4 w-[60%] animate-float" style={{ animationDelay: "1s" }}>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-theme-blue/30 flex items-center justify-center">
                    <span className="text-theme-purple">02</span>
                  </div>
                  <div className="text-left">
                    <h3 className="font-medium text-white">Customize Design</h3>
                    <p className="text-xs text-gray-300">Colors, Layouts, Typography...</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute top-[65%] left-[10%] glass-card p-4 w-[60%] animate-float" style={{ animationDelay: "2s" }}>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-theme-blue/30 to-theme-purple/30 flex items-center justify-center">
                    <span className="text-white">03</span>
                  </div>
                  <div className="text-left">
                    <h3 className="font-medium text-white">Download & Deploy</h3>
                    <p className="text-xs text-gray-300">Instant WordPress Integration</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
          <span className="text-sm text-gray-400 mb-2">Scroll to explore</span>
          <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
