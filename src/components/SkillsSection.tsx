import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const skillCategories = [
    {
      title: "Languages",
      skills: ["Python", "Java", "C", "C++", "C#", "JavaScript", "TypeScript", "R", "Bash", "HTML"]
    },
    {
      title: "Frameworks",
      skills: ["FastAPI", "React", "Flask", "Node.js", "scikit-learn", "PyTorch", "Spring Boot"]
    },
    {
      title: "Cloud & Database",
      skills: ["AWS", "Docker", "Kubernetes", "Redis", "PostgreSQL", "NoSQL", "Google Cloud"]
    },
    {
      title: "Tools",
      skills: ["Git", "GitHub Actions", "Linux", "Pytest", "JUnit", "Postman", "CI/CD"]
    }
  ];

  return (
    <section id="skills" className="py-20 md:py-32 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold tracking-tight mb-16 text-foreground"
        >
          Technical Skills
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="border border-border p-6"
            >
              <h3 className="text-lg font-semibold text-foreground mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-2.5 py-1 bg-muted text-foreground text-xs border border-border"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
