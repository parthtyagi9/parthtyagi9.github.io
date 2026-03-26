import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="section-spacing bg-secondary/50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Experience</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building real-world impact through software engineering and AI/ML development
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="shadow-medium hover:shadow-glow transition-all duration-300 border-0 gradient-secondary">
            <CardHeader>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <CardTitle className="text-2xl text-primary">Software Engineering Intern</CardTitle>
                  <p className="text-xl font-semibold text-foreground mt-1">Esya Technologies Ltd.</p>
                </div>
                <div className="flex flex-col md:items-end gap-2">
                  <div className="flex items-center text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-2" />
                    Apr 2025 – Jul 2025
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="w-4 h-4 mr-2" />
                    Remote
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-foreground">
                    Built <strong>FastAPI endpoints</strong> to anonymize PII and enforce privacy compliance
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-foreground">
                    Boosted processing speed by <strong>~25%</strong> using Redis caching + AWS S3 optimizations
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-foreground">
                    Increased detection accuracy from <strong>F1 score 92% → 96%</strong> with enhanced testing + synthetic data
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-foreground">
                    Managed deployments using <strong>Docker, GitHub Actions, AWS ECS/S3/KMS</strong>
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-foreground">
                    Collaborated with dev + marketing teams to align features with business needs
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-4">
                {["FastAPI", "Python", "Redis", "AWS S3", "Docker", "GitHub Actions", "AWS ECS", "Machine Learning"].map((tech) => (
                  <Badge key={tech} variant="secondary" className="hover:bg-accent transition-colors">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;