import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const tourSteps = [
  {
    id: "hero",
    sectionId: null,
    label: "01 — INTRO",
    title: "Hey, I'm Pritam Mundhe",
    description:
      "Computer Engineering student passionate about Machine Learning, Data Science & Generative AI. Yeh portfolio hai meri journey ka — code, projects, aur achievements.",
    readSeconds: 8,
  },
  {
    id: "skills",
    sectionId: "skills",
    label: "02 — EXPERTISE",
    title: "My Technical Skills",
    description:
      "Python, C++, SQL se lekar ML models aur GenAI (LangChain, RAG, LLMs) tak — yahan hain woh sab technologies jo main daily use karta hoon.",
    readSeconds: 8,
  },
  {
    id: "projects",
    sectionId: "projects",
    label: "03 — PROJECTS",
    title: "What I've Built",
    description:
      "Voice Assistant, Vision AI, WhatsApp Chat Analyzer, AI Playlist Generator — yeh hain meri real-world projects. Kisi bhi card pe click karo live demo dekhne ke liye!",
    readSeconds: 9,
  },
  {
    id: "certifications",
    sectionId: "certifications",
    label: "04 — EDUCATION",
    title: "My Journey So Far",
    description:
      "B.Tech Computer Engineering + Microsoft Azure DP-900 (925/1000) — continuous learning meri identity hai. Aur certifications aate rahe hain!",
    readSeconds: 8,
  },
  {
    id: "contact",
    sectionId: "contact",
    label: "05 — CONNECT",
    title: "Let's Build Together",
    description:
      "Open to ML/AI opportunities, collaborations, aur interesting conversations. Email, LinkedIn ya GitHub — har jagah available hoon!",
    readSeconds: 8,
  },
];

const AutoScrollTour = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(-1); // -1 = not started
  const [visible, setVisible] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);
  const [totalTime, setTotalTime] = useState(0);
  const [done, setDone] = useState(false);
  const timerRef = useRef(null);
  const stepRef = useRef(-1);

  const scrollToSection = (sectionId) =>
    new Promise((resolve) => {
      if (!sectionId) {
        window.scrollTo({ top: 0, behavior: "smooth" });
        setTimeout(resolve, 900);
      } else {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY - 70;
          window.scrollTo({ top, behavior: "smooth" });
          setTimeout(resolve, 1000);
        } else {
          resolve();
        }
      }
    });

  const runStep = async (index) => {
    if (index >= tourSteps.length) {
      setVisible(false);
      // Scroll back to top smoothly after tour ends
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        setTimeout(() => {
          setDone(true);
          onComplete?.();
        }, 1000);
      }, 400);
      return;
    }

    stepRef.current = index;
    const step = tourSteps[index];

    // Hide popup, scroll, then show
    setVisible(false);
    await new Promise((r) => setTimeout(r, 350));
    await scrollToSection(step.sectionId);
    await new Promise((r) => setTimeout(r, 400));

    setCurrentStep(index);
    setTimeLeft(step.readSeconds);
    setTotalTime(step.readSeconds);
    setVisible(true);
  };

  // Kick off tour after mount
  useEffect(() => {
    const t = setTimeout(() => runStep(0), 500);
    return () => clearTimeout(t);
  }, []);

  // Countdown timer
  useEffect(() => {
    if (!visible || timeLeft <= 0) return;

    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current);
          // Move to next step
          const next = stepRef.current + 1;
          setTimeout(() => runStep(next), 300);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timerRef.current);
  }, [visible, currentStep]);

  if (done) return null;
  if (currentStep < 0) return null;

  const step = tourSteps[currentStep];
  const progress = totalTime > 0 ? (totalTime - timeLeft) / totalTime : 0;

  return (
    <AnimatePresence>
      {visible && (
        <>
          {/* Full screen blur overlay */}
          <motion.div
            key="blur-bg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[8000]"
            style={{
              backdropFilter: "blur(14px) brightness(0.35)",
              WebkitBackdropFilter: "blur(14px) brightness(0.35)",
              background: "rgba(0,0,0,0.5)",
            }}
          />

          {/* Main popup card — centered */}
          <motion.div
            key={`card-${currentStep}`}
            initial={{ opacity: 0, scale: 0.88, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: -30 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[8001] flex items-center justify-center px-6 pointer-events-none"
          >
            <div
              className="w-full max-w-2xl pointer-events-auto relative"
              style={{
                background:
                  "linear-gradient(160deg, rgba(8,8,8,0.98) 0%, rgba(18,18,18,0.98) 100%)",
                border: "1px solid rgba(255,255,255,0.18)",
                boxShadow:
                  "0 0 0 1px rgba(255,255,255,0.05), 0 40px 100px rgba(0,0,0,0.9), 0 0 120px rgba(255,255,255,0.03)",
              }}
            >
              {/* Animated fill border - top timer bar */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-white/10 overflow-hidden">
                <motion.div
                  className="h-full bg-white origin-left"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{
                    duration: totalTime,
                    ease: "linear",
                  }}
                />
              </div>

              {/* Corner marks */}
              <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-white/50" />
              <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-white/50" />
              <div className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-white/50" />
              <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-white/50" />

              <div className="px-10 py-10 md:px-14 md:py-12">
                {/* Step label */}
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                  className="text-[11px] font-mono tracking-[0.5em] text-white/30 uppercase mb-5"
                >
                  {step.label}
                </motion.p>

                {/* Big Title */}
                <motion.h2
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.22, duration: 0.5 }}
                  className="text-4xl md:text-6xl font-black tracking-tight text-white leading-none mb-6"
                >
                  {step.title}
                </motion.h2>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.32, duration: 0.5 }}
                  className="text-base md:text-lg text-white/65 font-medium leading-relaxed mb-10"
                >
                  {step.description}
                </motion.p>

                {/* Bottom row — step dots + countdown */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.45 }}
                  className="flex items-center justify-between"
                >
                  {/* Step indicators */}
                  <div className="flex gap-2 items-center">
                    {tourSteps.map((_, i) => (
                      <motion.div
                        key={i}
                        animate={{
                          width: i === currentStep ? 28 : 8,
                          backgroundColor:
                            i < currentStep
                              ? "rgba(255,255,255,0.9)"
                              : i === currentStep
                              ? "rgba(255,255,255,1)"
                              : "rgba(255,255,255,0.18)",
                        }}
                        transition={{ duration: 0.4 }}
                        className="h-[3px] rounded-full"
                      />
                    ))}
                  </div>

                  {/* Countdown timer */}
                  <div className="flex items-center gap-3">
                    {/* Circular timer */}
                    <div className="relative w-12 h-12">
                      <svg
                        className="w-12 h-12 -rotate-90"
                        viewBox="0 0 48 48"
                      >
                        {/* Background circle */}
                        <circle
                          cx="24"
                          cy="24"
                          r="20"
                          fill="none"
                          stroke="rgba(255,255,255,0.08)"
                          strokeWidth="2"
                        />
                        {/* Progress arc */}
                        <motion.circle
                          cx="24"
                          cy="24"
                          r="20"
                          fill="none"
                          stroke="rgba(255,255,255,0.9)"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeDasharray={`${2 * Math.PI * 20}`}
                          initial={{
                            strokeDashoffset: 0,
                          }}
                          animate={{
                            strokeDashoffset: 2 * Math.PI * 20,
                          }}
                          transition={{
                            duration: totalTime,
                            ease: "linear",
                          }}
                        />
                      </svg>
                      {/* Number in center */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-sm font-black text-white font-mono">
                          {timeLeft}
                        </span>
                      </div>
                    </div>

                    <span className="text-xs font-mono text-white/25 tracking-widest uppercase">
                      auto
                    </span>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default AutoScrollTour;
