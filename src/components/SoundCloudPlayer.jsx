import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Music2, ChevronUp, ChevronDown } from "lucide-react";

const SoundCloudPlayer = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      <motion.div
        animate={{ 
          height: isExpanded ? "auto" : 0, 
          opacity: isExpanded ? 1 : 0,
          scale: isExpanded ? 1 : 0.95,
          pointerEvents: isExpanded ? "auto" : "none"
        }}
        initial={{ height: 0, opacity: 0, scale: 0.95, pointerEvents: "none" }}
        transition={{ duration: 0.3 }}
        className="relative bg-black rounded-none shadow-2xl overflow-hidden border border-white/20 w-[320px] origin-bottom"
      >
        <iframe
          width="100%"
          height="130"
          scrolling="no"
          frameBorder="no"
          allow="autoplay; encrypted-media"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A341471474&color=%23010101&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
          title="SoundCloud Player"
        ></iframe>
        <div style={{ fontSize: "10px", color: "#cccccc", lineBreak: "anywhere", wordBreak: "normal", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis", fontFamily: "Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif", fontWeight: 100, padding: "4px 10px 6px" }}>
          <a href="https://soundcloud.com/odesza" title="ODESZA" target="_blank" rel="noreferrer" style={{ color: "#cccccc", textDecoration: "none" }}>ODESZA</a>
          {" · "}
          <a href="https://soundcloud.com/odesza/a-moment-apart" title="A Moment Apart" target="_blank" rel="noreferrer" style={{ color: "#cccccc", textDecoration: "none" }}>A Moment Apart</a>
        </div>
      </motion.div>

      {/* Toggle Button */}
      <motion.button
        onClick={() => setIsExpanded(!isExpanded)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-2 px-4 py-2.5 bg-black border border-white/30 hover:border-white rounded-none shadow-2xl text-white hover:bg-white hover:text-black transition-colors duration-300"
      >
        <Music2 className="w-4 h-4" />
        <span className="text-xs font-bold font-mono tracking-wider">MUSIC</span>
        {isExpanded ? (
          <ChevronDown className="w-4 h-4" />
        ) : (
          <ChevronUp className="w-4 h-4" />
        )}
      </motion.button>
    </div>
  );
};

export default SoundCloudPlayer;
