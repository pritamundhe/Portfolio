import { motion } from "framer-motion";
import { useState } from "react";
import { X, Loader2 } from "lucide-react";

const GithubIcon = ({ size = 20 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const projectsData = [
  {
    title: "Personal AI Voice Assistant",
    description: "I have built a personal voice assistant who remembers my data tasks and speaks with me.",
    tech: ["Flask", "pymongo", "python-dotenv", "elevenlabs", "requests", "gunicorn"],
    link: "#",
    previewUrl: "https://voiceassistant-08n5.onrender.com/"
  },
  {
    title: "Vision Access AI (Social Media Accessibility)",
    description: "Developed an AI-based image captioning system with emotion detection, OCR, and multilingual caption generation for social media accessibility.",
    tech: ["Python", "Transformers", "BLIP", "Tesseract OCR", "FastAPI"],
    link: "#",
    previewUrl: "https://visionacessai.streamlit.app/?embed=true"
  },
  {
    title: "WhatsApp Chat Analysis System",
    description: "Built a chat analytics application to visualize user activity, word clouds, emoji usage, and sentiment insights from WhatsApp chats.",
    tech: ["Python", "Pandas", "Matplotlib", "Seaborn", "Streamlit"],
    link: "#",
    previewUrl: "https://whatsappchatreport.streamlit.app/?embed=true"
  },
  {
    title: "AI Smart Playlist Generator",
    description: "Developing an AI-powered music recommendation system based on user mood and listening patterns.",
    tech: ["Python", "Spotify API", "Scikit-learn", "FastAPI"],
    link: "#",
    previewUrl: "https://frontend-rose-eta-61.vercel.app/"
  }
];

const Projects = () => {
  const [previewUrl, setPreviewUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <section id="projects" className="py-24 px-6 bg-[#050505] text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-xs tracking-[0.4em] text-white font-bold uppercase mb-16 font-mono">
          03. Featured Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => {
                if (project.previewUrl) {
                  setPreviewUrl(project.previewUrl);
                  setIsLoading(true);
                }
              }}
              className={`group relative border border-white/20 bg-black p-8 rounded-none transition-all duration-300 cyber-glitch-hover hover:bg-white/5 ${project.previewUrl ? 'cursor-pointer hover:border-white/50' : 'hover:border-white/50'}`}
            >
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-xl font-bold text-white group-hover:text-white">
                  {project.title}
                </h3>
                <a href={project.link} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()} className="text-white/50 hover:text-white transition-colors">
                  <GithubIcon size={20} />
                </a>
              </div>
              <p className="text-white/70 text-sm font-medium leading-relaxed mb-8">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((tech, i) => (
                  <span key={i} className="px-2 py-1 border border-white/10 bg-white/5 text-xs text-white font-bold uppercase tracking-wider rounded-none">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal Preview */}
      {previewUrl && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 md:p-12">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative w-full max-w-5xl h-full bg-black rounded-none border border-white/20 overflow-hidden shadow-2xl"
          >
            <button 
              onClick={() => setPreviewUrl(null)}
              className="absolute top-4 right-4 z-20 p-2 bg-black hover:bg-white text-white hover:text-black border border-white/20 hover:border-white rounded-none transition-colors"
            >
              <X size={24} />
            </button>

            {isLoading && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black z-10 text-white">
                <Loader2 className="w-10 h-10 animate-spin text-white mb-4" />
                <p className="text-sm text-white font-bold tracking-wide">LOADING APPLICATION...</p>
              </div>
            )}

            <iframe 
              src={previewUrl} 
              className={`w-full h-full border-0 relative z-0 transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
              title="Project Preview"
              onLoad={() => setIsLoading(false)}
            />
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default Projects;
