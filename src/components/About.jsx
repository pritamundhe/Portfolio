import { motion } from "framer-motion";
import { Brain, Database, Code, GraduationCap } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: <Brain className="w-6 h-6 text-white/60" />,
      title: "Machine Learning",
      description: "Building predictive models & intelligent systems",
    },
    {
      icon: <Database className="w-6 h-6 text-white/60" />,
      title: "Data Science",
      description: "Extracting insights from complex datasets",
    },
    {
      icon: <Code className="w-6 h-6 text-white/60" />,
      title: "Development",
      description: "Creating scalable & robust software solutions",
    },
  ];

  return (
    <section id="about" className="py-32 px-6 bg-black text-white relative overflow-hidden">
      {/* Background gradients for visual appeal */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-white/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-xs tracking-[0.4em] text-white font-bold uppercase mb-16 font-mono">
            01. About Me
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-none border border-white/30 bg-black backdrop-blur-sm">
              <GraduationCap className="w-4 h-4 text-white" />
              <span className="text-xs font-mono text-white font-bold tracking-wider">Computer Engineering Student</span>
            </div>
            
            <h3 className="text-3xl md:text-5xl font-bold leading-tight">
              Transforming data into <br className="hidden md:block" />
              <span className="text-white">
                actionable intelligence.
              </span>
            </h3>

            <div className="space-y-6 text-gray-400 text-lg leading-relaxed font-light">
              <p>
                I am a motivated student with a strong passion for{" "}
                <strong className="text-gray-200 font-medium">Machine Learning</strong>,{" "}
                <strong className="text-gray-200 font-medium">Data Science</strong>, and designing robust{" "}
                <strong className="text-gray-200 font-medium">Data Structures and Algorithms</strong>.
              </p>
              <p>
                Equipped with hands-on experience in building predictive models and data analytics projects, I leverage tools like Python, C++, and SQL to solve complex problems and build impactful software solutions.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="group p-6 rounded-none border border-white/20 bg-black hover:bg-white/5 hover:border-white/50 transition-all duration-300"
              >
                <div className="flex items-center gap-6">
                  <div className="p-4 rounded-none border border-white/10 bg-white/5 group-hover:bg-white/10 transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                    <p className="text-white/70 text-sm font-medium">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
