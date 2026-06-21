import { motion } from "framer-motion";

const skillsData = [
  {
    category: "Programming Languages",
    number: "01",
    items: ["Python", "C++", "SQL"],
  },
  {
    category: "Python Libraries",
    number: "02",
    items: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-learn", "FastAPI"],
  },
  {
    category: "Database",
    number: "03",
    items: ["MySQL", "MongoDB", "ChromaDB"],
  },
  {
    category: "Machine Learning",
    number: "04",
    items: ["Regression", "Classification", "Feature Engineering", "Model Evaluation", "Data Preprocessing", "EDA"],
  },
  {
    category: "GenAI",
    number: "05",
    items: ["LangChain", "RAG", "LLMs", "Prompt Engineering"],
  },
  {
    category: "Tools & Technologies",
    number: "06",
    items: ["GitHub", "Git", "Docker", "Kaggle", "Google Colab", "Power BI", "Looker Studio"],
  },
];

const SkillCard = ({ skillGroup, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -4 }}
      className="group relative p-7 border border-white/20 bg-black hover:bg-white/5 rounded-none flex flex-col h-full cursor-default overflow-hidden transition-all duration-500"
    >
      {/* Glow on hover */}
      <div className="absolute inset-0 rounded-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        style={{ boxShadow: "inset 0 0 30px rgba(255,255,255,0.1)" }}
      />
      {/* Top border light sweep */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

      {/* Category Title */}
      <div className="mb-6">
        <h3 className="text-sm font-bold tracking-widest uppercase text-white group-hover:text-white transition-colors duration-300 leading-snug">
          {skillGroup.category}
        </h3>
      </div>
      {/* Skill pills */}
      <div className="flex flex-wrap gap-2 mt-4">
        {skillGroup.items.map((item, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.08 + i * 0.05 }}
            className="px-3 py-1.5 text-xs font-bold border border-white/30 bg-black text-white group-hover:text-black group-hover:border-white group-hover:bg-white transition-all duration-300 rounded-none uppercase tracking-wider"
          >
            {item}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="pt-24 pb-32 px-6 bg-black text-white relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/3 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex items-end justify-between"
        >
          <div>
            <p className="text-xs tracking-[0.4em] text-white uppercase font-mono font-bold">
              02. Expertise
            </p>
          </div>
          <p className="text-xs text-white uppercase font-mono font-bold hidden md:block">
            {skillsData.length} categories
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillsData.map((skillGroup, index) => (
            <SkillCard key={index} skillGroup={skillGroup} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
