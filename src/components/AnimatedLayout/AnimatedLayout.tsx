import { motion } from "framer-motion";
import { variants, transition } from "../styles/animation";
import type { AnimatedLayoutProps } from "./types";

export const AnimatedLayout = ({ children }: AnimatedLayoutProps) => {
  return (
    <motion.div
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={transition}
    >
      {children}
    </motion.div>
  );
};
