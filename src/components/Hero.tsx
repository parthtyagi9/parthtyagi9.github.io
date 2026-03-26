import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center section-spacing">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                  Parth Tyagi
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground">
                Computer Science & Statistics Student at University of Toronto
              </p>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Focused on building scalable software and ML systems with cloud deployment, 
                validated through internships and projects.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="gradient-primary hover:shadow-glow transition-all duration-300"
                onClick={() => scrollToSection("contact")}
              >
                <Mail className="w-4 h-4 mr-2" />
                Get in Touch
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="hover:bg-accent hover:border-primary transition-all duration-300"
                asChild
              >
                <a href="https://drive.google.com/file/d/1imtduC6te-y2YkWVVYjr82KCcKeq2fPy/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                  <Download className="w-4 h-4 mr-2" />
                  View Resume
                </a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center">
              <Button 
                variant="ghost" 
                size="icon"
                className="hover:bg-accent hover:text-primary transition-all duration-300"
                asChild
              >
                <a href="https://github.com/parthtyagi9" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5" />
                </a>
              </Button>
              <Button 
                variant="ghost" 
                size="icon"
                className="hover:bg-accent hover:text-primary transition-all duration-300"
                asChild
              >
                <a href="https://linkedin.com/in/parth-tyagi45" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5" />
                </a>
              </Button>
              <Button 
                variant="ghost" 
                size="icon"
                className="hover:bg-accent hover:text-primary transition-all duration-300"
                asChild
              >
                <a href="mailto:parthtyagi1204@gmail.com">
                  <Mail className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;