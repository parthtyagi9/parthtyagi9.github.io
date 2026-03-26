import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "./ThemeToggle";
import { Menu, X, ChevronDown } from "lucide-react";
import logoImg from "@/assets/logo.png";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Top bar */}
      <div className="fixed top-0 w-full z-50">
        {/* Main nav */}
        <nav className={`transition-all duration-300 border-b border-border ${
          isScrolled ? 'bg-background/95 backdrop-blur-md' : 'bg-background'
        }`}>
          <div className="mx-auto px-6">
            <div className="flex items-center justify-between h-14">
              <div className="flex items-center gap-8">
                <button
                  onClick={() => scrollToSection("hero")}
                  className="hover:opacity-70 transition-opacity"
                >
                  <img src={logoImg} alt="PT" className="h-7 w-7 dark:invert" />
                </button>
                <div className="hidden md:flex items-center gap-6">
                  <button
                    onClick={() => scrollToSection("about")}
                    className="text-sm text-foreground hover:text-muted-foreground transition-colors"
                  >
                    About
                  </button>
                  <button
                    onClick={() => scrollToSection("experience")}
                    className="text-sm text-foreground hover:text-muted-foreground transition-colors"
                  >
                    Work
                  </button>
                  <button
                    onClick={() => scrollToSection("projects")}
                    className="text-sm text-foreground hover:text-muted-foreground transition-colors"
                  >
                    Projects
                  </button>
                  <button
                    onClick={() => scrollToSection("education")}
                    className="text-sm text-foreground hover:text-muted-foreground transition-colors flex items-center gap-1"
                  >
                    More <ChevronDown className="w-3 h-3" />
                  </button>
                </div>
              </div>

              <div className="hidden md:flex items-center gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => scrollToSection("contact")}
                  className="text-sm border-border hover:bg-muted rounded-none"
                >
                  Contact
                </Button>
                <Button
                  size="sm"
                  asChild
                  className="text-sm bg-foreground text-background hover:bg-foreground/90 rounded-none"
                >
                  <a href="https://github.com/parthtyagi9" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                </Button>
                <ThemeToggle />
              </div>

              {/* Mobile */}
              <div className="md:hidden">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                  {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </Button>
              </div>
            </div>
          </div>

          {isMobileMenuOpen && (
            <div className="md:hidden border-t border-border bg-background">
              <div className="px-6 py-4 space-y-3">
                <button onClick={() => scrollToSection("about")} className="block w-full text-left py-2 text-sm text-foreground">About</button>
                <button onClick={() => scrollToSection("experience")} className="block w-full text-left py-2 text-sm text-foreground">Work</button>
                <button onClick={() => scrollToSection("projects")} className="block w-full text-left py-2 text-sm text-foreground">Projects</button>
                <button onClick={() => scrollToSection("education")} className="block w-full text-left py-2 text-sm text-foreground">Education</button>
                <button onClick={() => scrollToSection("skills")} className="block w-full text-left py-2 text-sm text-foreground">Skills</button>
                <button onClick={() => scrollToSection("contact")} className="block w-full text-left py-2 text-sm text-foreground">Contact</button>
                <a href="https://github.com/parthtyagi9" target="_blank" rel="noopener noreferrer" className="block py-2 text-sm text-foreground">GitHub</a>
              </div>
            </div>
          )}
        </nav>
      </div>

      <main className="text-foreground pt-16">{children}</main>
    </div>
  );
};

export default Layout;
