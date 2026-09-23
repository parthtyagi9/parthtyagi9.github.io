import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="border-t border-border py-8 px-6">
      <div className="max-w-6xl mx-auto relative flex items-center justify-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Parth Tyagi
        </p>

        <div className="group absolute right-0">
          <motion.a
            href="https://www.youtube.com/watch?v=oHg5SJYRHA0"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.08, rotate: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-1 border border-dashed border-primary/30 text-muted-foreground/60 hover:text-primary hover:border-primary/60 px-2.5 py-1 text-[11px] font-medium rounded-full transition-colors"
          >
            🚫 Do Not Click
          </motion.a>
          <span
            role="tooltip"
            className="pointer-events-none absolute right-0 -top-9 whitespace-nowrap rounded-md bg-foreground text-background text-xs font-medium px-3 py-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          >
            Do Not Click This Button
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
