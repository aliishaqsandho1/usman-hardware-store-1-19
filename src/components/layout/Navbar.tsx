
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when location changes
    setIsMobileMenuOpen(false);
  }, [location]);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-theme-blue to-theme-purple">
            ThemeMorphic
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLinks location={location.pathname} />
          <div className="flex items-center gap-4">
            <Link to="/dashboard">
              <Button variant="ghost">Login</Button>
            </Link>
            <Link to="/builder">
              <Button className="bg-gradient-to-r from-theme-blue to-theme-purple hover:opacity-90 transition-opacity">
                Get Started
              </Button>
            </Link>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass absolute top-full left-0 right-0 p-4 animate-fade-in">
          <nav className="flex flex-col space-y-4">
            <NavLinks mobile location={location.pathname} />
            <div className="pt-4 flex flex-col gap-2">
              <Link to="/dashboard" className="w-full">
                <Button variant="ghost" className="w-full">Login</Button>
              </Link>
              <Link to="/builder" className="w-full">
                <Button className="w-full bg-gradient-to-r from-theme-blue to-theme-purple hover:opacity-90 transition-opacity">
                  Get Started
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

const NavLinks: React.FC<{ mobile?: boolean; location: string }> = ({ mobile = false, location }) => {
  const linkClass = mobile
    ? "text-white hover:text-theme-blue transition-colors py-2"
    : "text-white hover:text-theme-blue transition-colors";

  const isActive = (path: string) => {
    return location === path ? "text-theme-blue" : "";
  };

  return (
    <>
      <Link to="/themes" className={`${linkClass} ${isActive("/themes")}`}>
        Themes
      </Link>
      <Link to="/builder" className={`${linkClass} ${isActive("/builder")}`}>
        Theme Builder
      </Link>
      <Link to="/pricing" className={`${linkClass} ${isActive("/pricing")}`}>
        Pricing
      </Link>
      <Link to="/blog" className={`${linkClass} ${isActive("/blog")}`}>
        Blog
      </Link>
      <Link to="/support" className={`${linkClass} ${isActive("/support")}`}>
        Support
      </Link>
    </>
  );
};

export default Navbar;
