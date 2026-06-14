import type { ReactNode } from "react";
import { motion } from "motion/react";

/** Fades and slides a routed page in/out, driven by <AnimatePresence>. */
export const PageTransition = ({ children }: { children: ReactNode }) => (
  <motion.main
    initial={{ opacity: 0, y: 12 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -12 }}
    transition={{ duration: 0.35, ease: "easeOut" }}
  >
    {children}
  </motion.main>
);
