
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-theme-darker">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              About <span className="text-gradient">ThemeMorphic</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Building the future of WordPress themes with speed, simplicity, and performance in mind.
            </p>
          </div>
          
          {/* Mission Section */}
          <div className="glass rounded-2xl overflow-hidden max-w-5xl mx-auto mb-16">
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-12">
                <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                <p className="text-gray-300 mb-6">
                  At ThemeMorphic, we're on a mission to revolutionize WordPress themes. We believe that websites should be fast, lightweight, and easy to customize, without compromising on design or functionality.
                </p>
                <p className="text-gray-300">
                  Our platform empowers businesses and developers to create custom WordPress themes in minutes, not weeks, saving time and resources while delivering exceptional results.
                </p>
              </div>
              <div className="bg-gray-800 h-full flex items-center justify-center">
                <div className="w-3/4 aspect-square rounded-full bg-gradient-to-br from-theme-blue/30 to-theme-purple/30 flex items-center justify-center">
                  <div className="w-2/3 aspect-square rounded-full bg-gradient-to-br from-theme-blue/50 to-theme-purple/50"></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Values Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Speed",
                  description: "We prioritize performance in everything we do, ensuring lightning-fast websites that users love."
                },
                {
                  title: "Simplicity",
                  description: "Complex doesn't mean better. We focus on intuitive designs and user experiences that just work."
                },
                {
                  title: "Innovation",
                  description: "We're constantly pushing boundaries to bring the latest web technologies to WordPress themes."
                }
              ].map((value, index) => (
                <div key={index} className="glass-card p-8 rounded-xl">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-theme-blue to-theme-purple flex items-center justify-center text-2xl font-bold mb-4">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Team Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              {[
                "Alex Morgan", 
                "Jordan Lee", 
                "Taylor Kim", 
                "Casey Chen"
              ].map((person, index) => (
                <div key={index} className="glass-card p-6 text-center">
                  <div className="w-32 h-32 bg-gray-700 rounded-full mx-auto mb-4"></div>
                  <h3 className="text-lg font-semibold">{person}</h3>
                  <p className="text-gray-400 text-sm mb-3">
                    {index === 0 ? "CEO & Founder" : 
                     index === 1 ? "Lead Developer" :
                     index === 2 ? "Design Lead" : "Marketing Director"}
                  </p>
                  <div className="flex justify-center space-x-2">
                    <div className="w-8 h-8 rounded-full bg-gray-700"></div>
                    <div className="w-8 h-8 rounded-full bg-gray-700"></div>
                    <div className="w-8 h-8 rounded-full bg-gray-700"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Create Your <span className="text-gradient">Perfect Theme?</span>
            </h2>
            <Button size="lg" className="bg-gradient-to-r from-theme-blue to-theme-purple hover:opacity-90 transition-opacity">
              Start Building Now
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
