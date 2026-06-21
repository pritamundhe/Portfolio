import { useState, useEffect } from "react";

const chars = "!<>-_\\\\/[]{}—=+*^?#________0123456789";

const HoverDecryptText = ({ text, isDecrypting }) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let intervalId;

    if (isDecrypting) {
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
        }

        iteration += 1 / 2; // Speed of decryption
      }, 30);
    } else {
      // Scrambled idle state
      setDisplayText(
        text
          .split("")
          .map((char) => (char === " " ? " " : chars[Math.floor(Math.random() * chars.length)]))
          .join("")
      );
    }

    return () => clearInterval(intervalId);
  }, [text, isDecrypting]);

  return <span>{displayText}</span>;
};

export default HoverDecryptText;
