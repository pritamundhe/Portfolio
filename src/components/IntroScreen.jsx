import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ROLES = ["ML ENGINEER", "DATA SCIENTIST", "GENERATIVE AI DEV", "PROBLEM SOLVER"];
const TOTAL_MS = 4200; // visible duration

const IntroScreen = ({ onComplete }) => {
  const [phase, setPhase] = useState(0); // 0=scanline boot, 1=main reveal
  const [done, setDone] = useState(false);
  const [progress, setProgress] = useState(0);
  const [roleIdx, setRoleIdx] = useState(0);
  const [glitch, setGlitch] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    // Phase 0 → 1: after scan line sweeps
    const bootTimer = setTimeout(() => setPhase(1), 720);

    // Progress 0 → 100 over TOTAL_MS
    let p = 0;
    const stepMs = TOTAL_MS / 100;
    const progTimer = setInterval(() => {
      p++;
      setProgress(p);
      if (p >= 100) {
        clearInterval(progTimer);
        setTimeout(() => setDone(true), 380);
      }
    }, stepMs);

    // Role cycling every 850ms
    let r = 0;
    const roleTimer = setInterval(() => {
      r = (r + 1) % ROLES.length;
      setRoleIdx(r);
    }, 850);

    // Glitch at ~1.8s and ~3.6s
    const g1 = setTimeout(() => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 110);
    }, 1800);
    const g2 = setTimeout(() => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 150);
    }, 3500);

    // Cursor blink
    const blinkTimer = setInterval(() => setBlink((b) => !b), 530);

    return () => {
      clearTimeout(bootTimer);
      clearTimeout(g1);
      clearTimeout(g2);
      clearInterval(progTimer);
      clearInterval(roleTimer);
      clearInterval(blinkTimer);
    };
  }, []);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {!done && (
        <motion.div
          key="intro"
          className="fixed inset-0 z-[9999] bg-black overflow-hidden select-none"
          exit={{ y: "-100%" }}
          transition={{ duration: 1.0, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* ── CRT SCANLINES TEXTURE ── */}
          <div
            className="absolute inset-0 pointer-events-none z-[1]"
            style={{
              background:
                "repeating-linear-gradient(to bottom, transparent 0px, transparent 3px, rgba(0,0,0,0.07) 3px, rgba(0,0,0,0.07) 4px)",
            }}
          />

          {/* ── SUBTLE GRID ── */}
          <motion.div
            className="absolute inset-0 pointer-events-none z-[1]"
            initial={{ opacity: 0 }}
            animate={{ opacity: phase >= 1 ? 1 : 0 }}
            transition={{ duration: 1.8, delay: 0.2 }}
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.022) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.022) 1px, transparent 1px)
              `,
              backgroundSize: "80px 80px",
            }}
          />

          {/* ── RADIAL GLOW CENTER ── */}
          <motion.div
            className="absolute inset-0 pointer-events-none z-[1]"
            initial={{ opacity: 0 }}
            animate={{ opacity: phase >= 1 ? 1 : 0 }}
            transition={{ duration: 2, delay: 0.5 }}
            style={{
              background:
                "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(255,255,255,0.04) 0%, transparent 70%)",
            }}
          />

          {/* ── BOOT SCAN LINE (sweeps top → bottom) ── */}
          <motion.div
            className="absolute left-0 right-0 pointer-events-none z-[30]"
            style={{ height: "3px" }}
            initial={{ top: "-3px" }}
            animate={{ top: "102%" }}
            transition={{ duration: 0.68, ease: "easeIn" }}
          >
            <div
              className="w-full h-full bg-white"
              style={{
                boxShadow:
                  "0 0 40px 14px rgba(255,255,255,0.55), 0 0 80px 28px rgba(255,255,255,0.18)",
              }}
            />
          </motion.div>

          {/* ── HORIZONTAL ACCENT LINES (top & bottom zone) ── */}
          <motion.div
            className="absolute h-px bg-white/12 origin-center"
            style={{ top: "13%", left: "5%", right: "5%" }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: phase >= 1 ? 1 : 0 }}
            transition={{ duration: 1.1, delay: 0.55, ease: "easeOut" }}
          />
          <motion.div
            className="absolute h-px bg-white/12 origin-center"
            style={{ bottom: "13%", left: "5%", right: "5%" }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: phase >= 1 ? 1 : 0 }}
            transition={{ duration: 1.1, delay: 0.65, ease: "easeOut" }}
          />

          {/* ── CORNER BRACKETS ── */}
          {[
            "top-5 left-5 border-t-2 border-l-2",
            "top-5 right-5 border-t-2 border-r-2",
            "bottom-5 left-5 border-b-2 border-l-2",
            "bottom-5 right-5 border-b-2 border-r-2",
          ].map((cls, i) => (
            <motion.div
              key={i}
              className={`absolute w-9 h-9 border-white/35 ${cls}`}
              initial={{ opacity: 0, scale: 0.4 }}
              animate={{ opacity: phase >= 1 ? 1 : 0, scale: phase >= 1 ? 1 : 0.4 }}
              transition={{ delay: 0.78 + i * 0.06, duration: 0.45, ease: "easeOut" }}
            />
          ))}

          {/* ── LEFT SIDE: VERTICAL METADATA ── */}
          <motion.div
            className="absolute left-6 top-1/2 -translate-y-1/2 z-20 hidden md:flex flex-col items-center gap-4"
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: phase >= 1 ? 1 : 0, x: phase >= 1 ? 0 : -12 }}
            transition={{ delay: 1.0, duration: 0.7 }}
          >
            <div className="w-px h-16 bg-white/10" />
            <p
              className="text-[9px] font-mono tracking-[0.65em] text-white/18 uppercase"
              style={{ writingMode: "vertical-rl" }}
            >
              PORTFOLIO · 2025
            </p>
            <div className="w-px h-16 bg-white/10" />
          </motion.div>

          {/* ── RIGHT SIDE: COORDINATES ── */}
          <motion.div
            className="absolute right-6 top-1/2 -translate-y-1/2 z-20 hidden md:flex flex-col items-end gap-1.5"
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: phase >= 1 ? 1 : 0, x: phase >= 1 ? 0 : 12 }}
            transition={{ delay: 1.1, duration: 0.7 }}
          >
            {["18.52°N", "73.85°E", "PUNE, IN"].map((t, i) => (
              <p key={i} className="text-[9px] font-mono tracking-[0.4em] text-white/18 uppercase">
                {t}
              </p>
            ))}
            <div className="w-6 h-px bg-white/12 mt-2" />
            <p className="text-[8px] font-mono text-white/12 tracking-widest">v1.0</p>
          </motion.div>

          {/* ══════════════ MAIN CENTER CONTENT ══════════════ */}
          <div className="absolute inset-0 flex flex-col items-center justify-center z-20 px-6">

            {/* Top status label with blinking cursor */}
            <motion.div
              className="flex items-center gap-2 mb-10 md:mb-14"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: phase >= 1 ? 1 : 0, y: phase >= 1 ? 0 : 10 }}
              transition={{ delay: 0.82, duration: 0.6 }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full bg-white/60"
                style={{
                  boxShadow: "0 0 6px 2px rgba(255,255,255,0.4)",
                  opacity: blink ? 1 : 0.2,
                  transition: "opacity 0.1s",
                }}
              />
              <p className="text-[9px] md:text-[10px] font-mono tracking-[0.75em] text-white/28 uppercase">
                INITIALIZING PORTFOLIO
              </p>
            </motion.div>

            {/* ── NAME: PRITAM ── clip reveal from bottom */}
            <div style={{ overflow: "hidden", lineHeight: 1 }}>
              <motion.h1
                initial={{ y: "115%" }}
                animate={{ y: phase >= 1 ? "0%" : "115%" }}
                transition={{ delay: 0.92, duration: 0.78, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  fontFamily: "'Italiana', serif",
                  fontSize: "clamp(4.5rem, 16vw, 12rem)",
                  fontWeight: 400,
                  letterSpacing: "0.08em",
                  lineHeight: 1,
                  color: "#ffffff",
                  textShadow: glitch
                    ? "6px 0 #ff0044, -6px 0 #00eeff"
                    : "0 0 120px rgba(255,255,255,0.1)",
                  transform: glitch ? "translateX(5px)" : "translateX(0)",
                  transition: glitch ? "none" : "transform 0.1s, text-shadow 0.12s",
                }}
              >
                PRITAM
              </motion.h1>
            </div>

            {/* ── NAME: MUNDHE ── slight offset color for depth */}
            <div style={{ overflow: "hidden", lineHeight: 1 }} className="mb-5">
              <motion.h1
                initial={{ y: "115%" }}
                animate={{ y: phase >= 1 ? "0%" : "115%" }}
                transition={{ delay: 1.04, duration: 0.78, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  fontFamily: "'Italiana', serif",
                  fontSize: "clamp(4.5rem, 16vw, 12rem)",
                  fontWeight: 400,
                  letterSpacing: "0.08em",
                  lineHeight: 1,
                  color: "rgba(255,255,255,0.7)",
                  textShadow: glitch
                    ? "-6px 0 #ff0044, 6px 0 #00eeff"
                    : "none",
                  transform: glitch ? "translateX(-5px)" : "translateX(0)",
                  transition: glitch ? "none" : "transform 0.1s, text-shadow 0.12s",
                }}
              >
                MUNDHE
              </motion.h1>
            </div>

            {/* Gradient divider line */}
            <motion.div
              className="w-full max-w-md h-px mb-5 origin-center"
              style={{
                background:
                  "linear-gradient(to right, transparent, rgba(255,255,255,0.28), transparent)",
              }}
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: phase >= 1 ? 1 : 0, opacity: phase >= 1 ? 1 : 0 }}
              transition={{ delay: 1.25, duration: 0.9, ease: "easeOut" }}
            />

            {/* Animated role */}
            <div className="h-5 overflow-hidden flex items-center justify-center mb-14">
              <AnimatePresence mode="wait">
                <motion.p
                  key={roleIdx}
                  initial={{ opacity: 0, y: 14, filter: "blur(4px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -14, filter: "blur(4px)" }}
                  transition={{ duration: 0.32 }}
                  className="text-[10px] md:text-xs font-mono tracking-[0.55em] text-white/42 uppercase"
                >
                  {ROLES[roleIdx]}
                </motion.p>
              </AnimatePresence>
            </div>

            {/* ── PROGRESS BAR ── */}
            <motion.div
              className="flex flex-col items-center gap-2.5 w-72"
              initial={{ opacity: 0 }}
              animate={{ opacity: phase >= 1 ? 1 : 0 }}
              transition={{ delay: 1.4, duration: 0.6 }}
            >
              {/* Bar track */}
              <div className="relative w-full h-[2px] bg-white/10 overflow-visible">
                {/* Fill */}
                <div
                  className="absolute top-0 left-0 h-full bg-white"
                  style={{ width: `${progress}%`, transition: "width 0.04s linear" }}
                />
                {/* Glowing leading dot */}
                <div
                  className="absolute top-1/2 w-2.5 h-2.5 rounded-full bg-white -translate-y-1/2 -translate-x-1/2"
                  style={{
                    left: `${progress}%`,
                    boxShadow: "0 0 10px 4px rgba(255,255,255,0.65)",
                    opacity: progress > 0 && progress < 100 ? 1 : 0,
                    transition: "opacity 0.3s",
                  }}
                />
              </div>

              {/* Label row */}
              <div className="flex items-center justify-between w-full">
                <p className="text-[8px] font-mono text-white/20 tracking-[0.45em] uppercase">
                  {progress < 100 ? "Loading" : "✓  Ready"}
                </p>
                <p className="text-[10px] font-mono text-white/38 tracking-widest tabular-nums">
                  {String(progress).padStart(3, "0")}%
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroScreen;
