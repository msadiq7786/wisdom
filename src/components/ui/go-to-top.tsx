"use client";
import { motion } from "motion/react";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

const GoToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!visible) return null;

  return (
    <motion.button
      type="button"
      onClick={scrollToTop}
      aria-label="Go to top"
      className="bg-accent text-accent-foreground fixed right-5 bottom-5 z-50 flex size-11 cursor-pointer items-center justify-center shadow-lg transition-opacity hover:opacity-90"
      whileHover={{
        y: -20,
      }}
      transition={{
        duration: 0.2,
      }}
    >
      <ArrowUp />
    </motion.button>
  );
};

export default GoToTop;
