import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Cloud, Wrench } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: Code,
      skills: ["Python", "Java", "C", "C++", "C#", "JavaScript", "TypeScript", "R", "Bash", "HTML/CSS"]
    },
    {
      title: "Frameworks & Libraries",
      icon: Code,
      skills: ["FastAPI", "React", "Flask", "Node.js", "scikit-learn", "PyTorch", "Express.js"]
    },
    {
      title: "Cloud & Databases",
      icon: Database,
      skills: ["AWS (S3, ECS, KMS)", "SQL", "PostgreSQL", "Redis", "Google Cloud", "MongoDB"]
    },
    {
      title: "Tools & DevOps",
      icon: Wrench,
      skills: ["Git", "Docker", "GitHub Actions", "Linux", "Pytest", "JUnit", "CI/CD"]
    }
  ];

  return (
    <section id="skills" className="section-spacing bg-secondary/50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={index} className="shadow-medium hover:shadow-glow transition-all duration-300 border-0 gradient-secondary group">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 w-12 h-12 bg-accent rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {category.skills.map((skill) => (
                      <Badge 
                        key={skill} 
                        variant="secondary" 
                        className="text-xs hover:bg-accent hover:text-primary transition-colors cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;