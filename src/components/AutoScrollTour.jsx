import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const tourSteps = [
  {
    id: "hero",
    sectionId: null,
    index: "01",
    tag: "INTRODUCTION",
    title: "Hey, I'm\nPritam Mundhe",
    description:
      "Computer Engineering student passionate about Machine Learning, Data Science & Generative AI. Yeh portfolio hai meri journey ka — code, projects, aur achievements.",
    icon: "◈",
  },
  {
    id: "skills",
    sectionId: "skills",
    index: "02",
    tag: "EXPERTISE",
    title: "My Technical\nSkill Set",
    description:
      "Python, C++, SQL se lekar ML models aur GenAI (LangChain, RAG, LLMs) tak — yahan hain woh sab technologies jo main daily use karta hoon.",
    icon: "⬡",
    readSeconds: 8,
  },
  {
    id: "projects",
    sectionId: "projects",
    index: "03",
    tag: "FEATURED WORK",
    title: "What I've\nBuilt So Far",
    description:
      "Voice Assistant, Vision AI, WhatsApp Chat Analyzer, AI Playlist Generator — real-world projects. Kisi bhi card pe click karo live demo dekhne ke liye!",
    icon: "◎",
    readSeconds: 9,
  },
  {
    id: "certifications",
    sectionId: "certifications",
    index: "04",
    tag: "EDUCATION",
    title: "My Academic\nJourney",
    description:
      "B.Tech Computer Engineering + Microsoft Azure DP-900 (925/1000) — continuous learning meri identity hai. Aur certifications aate rahe hain!",
    icon: "◇",
    readSeconds: 8,
  },
  {
    id: "contact",
    sectionId: "contact",
    index: "05",
    tag: "CONNECT",
    title: "Let's Build\nTogether",
    description:
      "Open to ML/AI opportunities, collaborations, aur interesting conversations. Email, LinkedIn ya GitHub — har jagah available hoon!",
    icon: "◉",
    readSeconds: 8,
  },
];

const STEP_SECONDS = [8, 8, 9, 8, 8];

const AutoScrollTour = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(-1);
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
        } else resolve();
      }
    });

  const runStep = async (index) => {
    if (index >= tourSteps.length) {
      setVisible(false);
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
    setVisible(false);
    await new Promise((r) => setTimeout(r, 380));
    await scrollToSection(step.sectionId);
    await new Promise((r) => setTimeout(r, 350));

    const secs = STEP_SECONDS[index];
    setCurrentStep(index);
    setTimeLeft(secs);
    setTotalTime(secs);
    setVisible(true);
  };

  const handleSkip = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    setVisible(false);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setTimeout(() => {
        setDone(true);
        onComplete?.();
      }, 800);
    }, 300);
  };

  useEffect(() => {
    const t = setTimeout(() => runStep(0), 500);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!visible || timeLeft <= 0) return;
    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current);
          const next = stepRef.current + 1;
          setTimeout(() => runStep(next), 300);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timerRef.current);
  }, [visible, currentStep]);

  if (done || currentStep < 0) return null;

  const step = tourSteps[currentStep];
  const circumference = 2 * Math.PI * 22;

  return (
    <AnimatePresence>
      {visible && (
        <>
          {/* ── BLUR OVERLAY ── */}
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45 }}
            className="fixed inset-0 z-[8000]"
            style={{
              backdropFilter: "blur(18px) brightness(0.28) saturate(0.6)",
              WebkitBackdropFilter: "blur(18px) brightness(0.28) saturate(0.6)",
              background: "rgba(0,0,0,0.55)",
            }}
          />

          {/* ── CARD ── */}
          <motion.div
            key={`card-${currentStep}`}
            initial={{ opacity: 0, y: 48, scale: 0.93 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -32, scale: 0.96 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[8001] flex items-center justify-center px-5 pointer-events-none"
          >
            <div
              className="relative w-full max-w-[680px] pointer-events-auto overflow-hidden"
              style={{
                background:
                  "linear-gradient(145deg, rgba(6,6,6,0.99) 0%, rgba(14,14,14,0.99) 60%, rgba(10,10,10,0.99) 100%)",
                border: "1px solid rgba(255,255,255,0.13)",
                boxShadow:
                  "0 0 0 1px rgba(255,255,255,0.04), 0 50px 120px rgba(0,0,0,0.95), inset 0 1px 0 rgba(255,255,255,0.06)",
              }}
            >
              {/* ── TOP PROGRESS FILL BAR ── */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-white/8 z-10">
                <motion.div
                  className="h-full bg-white origin-left"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: totalTime, ease: "linear" }}
                />
              </div>

              {/* ── INNER GLOW (top center) ── */}
              <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.05) 0%, transparent 70%)",
                }}
              />

              {/* ── CORNER MARKS ── */}
              <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-white/40 pointer-events-none" />
              <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-white/40 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-white/40 pointer-events-none" />
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-white/40 pointer-events-none" />

              {/* ── SKIP BUTTON ── */}
              <button
                onClick={handleSkip}
                className="absolute top-5 right-6 z-20 text-[10px] font-mono tracking-widest text-white/30 hover:text-white transition-colors flex items-center gap-1.5 px-3 py-1.5 rounded-sm hover:bg-white/10"
              >
                SKIP
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                </svg>
              </button>

              {/* ── CARD BODY ── */}
              <div className="flex min-h-[300px]">

                {/* LEFT ACCENT STRIP */}
                <motion.div
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ delay: 0.15, duration: 0.5, ease: "easeOut" }}
                  className="w-[3px] bg-white/90 origin-top flex-shrink-0 self-stretch"
                  style={{
                    boxShadow: "2px 0 20px 2px rgba(255,255,255,0.15)",
                  }}
                />

                {/* MAIN CONTENT */}
                <div className="flex-1 px-8 md:px-10 py-9 md:py-10">

                  {/* ── TOP ROW: step index + tag + icon ── */}
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.18, duration: 0.45 }}
                    className="flex items-center justify-between mb-7"
                  >
                    <div className="flex items-center gap-3">
                      {/* Step index box */}
                      <div
                        className="flex items-center justify-center w-8 h-8 border border-white/20"
                        style={{ background: "rgba(255,255,255,0.04)" }}
                      >
                        <span className="text-[10px] font-black font-mono text-white/60 tracking-widest">
                          {step.index}
                        </span>
                      </div>
                      {/* Divider */}
                      <div className="w-px h-4 bg-white/15" />
                      <span className="text-[9px] font-mono tracking-[0.55em] text-white/28 uppercase">
                        {step.tag}
                      </span>
                    </div>

                    {/* Big icon */}
                    <motion.span
                      initial={{ opacity: 0, rotate: -20, scale: 0.5 }}
                      animate={{ opacity: 0.18, rotate: 0, scale: 1 }}
                      transition={{ delay: 0.25, duration: 0.6, ease: "easeOut" }}
                      className="text-4xl text-white select-none"
                    >
                      {step.icon}
                    </motion.span>
                  </motion.div>

                  {/* ── TITLE ── clipped slide reveal */}
                  <div className="overflow-hidden mb-1">
                    <motion.h2
                      initial={{ y: "110%" }}
                      animate={{ y: "0%" }}
                      transition={{ delay: 0.24, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      className="text-[2.1rem] md:text-[2.8rem] font-black tracking-tight text-white leading-[1.05] whitespace-pre-line"
                    >
                      {step.title}
                    </motion.h2>
                  </div>

                  {/* ── THIN RULE ── */}
                  <motion.div
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={{ scaleX: 1, opacity: 1 }}
                    transition={{ delay: 0.38, duration: 0.6, ease: "easeOut" }}
                    className="h-px origin-left mb-5 mt-4"
                    style={{
                      background:
                        "linear-gradient(to right, rgba(255,255,255,0.3), rgba(255,255,255,0.05) 60%, transparent)",
                    }}
                  />

                  {/* ── DESCRIPTION ── */}
                  <motion.p
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.38, duration: 0.5 }}
                    className="text-[15px] md:text-[16px] text-white/55 font-medium leading-[1.75] mb-8"
                  >
                    {step.description}
                  </motion.p>

                  {/* ── BOTTOM ROW ── */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="flex items-center justify-between"
                  >
                    {/* Step pills */}
                    <div className="flex items-center gap-2">
                      {tourSteps.map((_, i) => (
                        <motion.div
                          key={i}
                          animate={{
                            width: i === currentStep ? 32 : 7,
                            opacity: i > currentStep ? 0.2 : 1,
                            backgroundColor:
                              i < currentStep
                                ? "rgba(255,255,255,0.7)"
                                : i === currentStep
                                ? "rgba(255,255,255,1)"
                                : "rgba(255,255,255,0.15)",
                          }}
                          transition={{ duration: 0.4 }}
                          className="h-[3px] rounded-full"
                        />
                      ))}
                    </div>

                    {/* Circular countdown */}
                    <div className="flex items-center gap-2.5">
                      <div className="relative w-11 h-11">
                        <svg
                          className="w-11 h-11 -rotate-90 absolute inset-0"
                          viewBox="0 0 48 48"
                        >
                          {/* Track */}
                          <circle
                            cx="24"
                            cy="24"
                            r="22"
                            fill="none"
                            stroke="rgba(255,255,255,0.07)"
                            strokeWidth="1.5"
                          />
                          {/* Arc drain */}
                          <motion.circle
                            cx="24"
                            cy="24"
                            r="22"
                            fill="none"
                            stroke="rgba(255,255,255,0.85)"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeDasharray={circumference}
                            initial={{ strokeDashoffset: 0 }}
                            animate={{ strokeDashoffset: circumference }}
                            transition={{ duration: totalTime, ease: "linear" }}
                            style={{
                              filter: "drop-shadow(0 0 4px rgba(255,255,255,0.6))",
                            }}
                          />
                        </svg>
                        {/* Number */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-[13px] font-black font-mono text-white leading-none tabular-nums">
                            {timeLeft}
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-col gap-0.5">
                        <span className="text-[8px] font-mono text-white/20 tracking-[0.4em] uppercase leading-none">
                          AUTO
                        </span>
                        <span className="text-[8px] font-mono text-white/15 tracking-widest uppercase leading-none">
                          NEXT
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default AutoScrollTour;
