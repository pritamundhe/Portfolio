import { motion } from "framer-motion";
import ScrambleText from "./ScrambleText";
import TypewriterText from "./TypewriterText";

const Hero = () => {
  return (
    <section className="min-h-[85vh] w-full flex items-center justify-center bg-black relative px-6 pt-32 pb-16 md:pt-40 md:pb-20">
      <div className="max-w-7xl w-full mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-16">
        
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="flex flex-col items-start gap-4 z-10 md:w-1/2 shrink-0"
        >
          <h1 className="font-display text-6xl md:text-7xl lg:text-8xl tracking-wider text-white ml-[-5px]">
            <ScrambleText text="PRITAMUNDHE" delay={0.2} />
          </h1>
          <p className="font-sans text-xs md:text-sm tracking-[0.3em] uppercase text-white/70">
            Pritam Mundhe
          </p>

          {/* About Me Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.4 }}
            className="mt-8 md:mt-12 w-full max-w-2xl relative group"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-white/10 to-white/20 rounded-none blur opacity-0 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            
            <div className="relative border border-white/20 bg-black backdrop-blur-sm rounded-none p-6 md:p-8 text-white font-sans text-sm md:text-base leading-relaxed shadow-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-8 bg-white"></div>
                <span className="text-xs font-mono tracking-[0.2em] uppercase text-white font-bold">About Me</span>
              </div>
              
              <TypewriterText 
                text="BTech in Computer Engineering student, TCS NQT Prime and GATE qualified, with strong interest in Machine Learning, Generative AI, Agentic AI development, and Data Structures Algorithms." 
                delay={1.5} 
                speed={30} 
                className="mb-4 text-white font-bold"
              />
              <TypewriterText 
                text="Skilled in Python, C++, and SQL with hands-on in Machine Learning and data analytics projects. Strong problem-solving abilities and understanding of software development." 
                delay={4} 
                speed={30} 
                className="text-white/80 font-medium"
              />
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
          className="relative w-full md:w-1/4 flex justify-center md:justify-end"
        >
          {/* ===== MINIMAL B&W 3D BACKGROUND ===== */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-visible">

            {/* Subtle white glow core */}
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.04, 0.1, 0.04] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              style={{ position: "absolute", width: "300px", height: "300px", borderRadius: "50%", background: "radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)", filter: "blur(40px)" }}
            />

            {/* Tilted rotating rings — white/gray */}
            <motion.div
              animate={{ rotateZ: 360 }}
              transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
              style={{ width: "420px", height: "420px", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "50%", position: "absolute", transform: "rotateX(68deg) rotateY(8deg)" }}
            />
            <motion.div
              animate={{ rotateZ: -360 }}
              transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
              style={{ width: "310px", height: "310px", border: "1px solid rgba(255,255,255,0.12)", borderRadius: "50%", position: "absolute", transform: "rotateX(68deg) rotateY(-12deg)" }}
            />
            <motion.div
              animate={{ rotateZ: 360 }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              style={{ width: "200px", height: "200px", border: "0.5px solid rgba(255,255,255,0.1)", borderRadius: "50%", position: "absolute", transform: "rotateX(68deg)" }}
            />

            {/* Orbiting white dots */}
            {[
              { r: 200, dur: 8, size: 3, opacity: 0.5 },
              { r: 150, dur: 5, size: 2, opacity: 0.4 },
              { r: 240, dur: 12, size: 2.5, opacity: 0.35 },
              { r: 170, dur: 7, size: 2, opacity: 0.45 },
            ].map((d, i) => (
              <motion.div
                key={i}
                animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
                transition={{ duration: d.dur, repeat: Infinity, ease: "linear", delay: i * 0.8 }}
                style={{ width: `${d.r * 2}px`, height: `${d.r * 2}px`, position: "absolute", transformOrigin: "center" }}
              >
                <div style={{
                  width: `${d.size}px`, height: `${d.size}px`, borderRadius: "50%",
                  background: `rgba(255,255,255,${d.opacity})`, position: "absolute",
                  top: 0, left: "50%", transform: "translateX(-50%)",
                  boxShadow: `0 0 6px 2px rgba(255,255,255,${d.opacity * 0.6})`,
                }} />
              </motion.div>
            ))}

            {/* Floating small squares */}
            {[
              { x: -150, y: -110, dur: 6, size: 4 },
              { x: 140, y: -90, dur: 8, size: 3 },
              { x: -110, y: 120, dur: 5, size: 3.5 },
              { x: 150, y: 100, dur: 7, size: 3 },
            ].map((p, i) => (
              <motion.div
                key={i}
                animate={{ y: [0, -12, 0], rotate: [0, 90, 0], opacity: [0.2, 0.5, 0.2] }}
                transition={{ duration: p.dur, repeat: Infinity, ease: "easeInOut", delay: i * 0.7 }}
                style={{
                  position: "absolute",
                  left: `calc(50% + ${p.x}px)`,
                  top: `calc(50% + ${p.y}px)`,
                  width: `${p.size}px`, height: `${p.size}px`,
                  border: "1px solid rgba(255,255,255,0.4)",
                  background: "transparent",
                }}
              />
            ))}

          </div>

          {/* Profile Image */}
          <img
            src={`${import.meta.env.BASE_URL}profile.png`}
            alt="Pritam Mundhe"
            className="relative z-10 w-full max-w-[400px] md:max-w-[500px] lg:max-w-[600px] drop-shadow-2xl"
          />
        </motion.div>

      </div>
    </section>

  );
};

export default Hero;
