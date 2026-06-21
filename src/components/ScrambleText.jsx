import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const chars = "!<>-_\\\\/[]{}—=+*^?#________";

const ScrambleText = ({ text, className, delay = 0 }) => {
  const [displayText, setDisplayText] = useState("");
  const [isScrambling, setIsScrambling] = useState(false);

  useEffect(() => {
    let timeoutId;
    let intervalId;

    const startScramble = () => {
      setIsScrambling(true);
      let iteration = 0;
      
      intervalId = setInterval(() => {
        setDisplayText(
          text
            .split("")
            .map((char, index) => {
              if (index < iteration) {
                return text[index];
              }
              return chars[Math.floor(Math.random() * chars.length)];
            })
            .join("")
        );

        if (iteration >= text.length) {
          clearInterval(intervalId);
          setIsScrambling(false);
        }

        iteration += 1 / 3; // speed of deciphering
      }, 30);
    };

    timeoutId = setTimeout(startScramble, delay * 1000);

    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, [text, delay]);

  return (
    <motion.span
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.1, delay }}
    >
      {displayText}
    </motion.span>
  );
};

export default ScrambleText;
