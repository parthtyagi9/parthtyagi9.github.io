import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const EducationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const educationData = [
    {
      institution: "University of Toronto",
      degree: "Honours Bachelor of Science (HBSc)",
      field: "Computer Science, Stats and Applied Math",
      dates: "2023 – 2027",
      location: "Toronto, ON",
    },
    {
      institution: "London School of Economics and Political Science",
      degree: "Summer School",
      field: "",
      courses: [
        "ME314 – Introduction to Data Science and Machine Learning",
        "FM360 – Options, Futures and Other Financial Derivatives",
      ],
      dates: "2025",
      location: "London, UK",
    },
  ];

  return (
    <section id="education" className="py-20 md:py-32 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold tracking-tight mb-16 text-foreground"
        >
          Education
        </motion.h2>

        <div className="relative border-l-2 border-foreground ml-2">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              className={`relative pl-8 ${index < educationData.length - 1 ? 'pb-16' : ''}`}
            >
              <div className="absolute -left-[9px] top-2 w-4 h-4 bg-foreground rounded-full" />

              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-2">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground">{edu.institution}</h3>
                  <p className="text-foreground font-medium">{edu.degree}</p>
                  {edu.field && <p className="text-muted-foreground text-sm">{edu.field}</p>}
                </div>
                <div className="text-sm text-muted-foreground md:text-right shrink-0">
                  <p>{edu.dates}</p>
                  <p>{edu.location}</p>
                </div>
              </div>

              {edu.courses && (
                <div className="mt-3 space-y-1">
                  {edu.courses.map((course, i) => (
                    <p key={i} className="text-sm text-muted-foreground">– {course}</p>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
