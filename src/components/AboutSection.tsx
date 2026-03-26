import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";


const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="about" className="py-20 md:py-32 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl">
          <motion.p
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-sm text-muted-foreground mb-4"
          >
            About
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-foreground leading-tight"
          >
            I'm Focused on Systems, Data, and AI
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground leading-relaxed mb-8"
          >
            I'm studying Computer Science and Statistics at the University of Toronto. I've completed 15+ projects spanning full-stack development, machine learning, and systems programming, with particular focus on AI, quantitative finance, and understanding how things work at a deep level.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex gap-3"
          >
            <Button
              variant="outline"
              size="sm"
              onClick={() => scrollToSection("experience")}
              className="border-border hover:bg-muted"
            >
              View work
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
