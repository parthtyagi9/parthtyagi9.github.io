import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import esyaLogo from "@/assets/esya-logo.jpg";

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const experiences = [
    {
      company: "Tempo Software",
      location: "Toronto, ON",
      logo: (
        <img
          alt="Tempo Assist"
          src="https://res.cloudinary.com/warmly/image/upload/q_auto,f_auto,fl_lossy,c_crop,g_custom/v1762958843/warm_opps_user_avatars_production/eti9329ch2cygofkfke2.png"
          className="w-full h-full object-cover"
        />
      ),
      roles: [
        {
          title: "Software Engineer Intern",
          dates: "June 2026 – Present",
          bullets: [
            "Working with Java/Spring Boot to build and maintain backend services for a SaaS platform",
            "Building RESTful APIs and integrating with third-party services to enhance platform functionality",
            "Developing React frontends using TypeScript, Redux, and Material-UI to improve user experience",
            "Implementing unit and integration tests to ensure code quality and reliability",
            "Collaborating with cross-functional teams to deliver new features and improvements",
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
            "Built FastAPI services for PII detection/anonymization using YAML + regex for ETL pipelines",
            "Deployed dev/staging on AWS (ECS, S3, KMS) with Docker + GitHub Actions CI/CD",
            "Improved batch processing ~25% with Redis-backed background jobs and faster S3 I/O",
            "Added JWT auth and CloudWatch audit logging for secure access and debugging",
            "Orchestrated S3-triggered ETL workflows using AWS Lambda",
            "Expanded pytest coverage with synthetic data; improved F1 ~92% → ~96%",
            "Implemented k-anonymity checks and privacy risk reports; documented in Confluence/Jira",
          ],
        },
      ],
    },
    {
      company: "Computer Science Student Community",
      location: "Mississauga, ON",
      logo: (
        <img
          alt="CSSC"
          src="https://media.licdn.com/dms/image/v2/C4E0BAQEHyviM79Tl2g/company-logo_200_200/company-logo_200_200/0/1630656546909?e=1784160000&v=beta&t=Q_e0O3Cw0ltqin8LJWCXc2g3X84q-5yElUN4OdoHms8"
          className="w-full h-full object-cover"
        />
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
                    <span className="whitespace-nowrap">{exp.roles[0].dates}</span>
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
