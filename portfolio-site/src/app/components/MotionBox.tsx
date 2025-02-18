"use client";

import { motion } from "framer-motion";

interface MotionBoxProps {
  children: React.ReactNode;
}

function MotionBox(props: MotionBoxProps) {
  console.log("motion", motion);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {props.children}
    </motion.div>
  );
}

export default MotionBox;
