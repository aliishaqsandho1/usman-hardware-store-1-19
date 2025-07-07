import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MessageCircle, BookOpen, Send, Check } from "lucide-react";
import { toast } from "sonner";

const Support: React.FC = () => {
  const [ticketSubmitted, setTicketSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Support ticket submitted successfully!");
    setTicketSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-theme-darker">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gradient">Support</span> Center
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Need help with your ThemeMorphic theme? Find answers to common questions or contact our support team.
            </p>
          </div>

          {/* Support Options */}
          <div className="max-w-5xl mx-auto mb-16">
            <Tabs defaultValue="faq" className="w-full">
              <TabsList className="grid grid-cols-3 mb-8">
                <TabsTrigger value="faq" className="text-base">
                  <BookOpen className="mr-2 h-5 w-5" />
                  FAQs
                </TabsTrigger>
                <TabsTrigger value="chat" className="text-base py-3">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Live Chat
                </TabsTrigger>
                <TabsTrigger value="ticket" className="text-base py-3">
                  <Send className="mr-2 h-5 w-5" />
                  Submit Ticket
                </TabsTrigger>
              </TabsList>

              {/* FAQs Tab */}
              <TabsContent value="faq">
                <div className="glass rounded-xl p-6">
                  <Accordion type="single" collapsible className="w-full">
                    {[
                      {
                        question: "How do I install a ThemeMorphic theme?",
                        answer: "Upload the theme ZIP file to your WordPress dashboard under Appearance > Themes > Add New > Upload Theme. Then activate your new theme."
                      },
                      {
                        question: "Can I customize my theme after purchase?",
                        answer: "Yes! All ThemeMorphic themes come with a built-in customizer that allows you to change colors, fonts, layouts, and more without coding."
                      },
                      {
                        question: "Are your themes compatible with popular plugins?",
                        answer: "Absolutely. Our themes are compatible with major WordPress plugins including WooCommerce, Elementor, Contact Form 7, and more."
                      },
                      {
                        question: "Do you offer refunds?",
                        answer: "We offer a 14-day money-back guarantee if you're not satisfied with your purchase."
                      },
                      {
                        question: "How long do I get updates and support?",
                        answer: "All themes come with 1 year of updates and support, which can be extended through our maintenance plans."
                      },
                      {
                        question: "Can I use your themes on multiple sites?",
                        answer: "Our standard license allows use on one website. For multiple sites, please purchase our agency or developer license."
                      }
                    ].map((faq, index) => (
                      <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger className="text-left">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-300">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </TabsContent>

              {/* Live Chat Tab */}
              <TabsContent value="chat">
                <div className="glass rounded-xl p-6 text-center">
                  <div className="mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-theme-blue to-theme-purple rounded-full flex items-center justify-center mx-auto mb-4">
                      <MessageCircle className="h-10 w-10" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-2">Live Chat Support</h3>
                    <p className="text-gray-300 mb-6">
                      Our support team is available Monday-Friday, 9am-5pm EST.
                    </p>
                  </div>
                  <Button size="lg" className="bg-gradient-to-r from-theme-blue to-theme-purple hover:opacity-90 transition-opacity">
                    Start Live Chat
                  </Button>
                </div>
              </TabsContent>

              {/* Submit Ticket Tab */}
              <TabsContent value="ticket">
                <div className="glass rounded-xl p-6">
                  {ticketSubmitted ? (
                    <div className="text-center py-8">
                      <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Check className="h-10 w-10 text-green-400" />
                      </div>
                      <h3 className="text-2xl font-semibold mb-3">Ticket Submitted!</h3>
                      <p className="text-gray-300 mb-6 max-w-lg mx-auto">
                        Thank you for contacting us. Our support team will review your request and get back to you within 24 hours.
                      </p>
                      <Button 
                        variant="outline" 
                        onClick={() => setTicketSubmitted(false)}
                      >
                        Submit Another Ticket
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                          <Input id="name" placeholder="Your name" required className="bg-theme-dark border-gray-700" />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                          <Input id="email" type="email" placeholder="your.email@example.com" required className="bg-theme-dark border-gray-700" />
                        </div>
                      </div>
                      <div className="mb-6">
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">Subject</label>
                        <Input id="subject" placeholder="What's your issue about?" required className="bg-theme-dark border-gray-700" />
                      </div>
                      <div className="mb-6">
                        <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                        <Textarea 
                          id="message" 
                          placeholder="Please describe your issue in detail..." 
                          rows={6} 
                          required
                          className="bg-theme-dark border-gray-700 w-full"
                        />
                      </div>
                      <div className="mb-6">
                        <label htmlFor="priority" className="block text-sm font-medium text-gray-400 mb-2">Priority</label>
                        <select id="priority" className="w-full rounded-md bg-theme-dark border border-gray-700 p-2">
                          <option>Low</option>
                          <option>Medium</option>
                          <option>High</option>
                          <option>Critical</option>
                        </select>
                      </div>
                      <Button type="submit" className="bg-gradient-to-r from-theme-blue to-theme-purple hover:opacity-90 transition-opacity">
                        Submit Ticket
                      </Button>
                    </form>
                  )}
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Quick Links */}
          <div className="max-w-5xl mx-auto mb-16">
            <h2 className="text-2xl font-bold mb-8 text-center">Quick Resources</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Documentation",
                  description: "Explore our detailed guides and tutorials.",
                  link: "#"
                },
                {
                  title: "Video Tutorials",
                  description: "Watch step-by-step instructions for common tasks.",
                  link: "#"
                },
                {
                  title: "Community Forum",
                  description: "Connect with other ThemeMorphic users.",
                  link: "#"
                }
              ].map((resource, index) => (
                <div key={index} className="glass-card p-6 hover:scale-105 transition-transform">
                  <h3 className="text-xl font-semibold mb-3">{resource.title}</h3>
                  <p className="text-gray-300 mb-4">{resource.description}</p>
                  <a href={resource.link} className="text-theme-blue hover:underline">
                    Learn More →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Support;
