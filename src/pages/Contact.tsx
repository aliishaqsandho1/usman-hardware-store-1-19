
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, MapPin, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactPage: React.FC = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "We'll get back to you within 24 hours.",
    });
  };

  return (
    <div className="min-h-screen bg-theme-darker">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gradient">Get In Touch</span>
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Have questions? Need support? Want to work with us? 
              Fill out the form below and our team will get back to you shortly.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="lg:col-span-2">
              <div className="glass p-6 md:p-8 rounded-xl animate-fade-in">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm text-gray-400 mb-1">Name</label>
                      <Input
                        id="name"
                        placeholder="Your name"
                        className="bg-theme-dark border-gray-700 w-full"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm text-gray-400 mb-1">Email</label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        className="bg-theme-dark border-gray-700 w-full"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm text-gray-400 mb-1">Subject</label>
                    <Input
                      id="subject"
                      placeholder="What's this about?"
                      className="bg-theme-dark border-gray-700 w-full"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm text-gray-400 mb-1">Message</label>
                    <textarea
                      id="message"
                      rows={6}
                      placeholder="Tell us what you need..."
                      className="w-full rounded-md bg-theme-dark border border-gray-700 p-3 focus:border-theme-blue focus:ring-theme-blue transition"
                      required
                    ></textarea>
                  </div>
                  
                  <Button 
                    type="submit"
                    className="bg-gradient-to-r from-theme-blue to-theme-purple hover:opacity-90 transition-opacity w-full md:w-auto"
                  >
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
            
            <div>
              <div className="glass p-6 md:p-8 rounded-xl animate-fade-in h-full">
                <h2 className="text-2xl font-bold mb-6">Contact Info</h2>
                
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="bg-theme-blue/20 p-3 rounded-lg">
                      <Mail className="text-theme-blue" />
                    </div>
                    <div>
                      <h3 className="font-medium text-white">Email</h3>
                      <p className="text-gray-400 mt-1">support@thememorphic.com</p>
                      <p className="text-gray-400">sales@thememorphic.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-theme-purple/20 p-3 rounded-lg">
                      <Phone className="text-theme-purple" />
                    </div>
                    <div>
                      <h3 className="font-medium text-white">Phone</h3>
                      <p className="text-gray-400 mt-1">+1 (555) 123-4567</p>
                      <p className="text-gray-400">Mon-Fri, 9AM-5PM EST</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-theme-blue/20 p-3 rounded-lg">
                      <MapPin className="text-theme-blue" />
                    </div>
                    <div>
                      <h3 className="font-medium text-white">Location</h3>
                      <p className="text-gray-400 mt-1">
                        123 Innovation Drive<br />
                        Suite 400<br />
                        San Francisco, CA 94107
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
