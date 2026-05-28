import { motion } from "framer-motion";

const SoundCloudPlayer = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        className="relative bg-black rounded-md shadow-2xl overflow-hidden border border-[#27272a] w-[350px]"
      >
        <iframe 
          width="100%" 
          height="130" 
          scrolling="no" 
          frameBorder="no" 
          allow="autoplay; encrypted-media" 
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A1349632084&color=%23b1b6ad&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
          title="SoundCloud Player"
        ></iframe>
      </motion.div>
    </div>
  );
};

export default SoundCloudPlayer;
