import { motion } from "framer-motion";
import { Award, GraduationCap, ExternalLink } from "lucide-react";

const certifications = [
  { name: "Microsoft Certified: Azure Data Fundamentals (DP-900)", score: "925/1000", url: "https://learn.microsoft.com/en-us/users/pritamundhe/credentials/c6124728627a91a5" },
  { name: "Agent Development using LangChain & LangSmith", score: null },
  { name: "Preparing: GitHub Certified — Agentic AI Developer", score: null },
];

const education = [
  {
    degree: "B.Tech in Computer Engineering",
    institute: "AISSMS Institute of Information Technology, Pune",
    year: "2023 - 2026",
    status: "Completed"
  },
  {
    degree: "Diploma in Computer Engineering",
    institute: "Sandip Foundations Sandip Polytechnic, Nashik",
    year: "2020 - 2023",
    status: "Completed"
  }
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-24 px-6 bg-black text-white border-t border-[#1a1a1a]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Education Section */}
        <div>
          <h2 className="text-xs tracking-[0.4em] text-white font-bold uppercase mb-12 font-mono flex items-center gap-3">
            <GraduationCap size={18} className="text-white" /> 04. Education
          </h2>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-6 border-l border-white/20"
              >
                {/* Square bullet */}
                <div className="absolute w-2.5 h-2.5 bg-white rounded-none -left-[5.5px] top-2"></div>
                
                <h3 className="text-lg font-bold text-white">{edu.degree}</h3>
                <p className="text-white/70 text-sm font-medium mt-1">{edu.institute}</p>
                <div className="flex items-center gap-4 mt-4">
                  <span className="text-xs font-mono text-white/50 font-bold tracking-widest">{edu.year}</span>
                  <span className={`text-xs px-2 py-1 rounded-none border font-bold uppercase tracking-wider ${edu.status === 'Pursuing' ? 'border-white/30 text-white' : 'border-white/10 text-white/50'}`}>
                    {edu.status}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div>
          <h2 className="text-xs tracking-[0.4em] text-white font-bold uppercase mb-12 font-mono flex items-center gap-3">
            <Award size={18} className="text-white" /> 05. Certifications
          </h2>
          <div className="space-y-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                onClick={() => {
                  if (cert.url) {
                    window.open(cert.url, "_blank");
                  }
                }}
                className={`p-5 border border-white/20 rounded-none bg-black hover:bg-white/5 hover:border-white/50 transition-all duration-300 group flex items-center justify-between gap-4 ${cert.url ? 'cursor-pointer' : 'cursor-default'}`}
              >
                <p className="text-[13px] md:text-sm text-white/80 group-hover:text-white font-bold leading-snug truncate flex items-center gap-2">
                  {cert.name}
                  {cert.url && <ExternalLink size={14} className="text-white/30 group-hover:text-white/80 transition-colors shrink-0" />}
                </p>
                {cert.score && (
                  <span className="shrink-0 text-[10px] md:text-xs font-mono text-white/60 border border-white/20 px-2.5 py-1 uppercase tracking-wider">
                    Score: {cert.score}
                  </span>
                )}
              </motion.div>
            ))}
          </div>
        </div>

      </div>

      {/* Verified Badges Section */}
      <div className="max-w-5xl mx-auto mt-24 pt-16 border-t border-white/10">
        <h2 className="text-[10px] tracking-[0.5em] text-white/30 font-bold uppercase mb-14 font-mono text-center">
          Verified Credentials
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-14 md:gap-24">
          <motion.img 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            src="/Portfolio/badges/ms-fundamentals.png" 
            alt="Microsoft Certified Fundamentals" 
            className="w-36 h-36 md:w-44 md:h-44 object-contain filter drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:scale-110 transition-transform duration-500 cursor-pointer" 
          />
          <motion.img 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            src="/Portfolio/badges/ms-ai-skills.png" 
            alt="Microsoft AI Skills Fest" 
            className="w-36 h-36 md:w-44 md:h-44 object-contain filter drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:scale-110 transition-transform duration-500 cursor-pointer" 
          />
          <motion.img 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            src="/Portfolio/badges/google-cloud-adk.png" 
            alt="Google Cloud Engineer AI Agents" 
            className="w-36 h-36 md:w-44 md:h-44 object-contain filter drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:scale-110 transition-transform duration-500 cursor-pointer" 
          />
        </div>
      </div>
    </section>
  );
};

export default Certifications;
