import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-32 px-6 bg-black text-white relative">
      <div className="max-w-xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-sm tracking-[0.3em] text-gray-500 uppercase mb-8">
            01. About Me
          </h2>
          <div className="p-8 md:p-12 border border-[#27272a] rounded-2xl bg-[#121212]/50 backdrop-blur-sm relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gray-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
            <p className="text-lg md:text-2xl leading-relaxed text-gray-300 font-light">
              Motivated Computer Engineering student with a strong interest in{" "}
              <span className="text-white font-medium">Machine Learning</span>,{" "}
              <span className="text-white font-medium">Data Science</span>, and{" "}
              <span className="text-white font-medium">Data Structures and Algorithms</span>.
            </p>
            <p className="text-lg md:text-2xl leading-relaxed text-gray-300 font-light mt-6">
              Skilled in Python, C++, and SQL with hands-on experience in building Machine
              Learning and data analytics projects. Strong problem-solving abilities and
              understanding of software development.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
