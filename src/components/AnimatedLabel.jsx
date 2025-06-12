import { motion } from "framer-motion";

const AnimatedLabel = ({ text, top, left, right, bottom, delay = 0, direction = "up", controls }) => {
  const variants = {
    hidden: { opacity: 0, y: direction === "up" ? 20 : direction === "down" ? -20 : 0, x: direction === "left" ? 20 : direction === "right" ? -20 : 0 },
    visible: { opacity: 1, y: 0, x: 0, transition: { duration: 1, delay } }
  };

  const style = { position: "absolute", top, left, right, bottom };

  return (
    <motion.div
      initial="hidden"
      animate={controls}
      variants={variants}
      style={style}
      className="text-white text-xl md:text-2xl font-[Forum]"
    >
      {text}
    </motion.div>
  );
};

export default AnimatedLabel;