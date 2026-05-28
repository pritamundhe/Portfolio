import { motion } from "framer-motion";

const Navbar = () => {
  const links = ["About", "Skills", "Projects", "Certifications", "Contact"];

  const handleScroll = (id) => {
    const element = document.getElementById(id.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-[#27272a]"
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <span 
          className="font-display text-2xl font-bold cursor-pointer hover:text-gray-300 transition-colors"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          PM.
        </span>
        <ul className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
          {links.map((link) => (
            <li key={link}>
              <button
                onClick={() => handleScroll(link)}
                className="hover:text-white transition-colors uppercase tracking-widest text-xs"
              >
                {link}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
