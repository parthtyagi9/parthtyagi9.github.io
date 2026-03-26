import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const experiences = [
    {
      dates: "Apr 2025 – Jul 2025",
      title: "Software Engineering Intern",
      company: "Esya Technologies",
      location: "Toronto, ON",
      bullets: [
        "Built FastAPI services for PII detection/anonymization using YAML + regex for ETL pipelines",
        "Deployed dev/staging on AWS (ECS, S3, KMS) with Docker + GitHub Actions CI/CD",
        "Improved batch processing ~25% with Redis-backed background jobs and faster S3 I/O",
        "Added JWT auth and CloudWatch audit logging for secure access and debugging",
        "Orchestrated S3-triggered ETL workflows using AWS Lambda",
        "Expanded pytest coverage with synthetic data; improved F1 ~92% → ~96%",
        "Implemented k-anonymity checks and privacy risk reports; documented in Confluence/Jira",
      ],
    },
    {
      dates: "Sept 2025 – Jan 2026",
      title: "Software Engineer",
      company: "Computer Science Student Community",
      location: "Mississauga, ON",
      bullets: [
        "Built a RAG-based AI chatbot for the CSSC site, improving support for 3K+ monthly users",
        "Developed a resources hub (React + Angular) with search, tagging, and GitHub/Drive sync",
        "Set up Jenkins CI/CD with linting, tests, and automated deploys to improve release quality",
      ],
    },
    {
      dates: "Jan 2026 – Present",
      title: "Director of Tech",
      company: "Computer Science Student Community",
      location: "Mississauga, ON",
      bullets: [
        "Led the technical team, managing development workflows, code reviews, and feature rollouts",
        "Maintained and improved infra, shipping updates while ensuring performance and reliability",
        "Delivered hands-on workshops, mentored students on practical tools & real-life applications",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 md:py-32 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-foreground"
        >
          Work Experience
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-muted-foreground mb-16"
        >
          2+ years of hands-on experience building systems and leading technical initiatives.
        </motion.p>

        <div className="relative border-l-2 border-foreground ml-2">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className={`relative pl-8 ${index < experiences.length - 1 ? 'pb-16' : ''}`}
            >
              <div className="absolute -left-[9px] top-2 w-4 h-4 bg-foreground rounded-full" />

              <h3 className="text-xl md:text-2xl font-bold text-foreground">
                {exp.title}
              </h3>
              <p className="font-medium text-foreground mb-1">{exp.company} · {exp.location}</p>
              <p className="text-muted-foreground text-sm mb-4">{exp.dates}</p>

              <div className="space-y-1.5">
                {exp.bullets.map((bullet, i) => (
                  <p key={i} className="text-muted-foreground text-sm leading-relaxed">
                    – {bullet}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
