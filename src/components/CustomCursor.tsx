import { useEffect, useState, useCallback } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CustomCursor = () => {
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { damping: 30, stiffness: 300, mass: 0.5 });
  const smoothY = useSpring(mouseY, { damping: 30, stiffness: 300, mass: 0.5 });

  const checkPointer = useCallback((target: HTMLElement) => {
    return !!(
      target.tagName === "A" ||
      target.tagName === "BUTTON" ||
      target.tagName === "INPUT" ||
      target.tagName === "TEXTAREA" ||
      target.closest("a") ||
      target.closest("button") ||
      target.closest("[role='button']")
    );
  }, []);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setIsVisible(true);
      setIsPointer(checkPointer(e.target as HTMLElement));
    };

    const hide = () => setIsVisible(false);
    const show = () => setIsVisible(true);

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseleave", hide);
    window.addEventListener("mouseenter", show);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseleave", hide);
      window.removeEventListener("mouseenter", show);
    };
  }, [mouseX, mouseY, checkPointer]);

  const [isTouchDevice, setIsTouchDevice] = useState(false);
  useEffect(() => {
    setIsTouchDevice("ontouchstart" in window || navigator.maxTouchPoints > 0);
  }, []);

  if (isTouchDevice || !isVisible) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference"
      style={{
        x: smoothX,
        y: smoothY,
        translateX: "-50%",
        translateY: "-50%",
      }}
    >
      <motion.div
        style={{
          width: 12,
          height: 12,
          borderRadius: "50%",
          backgroundColor: "#22c55e",
        }}
        animate={{
          scale: isPointer ? 1.8 : 1,
          opacity: isPointer ? 0.8 : 1,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 25 }}
      />
    </motion.div>
  );
};

export default CustomCursor;
