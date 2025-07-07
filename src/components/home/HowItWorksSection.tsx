
import React from "react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    number: "01",
    title: "Browse Themes",
    description:
      "Explore our diverse collection of themes designed for different industries and purposes.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7"></path>
      </svg>
    ),
  },
  {
    number: "02",
    title: "Select & Customize",
    description:
      "Choose a base theme and customize every aspect to match your brand and requirements.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path>
      </svg>
    ),
  },
  {
    number: "03",
    title: "Preview",
    description:
      "See your theme in action with our live preview tool before finalizing your design.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
      </svg>
    ),
  },
  {
    number: "04",
    title: "Download & Install",
    description:
      "Download your custom theme and easily install it on your WordPress site.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
      </svg>
    ),
  },
];

const HowItWorksSection: React.FC = () => {
  return (
    <section className="py-20 bg-theme-darker relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-[20%] left-[10%] w-[40%] h-[40%] bg-theme-purple opacity-5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[10%] right-[5%] w-[30%] h-[30%] bg-theme-blue opacity-5 rounded-full blur-[100px]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">How It Works</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Creating your custom theme is simple and straightforward with our intuitive process.
            Follow these steps to get started.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="glass-card p-6 relative animate-fade-in" 
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="absolute top-4 right-4 text-theme-blue font-bold opacity-50 text-2xl">{step.number}</div>
              <div className="text-theme-blue mb-4">{step.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
              <p className="text-gray-400">{step.description}</p>
              
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-theme-blue to-transparent z-10"></div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Button className="bg-gradient-to-r from-theme-blue to-theme-purple hover:opacity-90 transition-opacity">
            Start Building Your Theme
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
