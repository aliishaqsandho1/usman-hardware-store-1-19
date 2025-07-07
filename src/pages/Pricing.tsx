
import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";

const Pricing: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  
  const plans = [
    {
      name: "Basic",
      description: "Perfect for freelancers and small businesses.",
      price: isAnnual ? 49 : 5,
      period: isAnnual ? "/year" : "/month",
      features: [
        "1 Theme Download",
        "Basic Customization",
        "6 Months Updates",
        "Email Support",
        "Use on 1 Website",
      ],
      notIncluded: [
        "Premium Modules",
        "Theme Builder Access",
        "Priority Support",
        "White Labeling",
      ],
      highlighted: false,
      buttonText: "Get Started"
    },
    {
      name: "Professional",
      description: "Ideal for agencies and growing businesses.",
      price: isAnnual ? 149 : 15,
      period: isAnnual ? "/year" : "/month",
      features: [
        "5 Theme Downloads",
        "Advanced Customization",
        "12 Months Updates",
        "Priority Support",
        "Use on 5 Websites",
        "Premium Modules",
        "Theme Builder Access",
      ],
      notIncluded: [
        "White Labeling",
      ],
      highlighted: true,
      buttonText: "Start Free Trial"
    },
    {
      name: "Enterprise",
      description: "For large teams and enterprise clients.",
      price: isAnnual ? 299 : 29,
      period: isAnnual ? "/year" : "/month",
      features: [
        "Unlimited Theme Downloads",
        "Full Customization",
        "Lifetime Updates",
        "24/7 VIP Support",
        "Use on Unlimited Websites",
        "Premium Modules",
        "Theme Builder Access",
        "White Labeling",
        "Custom Theme Development",
      ],
      notIncluded: [],
      highlighted: false,
      buttonText: "Contact Sales"
    }
  ];
  
  return (
    <div className="min-h-screen bg-theme-darker">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Pricing Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              Simple, Transparent <span className="text-gradient">Pricing</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Choose the perfect plan for your needs. No hidden fees or complicated tiers.
            </p>
            
            {/* Billing Toggle */}
            <div className="flex items-center justify-center mb-8">
              <span className={`mr-3 ${isAnnual ? 'text-white' : 'text-gray-400'}`}>Annual</span>
              <button
                onClick={() => setIsAnnual(!isAnnual)}
                className="relative w-12 h-6 bg-gray-700 rounded-full px-1 flex items-center"
              >
                <div className={`w-4 h-4 rounded-full bg-white absolute transition-transform ${isAnnual ? 'translate-x-0' : 'translate-x-6'}`}></div>
              </button>
              <span className={`ml-3 ${!isAnnual ? 'text-white' : 'text-gray-400'}`}>Monthly</span>
              
              {isAnnual && (
                <span className="ml-3 bg-theme-purple/20 text-theme-purple text-xs px-2 py-1 rounded">
                  Save 20%
                </span>
              )}
            </div>
          </div>
          
          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            {plans.map((plan, index) => (
              <div 
                key={index}
                className={`glass relative rounded-xl overflow-hidden ${
                  plan.highlighted 
                    ? 'ring-2 ring-theme-purple transform md:-translate-y-4' 
                    : ''
                }`}
              >
                {plan.highlighted && (
                  <div className="bg-gradient-to-r from-theme-blue to-theme-purple text-white text-center py-2 text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-6">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold">${plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                  <Button 
                    className={`w-full mb-8 ${
                      plan.highlighted 
                        ? 'bg-gradient-to-r from-theme-blue to-theme-purple hover:opacity-90' 
                        : ''
                    }`}
                    variant={plan.highlighted ? "default" : "outline"}
                  >
                    {plan.buttonText}
                  </Button>
                  
                  <div className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-center">
                        <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                    
                    {plan.notIncluded.map((feature, i) => (
                      <div key={i} className="flex items-center text-gray-500">
                        <X className="h-5 w-5 text-gray-500 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* FAQs */}
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h2>
            <div className="glass rounded-xl p-6 space-y-6">
              {[
                {
                  q: "Can I upgrade my plan later?",
                  a: "Yes, you can upgrade your plan at any time. You'll only be charged the prorated difference between your current plan and the new one."
                },
                {
                  q: "Is there a free trial available?",
                  a: "We offer a 14-day free trial for our Professional plan with no credit card required. You can test out all the features before committing."
                },
                {
                  q: "What payment methods do you accept?",
                  a: "We accept all major credit cards, PayPal, and bank transfers for annual plans. Cryptocurrency payments can be arranged for enterprise customers."
                },
                {
                  q: "Can I request a refund?",
                  a: "We offer a 30-day money-back guarantee if you're not satisfied with your purchase. Contact our support team for assistance."
                }
              ].map((faq, index) => (
                <div key={index}>
                  <h3 className="text-lg font-medium mb-2">{faq.q}</h3>
                  <p className="text-gray-300">{faq.a}</p>
                  {index < 3 && <hr className="border-gray-800 mt-6" />}
                </div>
              ))}
            </div>
          </div>
          
          {/* Enterprise CTA */}
          <div className="max-w-4xl mx-auto">
            <div className="glass rounded-2xl overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="p-8 md:p-12">
                  <h2 className="text-2xl font-bold mb-4">Need a Custom Solution?</h2>
                  <p className="text-gray-300 mb-6">
                    Our enterprise plans can be tailored to your specific requirements. Get in touch with our sales team to discuss your needs.
                  </p>
                  <Button className="bg-gradient-to-r from-theme-blue to-theme-purple hover:opacity-90 transition-opacity">
                    Contact Sales
                  </Button>
                </div>
                <div className="bg-gray-800 h-full p-8 md:p-12 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">24/7</div>
                    <div className="text-xl mb-4">Priority Support</div>
                    <div className="text-gray-400">For Enterprise Customers</div>
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

export default Pricing;
