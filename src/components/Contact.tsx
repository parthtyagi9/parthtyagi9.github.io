import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Linkedin, Github } from "lucide-react";

const Contact = () => {

  return (
    <section id="contact" className="section-spacing">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Interested in collaborating or have a question? I'd love to hear from you.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Info */}
          <div className="grid md:grid-cols-3 gap-8">
            <a 
             href="mailto:prem.patel@mail.utoronto.ca"
              className="flex flex-col items-center text-center p-8 rounded-lg hover:bg-accent transition-colors group"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 mb-4">
                <Mail className="w-8 h-8" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Email</h3>
             <p className="text-muted-foreground">prem.patel@mail.utoronto.ca</p>
            </a>

            <a 
             href="https://www.linkedin.com/in/prem-patel-b88a86319/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center text-center p-8 rounded-lg hover:bg-accent transition-colors group"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 mb-4">
                <Linkedin className="w-8 h-8" />
              </div>
              <h3 className="font-semibold text-lg mb-2">LinkedIn</h3>
             <p className="text-muted-foreground">linkedin.com/in/prem-patel-b88a86319</p>
            </a>

            <a 
             href="https://github.com/prempatel6288-spec"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center text-center p-8 rounded-lg hover:bg-accent transition-colors group"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 mb-4">
                <Github className="w-8 h-8" />
              </div>
              <h3 className="font-semibold text-lg mb-2">GitHub</h3>
             <p className="text-muted-foreground">github.com/prempatel6288-spec</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;