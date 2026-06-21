import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const words = ["DEVELOPER", "DATA SCIENTIST", "ML ENGINEER", "PROBLEM SOLVER"];

const IntroScreen = ({ onComplete }) => {
  const [wordIndex, setWordIndex] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    // Cycle through words
    const interval = setInterval(() => {
      setWordIndex((prev) => {
        if (prev >= words.length - 1) {
          clearInterval(interval);
          // After last word, wait then exit
          setTimeout(() => setDone(true), 900);
          return prev;
        }
        return prev + 1;
      });
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {!done && (
        <motion.div
          key="intro"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Top line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute top-0 left-0 right-0 h-[1px] bg-white origin-left"
          />
          {/* Bottom line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="absolute bottom-0 left-0 right-0 h-[1px] bg-white origin-right"
          />

          {/* Corner marks */}
          {[
            "top-6 left-6 border-t border-l",
            "top-6 right-6 border-t border-r",
            "bottom-6 left-6 border-b border-l",
            "bottom-6 right-6 border-b border-r",
          ].map((cls, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 + i * 0.05 }}
              className={`absolute w-6 h-6 border-white/40 ${cls}`}
            />
          ))}

          {/* Main content */}
          <div className="text-center px-6 select-none">
            {/* Small label */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xs font-mono tracking-[0.5em] text-white/40 uppercase mb-8"
            >
              Portfolio
            </motion.p>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
              className="text-5xl md:text-8xl font-black tracking-tight text-white leading-none mb-6"
            >
              PRITAM<br />MUNDHE
            </motion.h1>

            {/* Animated role word */}
            <div className="h-8 flex items-center justify-center overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.p
                  key={wordIndex}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.25 }}
                  className="text-sm md:text-base font-mono tracking-[0.4em] text-white/60 uppercase absolute"
                >
                  {words[wordIndex]}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>

          {/* Loading bar */}
          <motion.div
            className="absolute bottom-16 left-1/2 -translate-x-1/2 w-48 h-[1px] bg-white/10 overflow-hidden"
          >
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 2.5, ease: "easeInOut" }}
              className="h-full bg-white origin-left"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroScreen;
