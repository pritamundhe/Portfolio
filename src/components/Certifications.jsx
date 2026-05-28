import { motion } from "framer-motion";
import { Award, GraduationCap } from "lucide-react";

const certifications = [
  "Microsoft Certified: Azure Data Fundamentals (DP-900)",
  "Google Cloud: Machine Learning Operations (MLOps)",
  "Google Cloud: Deploy and Manage Generative AI Models",
  "Google Cloud: Agentic AI with Agent Development Kit (ADK)",
];

const education = [
  {
    degree: "B.Tech in Computer Engineering",
    institute: "AISSMS Institute of Information Technology, Pune",
    year: "2023 - 2026",
    status: "Pursuing"
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
          <h2 className="text-sm tracking-[0.3em] text-gray-500 uppercase mb-12 flex items-center gap-3">
            <GraduationCap size={18} /> Education
          </h2>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-6 border-l border-[#27272a]"
              >
                <div className="absolute w-2 h-2 bg-white rounded-full -left-[4.5px] top-2"></div>
                <h3 className="text-lg font-medium text-white">{edu.degree}</h3>
                <p className="text-gray-400 text-sm mt-1">{edu.institute}</p>
                <div className="flex items-center gap-4 mt-3">
                  <span className="text-xs font-mono text-gray-500">{edu.year}</span>
                  <span className={`text-xs px-2 py-1 rounded-full border ${edu.status === 'Pursuing' ? 'border-gray-500 text-gray-300' : 'border-[#27272a] text-gray-500'}`}>
                    {edu.status}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div>
          <h2 className="text-sm tracking-[0.3em] text-gray-500 uppercase mb-12 flex items-center gap-3">
            <Award size={18} /> Certifications
          </h2>
          <div className="space-y-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-4 border border-[#27272a] rounded-lg bg-[#0a0a0a] hover:bg-[#121212] transition-colors"
              >
                <p className="text-sm text-gray-300 font-medium">{cert}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Certifications;
