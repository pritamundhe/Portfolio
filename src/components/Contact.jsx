import { motion } from "framer-motion";
import { Mail, Phone, Globe } from "lucide-react";

const GithubIcon = ({ size = 20 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const LinkedinIcon = ({ size = 20 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-[#050505] text-white border-t border-[#1a1a1a]">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-light mb-6 tracking-wide">
            Let's Connect
          </h2>
          <p className="text-gray-400 mb-12 max-w-2xl mx-auto text-sm md:text-base">
            I'm currently looking for new opportunities in Machine Learning and AI. 
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>

          <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 mb-16 text-sm">
            <a href="mailto:pritamundhe@gmail.com" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
              <Mail size={18} /> pritamundhe@gmail.com
            </a>
            <a href="tel:+918698737893" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
              <Phone size={18} /> +918698737893
            </a>
          </div>

          <div className="flex justify-center items-center gap-8">
            <a href="https://github.com/pritamundhe" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-white transition-transform hover:scale-110">
              <GithubIcon size={24} />
            </a>
            <a href="https://linkedin.com/in/pritamundhe" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-white transition-transform hover:scale-110">
              <LinkedinIcon size={24} />
            </a>
            <a href="https://mysite.com" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-white transition-transform hover:scale-110">
              <Globe size={24} />
            </a>
          </div>
        </motion.div>
      </div>
      
      <div className="mt-24 text-center text-xs text-gray-600 font-mono">
        <p>© {new Date().getFullYear()} Pritam Mundhe. All rights reserved.</p>
        <p className="mt-2">Designed & Built with minimal aesthetics.</p>
      </div>
    </section>
  );
};

export default Contact;
