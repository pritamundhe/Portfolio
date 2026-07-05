import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

/* ── inject CSS keyframes once ── */
const STYLE_ID = "rb-f1-keyframes";
if (typeof document !== "undefined" && !document.getElementById(STYLE_ID)) {
  const s = document.createElement("style");
  s.id = STYLE_ID;
  s.textContent = `
    @keyframes carFloat {
      0%   { transform: translateY(0px); }
      50%  { transform: translateY(-6px); }
      100% { transform: translateY(0px); }
    }
    @keyframes exhaustDrift {
      0%   { opacity: 0.9; transform: translate(0px, 0px) scale(0.5); }
      50%  { opacity: 0.5; }
      100% { opacity: 0;   transform: translate(-400px, -20px) scale(3); }
    }
    @keyframes speedLine {
      0%   { transform: translateX(100vw); opacity: 0; }
      10%  { opacity: 1; }
      90%  { opacity: 1; }
      100% { transform: translateX(-100vw); opacity: 0; }
    }
    @keyframes blink {
      0%, 100% { opacity: 1; }
      50%       { opacity: 0.25; }
    }
  `;
  document.head.appendChild(s);
}

/* ─── Telemetry bar ─────────────────────────────────────────── */
const TELEMETRY = [
  { label: "THROTTLE", value: 97,  color: "#1566c0" },
  { label: "BRAKE",    value: 4,   color: "#cc1e1e" },
  { label: "DRS",      value: 100, color: "#00d4ff" },
  { label: "ERS",      value: 82,  color: "#ffffff" },
];

function TelemetryBar({ label, value, color, delay, inView }) {
  const [w, setW] = useState(0);
  useEffect(() => {
    if (inView) { const t = setTimeout(() => setW(value), delay); return () => clearTimeout(t); }
  }, [inView, value, delay]);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span style={{ fontFamily: "monospace", fontSize: "0.58rem", letterSpacing: "0.2em", color: "rgba(255,255,255,0.38)", textTransform: "uppercase" }}>{label}</span>
        <span style={{ fontFamily: "monospace", fontSize: "0.62rem", color, letterSpacing: "0.06em", fontWeight: 700 }}>{value}%</span>
      </div>
      <div style={{ height: 2, background: "rgba(255,255,255,0.07)", position: "relative", overflow: "hidden", borderRadius: 1 }}>
        <div style={{ position: "absolute", top: 0, left: 0, height: "100%", width: `${w}%`, background: `linear-gradient(to right, ${color}88, ${color})`, boxShadow: `0 0 10px 2px ${color}55`, transition: "width 1.4s cubic-bezier(0.22,1,0.36,1)", borderRadius: 1 }} />
      </div>
    </div>
  );
}

/* ─── Exhaust smoke cloud (absolutely positioned, CSS animated) ─ */
function ExhaustCloud({ left, top, delay, dur, size, dx, dy }) {
  return (
    <div style={{
      position: "absolute",
      left, top,
      width: size, height: size,
      borderRadius: "50%",
      background: "radial-gradient(circle, rgba(160,170,210,0.65) 0%, rgba(80,110,200,0.25) 50%, transparent 100%)",
      filter: "blur(6px)",
      animation: `exhaustDrift ${dur}s ${delay}s linear infinite`,
      pointerEvents: "none",
    }} />
  );
}

/* ─── Speed line in background ─────────────────────────────── */
function SpeedLine({ top, width, opacity, dur, delay, color, height, blur }) {
  return (
    <div style={{
      position: "absolute",
      top, right: 0,
      height: height || 2,
      width,
      background: `linear-gradient(to left, transparent, ${color}, transparent)`,
      opacity,
      filter: `blur(${blur || 2}px)`,
      borderRadius: "10px",
      animation: `speedLine ${dur}s ${delay}s linear infinite`,
      pointerEvents: "none",
    }} />
  );
}

/* ─── Main Component ─────────────────────────────────────────── */
const RedBullF1 = () => {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  const STATS = [
    { label: "Power Unit", value: "Honda RBPT" },
    { label: "Top Speed",  value: "372 km/h"  },
    { label: "0 → 100",   value: "2.4 sec"    },
    { label: "Downforce",  value: "3.5 G"      },
  ];

  /* Speed lines config - much faster for tracking shot, with blur and varied height */
  const speedLines = Array.from({ length: 25 }, (_, i) => {
    const isLight = Math.random() > 0.8;
    return {
      top: `${2 + Math.random() * 95}%`,
      width: `${40 + Math.random() * 60}%`,
      opacity: isLight ? 0.3 + Math.random() * 0.2 : 0.05 + Math.random() * 0.1,
      dur: 2.5 + Math.random() * 3,
      delay: Math.random() * 2,
      height: isLight ? 3 + Math.random() * 4 : 1 + Math.random() * 2,
      blur: isLight ? 4 + Math.random() * 4 : 1 + Math.random() * 2,
      color: isLight 
        ? (Math.random() > 0.5 ? "rgba(255, 255, 255, 1)" : "rgba(21, 102, 192, 1)")
        : "rgba(255, 255, 255, 0.4)",
    };
  });

  /* Exhaust cloud positions (relative to car's exhaust pipe) */
  const exhaustClouds = [
    { left: "2%",  top: "30%", delay: 0,    dur: 2.5, size: 28, dx: -300, dy: -20 },
    { left: "3%",  top: "38%", delay: 0.4,  dur: 3.0, size: 36, dx: -350, dy: -30 },
    { left: "1%",  top: "45%", delay: 0.8,  dur: 2.2, size: 22, dx: -250, dy: -10 },
    { left: "4%",  top: "33%", delay: 1.2,  dur: 2.8, size: 40, dx: -400, dy: -25 },
    { left: "2%",  top: "42%", delay: 1.6,  dur: 2.4, size: 30, dx: -280, dy: -15 },
    { left: "0%",  top: "36%", delay: 2.0,  dur: 2.6, size: 32, dx: -320, dy: -20 },
  ];

  return (
    <section
      ref={sectionRef}
      id="redbull-f1"
      style={{ position: "relative", background: "#000", overflow: "hidden", color: "white", paddingTop: "5rem" }}
    >



      {/* ══════════════════════════════════════════════════
          CAR RACE TRACK — full-width cinematic strip
      ══════════════════════════════════════════════════ */}
      <div style={{
        position: "relative",
        width: "100%",
        height: "420px",
        overflow: "hidden",
        background: "linear-gradient(to bottom, #000 0%, #050810 40%, #000 100%)",
        borderTop: "1px solid rgba(255,255,255,0.05)",
      }}>

        {/* Speed lines background */}
        {speedLines.map((l, i) => <SpeedLine key={i} {...l} />)}

        {/* Road surface glow */}
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0, height: "40%",
          background: "linear-gradient(to top, rgba(21,102,192,0.08) 0%, transparent 100%)",
          pointerEvents: "none",
        }} />

        {/* Road center line */}
        <div style={{
          position: "absolute",
          bottom: "28%",
          left: 0, right: 0,
          height: 1,
          background: "linear-gradient(to right, transparent 0%, rgba(255,255,255,0.1) 20%, rgba(255,255,255,0.18) 50%, rgba(255,255,255,0.1) 80%, transparent 100%)",
        }} />

        {/* ── THE CAR (Tracking shot — stays centered, vibrates) ── */}
        <div style={{
          position: "absolute",
          bottom: "26%",       /* sits on the road line */
          left: "50%",
          marginLeft: "-360px", /* half of 720px width to perfectly center */
          width: "720px",
          animation: "carFloat 4s ease-in-out infinite",
          willChange: "transform",
          zIndex: 5,
        }}>
          {/* Exhaust smoke clouds — anchored at back of car (left side since car faces right) */}
          <div style={{ position: "absolute", left: 0, top: "10%", width: "100%", height: "80%", pointerEvents: "none", zIndex: 4 }}>
            {exhaustClouds.map((e, i) => (
              <ExhaustCloud key={i} {...e} />
            ))}
          </div>



          {/* ── CAR IMAGE ── */}
          <img
            src={`${import.meta.env.BASE_URL}redbull_f1_side.png`}
            alt="Red Bull RB20 Racing"
            style={{
              width: "100%",
              display: "block",
              position: "relative",
              zIndex: 5,
              filter: "drop-shadow(0 10px 25px rgba(0,0,0,0.8)) drop-shadow(0 0 10px rgba(255,255,255,0.05)) brightness(1.05)",
            }}
          />

          {/* Motion blur trail on car */}
          <div style={{
            position: "absolute",
            top: "10%",
            left: "-60%",
            width: "60%",
            height: "80%",
            background: "linear-gradient(to right, transparent, rgba(255,255,255,0.03))",
            filter: "blur(12px)",
            pointerEvents: "none",
          }} />
        </div>

        {/* Corner HUD brackets */}
        <div style={{ position: "absolute", top: 12, left: 16, width: 28, height: 28, borderTop: "1.5px solid rgba(21,102,192,0.4)", borderLeft: "1.5px solid rgba(21,102,192,0.4)" }} />
        <div style={{ position: "absolute", top: 12, right: 16, width: 28, height: 28, borderTop: "1.5px solid rgba(21,102,192,0.4)", borderRight: "1.5px solid rgba(21,102,192,0.4)" }} />
        <div style={{ position: "absolute", bottom: 12, left: 16, width: 28, height: 28, borderBottom: "1.5px solid rgba(204,30,30,0.4)", borderLeft: "1.5px solid rgba(204,30,30,0.4)" }} />
        <div style={{ position: "absolute", bottom: 12, right: 16, width: 28, height: 28, borderBottom: "1.5px solid rgba(204,30,30,0.4)", borderRight: "1.5px solid rgba(204,30,30,0.4)" }} />

        {/* HUD labels */}
        <p style={{ position: "absolute", bottom: 14, right: 52, fontFamily: "monospace", fontSize: "0.52rem", letterSpacing: "0.3em", color: "rgba(255,255,255,0.18)", textTransform: "uppercase" }}>RB20 · 2024 · FULL THROTTLE</p>
        <p style={{ position: "absolute", top: 14, left: 52, fontFamily: "monospace", fontSize: "0.52rem", letterSpacing: "0.3em", color: "rgba(255,255,255,0.18)", textTransform: "uppercase" }}>SECTOR 3 · MONZA</p>
      </div>

      {/* Section bottom separator */}
      <div style={{ height: 1, background: "linear-gradient(to right, transparent, rgba(255,255,255,0.07), transparent)" }} />
    </section>
  );
};

export default RedBullF1;
