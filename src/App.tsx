import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useScrollToTop } from "./hooks/use-scroll-to-top";
import Index from "./pages/Index";
import ThemeBuilder from "./pages/ThemeBuilder";
import Themes from "./pages/Themes";
import About from "./pages/About";
import Support from "./pages/Support";
import Blog from "./pages/Blog";
import Pricing from "./pages/Pricing";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import ContactPage from "./pages/Contact";
import ThemeDetails from "./pages/ThemeDetails";
import { LiveChat } from "./components/ui/live-chat";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // default: true
      retry: 1,
    },
  },
});

const AppRoutes = () => {
  useScrollToTop();
  
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/builder" element={<ThemeBuilder />} />
      <Route path="/themes" element={<Themes />} />
      <Route path="/themes/:themeId" element={<ThemeDetails />} />
      <Route path="/about" element={<About />} />
      <Route path="/support" element={<Support />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppRoutes />
        <LiveChat />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
