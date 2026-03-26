import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ImageIcon } from "lucide-react";
import thetaStrikeImg from "@/assets/theta-strike.png";
import unixShellImg from "@/assets/unix-shell.png";
import scanalyticsImg from "@/assets/scanalytics.png";
import wellthifyImg from "@/assets/wellthify.png";
import shadowMonsterImg from "@/assets/shadow-monster.png";
import arMuseumImg from "@/assets/ar-museum.png";

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const projects = [
    {
      title: "Stock options platform",
      description: "Full-stack options analytics with Black-Scholes, binomial pricing, and ML forecasting. Optimized NumPy computations, PostgreSQL, Redis caching, and Docker CI/CD.",
      tags: ["Python", "FastAPI", "React"],
      link: "https://github.com/parthtyagi9/ThetaStrike",
      image: thetaStrikeImg,
    },
    {
      title: "Wellthify wellness app",
      description: "Full-stack AI platform delivering personalized fitness, diet, and health recommendations. Built with Flask and Node.js, integrated with Gemini and Google Cloud Text-to-Speech.",
      tags: ["Flask", "Node.js", "Google Cloud"],
      link: "https://github.com/parthtyagi9/wellthify",
      image: wellthifyImg,
    },
    {
      title: "Shadow monster game",
      description: "Console adventure game built entirely in RISC-V assembly. Implements player movement, enemy AI, pseudorandom placement, and dynamic grid rendering with memory-efficient storage.",
      tags: ["RISC-V", "Assembly", "Low-level"],
      link: "https://github.com/parthtyagi9",
      image: shadowMonsterImg,
    },
    {
      title: "Scanalytics analytics engine",
      description: "AI-powered analytics with FastAPI and multi-agent orchestration for automated KPI discovery. Translates business rules into PostgreSQL JSONB queries with structured Pydantic outputs.",
      tags: ["FastAPI", "Gemini API", "PostgreSQL"],
      link: "https://github.com/parthtyagi9/Scanalytics",
      image: scanalyticsImg,
    },
    {
      title: "Custom UNIX shell",
      description: "Unix-style shell in C replicating core Bash features including piping, background jobs, and signal handling. Implements fork/exec, POSIX sockets, and robust process management.",
      tags: ["C", "Unix", "Systems"],
      link: "https://github.com/parthtyagi9",
      image: unixShellImg,
    },
    {
      title: "AR museum dashboard",
      description: "React-based AR web app integrating Google OAuth, Google Maps API, and A-Frame/AR.js for location-based experiences. Stores AR elements in Firebase with optimized rendering.",
      tags: ["React", "A-Frame", "Firebase"],
      link: "https://github.com/parthtyagi9/ar-museum",
      image: arMuseumImg,
    },
  ];

  // Distribute into 3 columns for masonry matching the reference layout
  const col1 = [projects[0], projects[3]]; // left
  const col2 = [projects[1], projects[4]]; // center
  const col3 = [projects[2], projects[5]]; // right

  const renderCard = (project: typeof projects[0], index: number) => (
    <motion.a
      key={index}
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.2 + index * 0.05 }}
      whileHover={{ scale: 1.03, y: -4 }}
      className="block border border-border rounded-none overflow-hidden bg-card cursor-pointer transition-shadow hover:shadow-lg"
    >
      {/* Image */}
      <div className="w-full aspect-[4/3] bg-muted flex items-center justify-center overflow-hidden">
        {project.image ? (
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
        ) : (
          <ImageIcon className="w-10 h-10 text-muted-foreground/30" />
        )}
      </div>

      <div className="p-5">
        <h3 className="text-lg font-semibold text-foreground mb-2">{project.title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 bg-muted text-foreground text-xs rounded-none border border-border"
            >
              {tag}
            </span>
          ))}
        </div>

        <span className="inline-flex items-center gap-1 text-sm text-foreground hover:text-muted-foreground transition-colors">
          View code <ArrowRight className="w-3.5 h-3.5" />
        </span>
      </div>
    </motion.a>
  );

  return (
    <section id="projects" className="py-20 md:py-32 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <motion.p
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-sm text-muted-foreground text-center mb-4"
        >
          Projects
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold tracking-tight text-center mb-4 text-foreground"
        >
          Work built and shipped
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-muted-foreground text-center mb-16"
        >
          Full-stack systems, ML applications, and systems-level tools.
        </motion.p>

        {/* Mobile: single column */}
        <div className="md:hidden space-y-6">
          {projects.map((p, i) => renderCard(p, i))}
        </div>

        {/* Desktop: 3 explicit columns with staggered heights */}
        <div className="hidden md:grid grid-cols-3 gap-6 items-start">
          <div className="space-y-6">
            {col1.map((p, i) => renderCard(p, i))}
          </div>
          <div className="space-y-6 mt-12">
            {col2.map((p, i) => renderCard(p, i + 2))}
          </div>
          <div className="space-y-6">
            {col3.map((p, i) => renderCard(p, i + 4))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Button
            variant="outline"
            asChild
            className="border-border hover:bg-muted rounded-none"
          >
            <a href="https://github.com/parthtyagi9" target="_blank" rel="noopener noreferrer">
              Explore more
            </a>
          </Button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="text-center text-foreground font-bold mt-20"
        >
          15+ additional projects across AI, ML, systems, backend and full-stack development.
        </motion.p>
      </div>
    </section>
  );
};

export default ProjectsSection;
