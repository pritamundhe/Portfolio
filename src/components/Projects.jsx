import { motion } from "framer-motion";

const GithubIcon = ({ size = 20 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const projectsData = [
  {
    title: "Voice Assistant with OpenAI's GPT-3 and IBM Watson",
    description: "Developed an AI voice assistant with speech recognition and conversational response generation using GPT-3 and IBM Watson APIs.",
    tech: ["Python", "OpenAI GPT-3", "IBM Watson", "Flask"],
    link: "#"
  },
  {
    title: "AI Social Media Accessibility Assistant",
    description: "Developed an AI-based image captioning system with emotion detection, OCR, and multilingual caption generation for social media accessibility.",
    tech: ["Python", "Transformers", "BLIP", "Tesseract OCR", "FastAPI"],
    link: "#"
  },
  {
    title: "WhatsApp Chat Analysis System",
    description: "Built a chat analytics application to visualize user activity, word clouds, emoji usage, and sentiment insights from WhatsApp chats.",
    tech: ["Python", "Pandas", "Matplotlib", "Seaborn", "Streamlit"],
    link: "#"
  },
  {
    title: "AI Smart Playlist Generator",
    description: "Developing an AI-powered music recommendation system based on user mood and listening patterns.",
    tech: ["Python", "Spotify API", "Scikit-learn", "FastAPI"],
    link: "#"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-[#050505] text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-sm tracking-[0.3em] text-gray-500 uppercase mb-16">
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
              className="group relative border border-[#27272a] bg-[#0a0a0a] p-8 rounded-2xl hover:border-white transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-xl font-medium text-white group-hover:text-gray-200">
                  {project.title}
                </h3>
                <a href={project.link} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-white transition-colors">
                  <GithubIcon size={20} />
                </a>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-8">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((tech, i) => (
                  <span key={i} className="text-xs text-gray-500 font-mono">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
