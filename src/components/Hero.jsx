import { motion } from "framer-motion";

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
            PRITAMuNDHE
          </h1>
          <p className="font-sans text-xs md:text-sm tracking-[0.3em] uppercase text-white/70">
            Pritam Mundhe
          </p>

          {/* About Me Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.4 }}
            className="mt-8 md:mt-12 w-full max-w-2xl"
          >
            <div className="flex items-center gap-2 mb-4 text-xs font-sans tracking-[0.2em] uppercase">
              <span className="text-[#3b82f6]">01.</span>
              <span className="text-gray-400">About Me</span>
            </div>
            
            <div className="border border-white/10 bg-[#050505] rounded-2xl p-6 md:p-8 text-gray-400 font-sans text-sm md:text-base leading-relaxed shadow-xl">
              <p className="mb-4">
                Motivated Computer Engineering student with a strong interest in <strong className="text-white font-medium">Machine Learning</strong>, <strong className="text-white font-medium">Data Science</strong>, and <strong className="text-white font-medium">Data Structures and Algorithms</strong>.
              </p>
              <p>
                Skilled in Python, C++, and SQL with hands-on experience in building Machine Learning and data analytics projects. Strong problem-solving abilities and understanding of software development.
              </p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 20, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
          className="relative w-full md:w-1/4 flex justify-center md:justify-end"
        >
          {/* Subtle glow effect */}
          <div className="absolute inset-0 bg-white/5 blur-[100px] rounded-full scale-110"></div>
          <img
            src={`${import.meta.env.BASE_URL}profile.png`}
            alt="Pritam Mundhe"
            className="relative z-10 w-full max-w-[400px] md:max-w-[500px] lg:max-w-[600px]"
          />
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
