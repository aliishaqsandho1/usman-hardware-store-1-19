import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { useToast } from "@/hooks/use-toast";
import { MessageSquare, Send, X } from "lucide-react";

type Message = {
  id: number;
  text: string;
  sender: "user" | "support";
  timestamp: Date;
};

const initialMessages: Message[] = [
  {
    id: 1,
    text: "Hi there! 👋 How can we help you today with your ThemeMorphic project?",
    sender: "support",
    timestamp: new Date(),
  },
];

// Gemini API configuration
const GEMINI_API_KEY = "AIzaSyDscgxHRLCy4suVBigT1g_pXMnE7tH_Ejw";
const GEMINI_API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent";

export const LiveChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [newMessage, setNewMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Make sure chat is initialized
  useEffect(() => {
    // Force initialization
    const checkChatVisible = setTimeout(() => {
      console.log("LiveChat component loaded!");
    }, 500);
    return () => clearTimeout(checkChatVisible);
  }, []);

  const callGeminiAPI = async (userMessage: string, conversationHistory: Message[]): Promise<string> => {
    try {
      // Create conversation context for Gemini
      const conversationContext = conversationHistory
        .map(msg => `${msg.sender === 'user' ? 'User' : 'ThemeMorphic Bot'}: ${msg.text}`)
        .join('\n');

      const prompt = `You are a ThemeMorphic bot, a helpful AI assistant for ThemeMorphic - a revolutionary WordPress theme builder platform.

COMPREHENSIVE THEMEMORPHIC INFORMATION:

COMPANY OVERVIEW:
- ThemeMorphic is building the future of WordPress themes with speed, simplicity, and performance in mind
- We're on a mission to revolutionize WordPress themes by making them fast, lightweight, and easy to customize
- Our platform empowers businesses and developers to create custom WordPress themes in minutes, not weeks
- We save time and resources while delivering exceptional results

CORE VALUES:
1. Speed - We prioritize performance in everything we do, ensuring lightning-fast websites that users love
2. Simplicity - Complex doesn't mean better. We focus on intuitive designs and user experiences that just work
3. Innovation - We're constantly pushing boundaries to bring the latest web technologies to WordPress themes

PRODUCT FEATURES:
- Over 50 professionally designed theme templates across various industries
- Advanced theme builder with drag-and-drop functionality
- Extensive customization options including colors, fonts, layouts, and features
- Lightning-fast performance optimized themes
- Mobile-responsive designs
- SEO-optimized structure
- WordPress compatibility and easy integration
- Real-time preview and editing
- One-click theme installation

PRICING & LICENSING:
- Themes start at $49 for a single site license
- Multiple licensing options available (single site, multiple sites, developer licenses)
- 30-day money-back guarantee if not satisfied
- No hidden fees or recurring charges
- Free updates and support included

TEAM & SUPPORT:
- CEO & Founder: Alex Morgan
- Lead Developer: Jordan Lee
- Design Lead: Taylor Kim
- Marketing Director: Casey Chen
- Professional support team available
- Comprehensive documentation and tutorials
- Community forum for users

TECHNICAL SPECIFICATIONS:
- Built with modern web technologies
- Optimized for WordPress 6.0+
- Compatible with major browsers
- Fast loading times (< 2 seconds)
- Clean, semantic code
- Accessibility compliant
- GDPR ready

USE CASES:
- Business websites
- E-commerce stores
- Portfolio sites
- Blog platforms
- Corporate websites
- Personal branding
- Agency client projects
- Developer projects

Previous conversation:
${conversationContext}

Current user message: ${userMessage}

RESPONSE GUIDELINES:
- Respond as the ThemeMorphic bot in a helpful, friendly, and professional manner
- Keep responses concise but informative (2-4 sentences typically)
- Always mention ThemeMorphic's key benefits when relevant
- If asked about pricing, mention the $49 starting price and 30-day guarantee
- If asked about features, highlight speed, simplicity, and customization options
- If asked about support, mention our team and 30-day guarantee
- If the user asks about something not related to ThemeMorphic, politely redirect them to ThemeMorphic-related topics
- Use emojis sparingly but appropriately to maintain a friendly tone
- Always encourage users to try our theme builder or contact support for specific needs`;

      const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: prompt
                }
              ]
            }
          ]
        })
      });

      if (!response.ok) {
        throw new Error(`API request failed: ${response.status}`);
      }

      const data = await response.json();
      
      if (data.candidates && data.candidates[0] && data.candidates[0].content) {
        return data.candidates[0].content.parts[0].text.trim();
      } else {
        throw new Error('Invalid response format from Gemini API');
      }
    } catch (error) {
      console.error('Error calling Gemini API:', error);
      return "I apologize, but I'm having trouble connecting to our AI service right now. Please try again in a moment, or contact our support team directly.";
    }
  };

  const handleSendMessage = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    
    if (!newMessage.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      text: newMessage,
      sender: "user",
      timestamp: new Date(),
    };
    
    setMessages((prev) => [...prev, userMessage]);
    const currentMessage = newMessage;
    setNewMessage("");
    
    // Show typing indicator
    setIsTyping(true);
    
    try {
      // Get response from Gemini API
      const response = await callGeminiAPI(currentMessage, messages);
      
      const supportMessage: Message = {
        id: messages.length + 2,
        text: response,
        sender: "support",
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, supportMessage]);
      
      // Show toast notification
      toast({
        title: "New Message",
        description: "ThemeMorphic AI has responded to your query",
      });
    } catch (error) {
      console.error('Error in handleSendMessage:', error);
      
      // Fallback response
      const fallbackMessage: Message = {
        id: messages.length + 2,
        text: "I apologize, but I'm having trouble processing your request right now. Please try again in a moment.",
        sender: "support",
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, fallbackMessage]);
      
      toast({
        title: "Connection Error",
        description: "Unable to connect to AI service. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsTyping(false);
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <>
      {/* Floating chat button */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 h-14 w-14 rounded-full bg-gradient-to-r from-theme-blue to-theme-purple shadow-lg z-50 animate-pulse-soft"
          aria-label="Open chat"
        >
          <MessageSquare size={24} />
        </Button>
      )}

      {/* Chat sheet */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent className="w-[90%] sm:w-[380px] p-0 border-l border-gray-700 bg-theme-darker">
          <SheetHeader className="bg-gradient-to-r from-theme-blue to-theme-purple p-4 text-white">
            <div className="flex justify-between items-center">
              <SheetTitle className="text-white">Live Chat Support</SheetTitle>
            </div>
            <p className="text-sm opacity-90 mt-1">We typically reply within minutes</p>
          </SheetHeader>
          
          <div className="flex flex-col h-[calc(100vh-85px)]">
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${
                    msg.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg p-3 ${
                      msg.sender === "user"
                        ? "bg-theme-blue text-white"
                        : "bg-gray-800 bg-opacity-70 backdrop-blur-sm text-white"
                    }`}
                  >
                    <p>{msg.text}</p>
                    <p className="text-xs mt-1 opacity-70 text-right">
                      {formatTime(msg.timestamp)}
                    </p>
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="max-w-[80%] bg-gray-800 bg-opacity-70 backdrop-blur-sm rounded-lg p-3">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.4s" }}></div>
                    </div>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>
            
            <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-700 bg-theme-dark">
              <div className="flex space-x-2">
                <Input
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="bg-theme-darker border-gray-700"
                />
                <Button type="submit" variant="ghost" disabled={!newMessage.trim()}>
                  <Send size={18} />
                </Button>
              </div>
            </form>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};
