import { motion } from "framer-motion";
import { Award, GraduationCap } from "lucide-react";

const certifications = [
  "Microsoft Certified: Azure Data Fundamentals (DP-900) — Score: 925/1000",
  "Agent Development and Deployment using LangChain & LangSmith",
  "Preparing: GitHub Certified — Agentic AI Developer",
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
    institute: "Sandip Polytechnic, Nashik",
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
                className="p-5 border border-white/20 rounded-none bg-black hover:bg-white/5 hover:border-white/50 transition-all duration-300 group cursor-default"
              >
                <p className="text-sm text-white/80 group-hover:text-white font-bold leading-relaxed">{cert}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Certifications;
