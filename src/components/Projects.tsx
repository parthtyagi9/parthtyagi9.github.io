import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "AR Museum - Augmented Reality Dashboard",
      description: "React-based web app integrating Google OAuth authentication, real-time location tracking (Google Maps API), and augmented reality (AR) features using A-Frame & AR.js. Users can add floating text and drawings in AR, stored with location data in Firebase NoSQL.",
      technologies: ["React.js", "Firebase", "A-Frame", "AR.js", "Google Maps API", "OAuth", "Node.js", "HTML/CSS"],
      github: "https://devpost.com/software/ar-museum",
      highlight: "AR + Location Integration"
    },
    {
      title: "Stock Options Valuation Platform",
      description: "Full-stack application for comprehensive option pricing using Black-Scholes, binomial models, and ML algorithms. Improved predictive accuracy by 15-20% through advanced modeling techniques.",
      technologies: ["Python", "React", "scikit-learn", "FastAPI", "PostgreSQL", "AWS"],
      github: "#",
      highlight: "15-20% accuracy improvement"
    },
    {
      title: "Wellthify – AI Wellness Platform",
      description: "Flask + Node.js backend with React frontend, featuring Gemini Pro integration and Google Cloud TTS. Optimized response time by 85% through efficient API design and caching strategies.",
      technologies: ["Flask", "Node.js", "React", "Gemini Pro", "Google Cloud", "TTS"],
      github: "https://devpost.com/software/wellthify",
      highlight: "85% response time optimization"
    },
    {
      title: "Mysh – Unix Shell in C",
      description: "Custom Bash-style shell implementation with advanced features including job control, piping, socket communication, and comprehensive memory management with zero memory leaks.",
      technologies: ["C", "Unix Systems", "Socket Programming", "Memory Management"],
      github: "#",
      highlight: "Zero memory leaks"
    }
  ];

  return (
    <section id="projects" className="section-spacing">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my work in full-stack development, AI/ML, and systems programming
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="shadow-medium hover:shadow-glow transition-all duration-300 border-0 gradient-secondary group">
              <CardHeader>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <Badge variant="outline" className="w-fit bg-accent text-primary border-primary/20">
                  {project.highlight}
                </Badge>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3 pt-2">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="hover:bg-accent hover:border-primary transition-all duration-300"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      {project.title === "AR Museum - Augmented Reality Dashboard" || project.title === "Wellthify – AI Wellness Platform" ? "Devpost" : "View Code"}
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;