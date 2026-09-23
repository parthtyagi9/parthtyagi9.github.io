import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useTheme } from "next-themes";
import { ChevronDown } from "lucide-react";
import esyaLogo from "/src/assets/esya-logo.jpg";
import cssclogo from "/src/assets/cssc-logo.png";
import tempolight from "/src/assets/Tempo_light_logo.png";
import tempodark from "/src/assets/Tempo_dark_logo.png";

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const { resolvedTheme } = useTheme();

  const experiences = [
    {
      company: "Tempo Software",
      location: "Toronto, ON",
      logo: (
        <img
          alt="Tempo Assist"
          src={resolvedTheme === "dark" ? tempolight : tempodark}
          className="w-full h-full object-cover"
        />
      ),
      roles: [
        {
          title: "Software Engineer Intern",
          dates: "June 2026 – Present",
          bullets: [
            "Optimized high-throughput data pipelines processing 25K+ records/min using Kotlin coroutines and Redis caching",
            "Designed transactional bulk-update workflows across 50K+ hierarchical records, enforcing cross-item validation and rollback",
            "Built CDC pipelines publishing 10K+ daily events via transactional outbox and AWS SQS, reducing redundant updates by 35%",
            "Deployed zero-downtime PostgreSQL migration across 5 microservices and 1M+ records using Flyway, dual-writes & backfills",
            "Redesigned REST and gRPC endpoints into a unified transactional API, cutting downstream integration points by 60%",
            "Shipped feature-flagged rollouts, permission gates & DB backfills, monitoring prod health via Datadog for stable releases",
            "Built reusable TypeScript interfaces and data-fetching hooks with React Query, handling caching and background refetching",
          ],
        },
      ],
    },
    {
      company: "Esya Technologies",
      location: "Toronto, ON",
      logo: (
        <img
          alt="Esya Technologies"
          src={esyaLogo}
          className="w-full h-full object-cover"
        />
      ),
      roles: [
        {
          title: "Software Engineer Intern",
          dates: "Apr 2025 – Jul 2025",
          bullets: [
            "Developed RESTful FastAPI web services to detect/anonymize PII using YAML and regex for ETL data pipelines",
            "Built CI/CD pipelines with GitHub Actions and deployed dev/staging environments on AWS enabling horizontal scaling",
            "Containerized backend services using Docker and Kubernetes and managed Terraform-based AWS infrastructure",
            "Optimized large-batch ETL processing by ~25% using asynchronous Redis jobs and improved S3 I/O throughput",
            "Wrote unit and integration tests with pytest and synthetic datasets, improving detection F1 score from ~92% to ~96%",
          ],
        },
      ],
    },
    {
      company: "Computer Science Student Community",
      location: "Mississauga, ON",
      logo: (
        <img alt="CSSC" src={cssclogo} className="w-full h-full object-cover" />
      ),
      roles: [
        {
          title: "Software Engineer",
          dates: "Sept 2025 – Jan 2026",
          bullets: [
            "Built a RAG-based AI chatbot for the CSSC site, improving support for 3K+ monthly users",
            "Developed a resources hub (React + Angular) with search, tagging, and GitHub/Drive sync",
            "Set up Jenkins CI/CD with linting, tests, and automated deploys to improve release quality",
          ],
        },
        {
          title: "Director of Tech",
          dates: "Jan 2026 – Apr 2026",
          bullets: [
            "Led the technical team, managing development workflows, code reviews, and feature rollouts",
            "Maintained and improved infra, shipping updates while ensuring performance and reliability",
            "Delivered hands-on workshops, mentored students on practical tools & real-life applications",
          ],
        },
      ],
    },
  ];

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section
      id="experience"
      className="py-20 md:py-32 px-6 border-t border-border"
    >
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
          2+ years of hands-on experience building systems and leading technical
          initiatives.
        </motion.p>

        <div className="grid grid-cols-1 gap-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="border border-border bg-card group cursor-pointer transition-all duration-300 hover:shadow-lg hover:border-foreground/20"
              onClick={() => toggleExpand(index)}
            >
              {/* Card header with logo + company info */}
              <div className="p-6 flex gap-5">
                {/* Company logo */}
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 md:w-16 md:h-16 border border-border overflow-hidden bg-white flex items-center justify-center">
                    {exp.logo}
                  </div>
                </div>

                {/* Company + primary role */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-foreground leading-tight">
                        {exp.roles[0].title}
                      </h3>
                      <p className="font-medium text-foreground/80 mt-0.5">
                        {exp.company}
                      </p>
                    </div>
                    <motion.div
                      animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0 mt-1"
                    >
                      <ChevronDown className="w-5 h-5 text-muted-foreground" />
                    </motion.div>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mt-2 text-sm text-muted-foreground">
                    <span className="whitespace-nowrap">{exp.location}</span>
                    <span className="text-border">·</span>
                    <span className="whitespace-nowrap">
                      {exp.roles[0].dates}
                    </span>
                    {exp.roles.length > 1 && (
                      <span className="whitespace-nowrap px-2 py-0.5 bg-muted text-xs border border-border">
                        +{exp.roles.length - 1} role
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Expandable roles + bullet points */}
              <AnimatePresence initial={false}>
                {expandedIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-0">
                      {exp.roles.map((role, roleIndex) => (
                        <div
                          key={roleIndex}
                          className={`border-t border-border pt-4 ${
                            roleIndex < exp.roles.length - 1 ? "pb-4" : ""
                          }`}
                        >
                          {/* Show sub-heading for multi-role cards */}
                          {exp.roles.length > 1 && (
                            <div className="mb-3">
                              <p className="text-sm font-semibold text-foreground">
                                {role.title}
                              </p>
                              <p className="text-xs text-muted-foreground">
                                {role.dates}
                              </p>
                            </div>
                          )}
                          <div className="space-y-2.5">
                            {role.bullets.map((bullet, i) => (
                              <motion.p
                                key={i}
                                initial={{ opacity: 0, x: -8 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{
                                  duration: 0.3,
                                  delay:
                                    (roleIndex * role.bullets.length + i) *
                                    0.05,
                                }}
                                className="text-muted-foreground text-sm leading-relaxed pl-4 relative before:content-['–'] before:absolute before:left-0 before:text-muted-foreground/50"
                              >
                                {bullet}
                              </motion.p>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
