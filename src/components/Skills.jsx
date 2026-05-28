import { motion } from "framer-motion";

const skillsData = [
  {
    category: "Programming Languages",
    items: ["Python", "C++", "SQL"],
  },
  {
    category: "Machine Learning & GenAI",
    items: [
      "Scikit-learn", "Regression", "Classification", "Feature Engineering",
      "Model Evaluation", "Data Preprocessing", "EDA", "LangChain", "RAG"
    ],
  },
  {
    category: "Python Libraries",
    items: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "FastAPI"],
  },
  {
    category: "Tools & Technologies",
    items: ["GitHub", "Git", "Docker", "Kaggle", "Google Colab", "Power BI", "Looker Studio"],
  },
  {
    category: "Database",
    items: ["MySQL", "MongoDB", "ChromaDB"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="pt-12 pb-24 px-6 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-sm tracking-[0.3em] text-gray-500 uppercase mb-16">
          02. Skills & Technologies
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((skillGroup, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="border border-[#27272a] bg-[#121212]/30 p-6 rounded-xl hover:border-gray-500 transition-colors"
            >
              <h3 className="text-lg font-medium text-white mb-6 tracking-wide">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {skillGroup.items.map((item, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs text-gray-300 border border-[#27272a] rounded-full bg-black hover:bg-white hover:text-black transition-colors"
                  >
                    {item}
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

export default Skills;
