import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const TypewriterText = ({ text, className, delay = 0, speed = 20 }) => {
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    let timeoutId;
    let intervalId;

    const startTyping = () => {
      setIsTyping(true);
      let currentIndex = 0;
      
      intervalId = setInterval(() => {
        if (currentIndex <= text.length) {
          setDisplayText(text.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(intervalId);
          setIsTyping(false);
        }
      }, speed);
    };

    timeoutId = setTimeout(startTyping, delay * 1000);

    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, [text, delay, speed]);

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.1, delay }}
    >
      {displayText}
      {isTyping && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
          className="inline-block w-2 h-4 bg-[#00f3ff] ml-1 align-middle"
        />
      )}
    </motion.div>
  );
};

export default TypewriterText;
