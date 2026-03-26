import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "./ThemeToggle";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? "bg-background/95 backdrop-blur-sm shadow-soft" : ""
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          <button 
            onClick={() => scrollToSection("hero")}
            className="text-xl font-bold text-primary hover:text-primary-glow transition-colors"
          >
            Parth Tyagi
          </button>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection("experience")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Experience
            </button>
            <button 
              onClick={() => scrollToSection("projects")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection("skills")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Skills
            </button>
            <div className="flex items-center gap-2">
              <Button 
                onClick={() => scrollToSection("contact")}
                className="gradient-primary hover:shadow-glow transition-all duration-300 px-6"
              >
                Contact
              </Button>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;