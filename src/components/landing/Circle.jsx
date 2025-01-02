import { motion } from "framer-motion";
import React from "react";

const Circle = ({ className }) => {
  const randomNumber = Math.floor(Math.random() * 5);
  return (
    <motion.div
      className={className}
      animate={{
        y: [0, -randomNumber + 50, 0],
      }}
      transition={{
        repeat: Infinity,
        duration: randomNumber + 5,
        delay: randomNumber,
      }}
    ></motion.div>
  );
};

export default Circle;
