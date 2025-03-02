"use client";

import { motion } from "framer-motion";
import { HyperText } from "./hyper-text";

interface HeroProps {
  name: string;
}

const HeroSection: React.FC<HeroProps> = ({ name }) => {
  const letters = Array.from(name);

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <div className=" justify-center items-center">
      <div className="flex justify-center flex-col">
        <motion.h1
          className="m-0 leading-none text-[330px] align-center"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {letters.map((letter, index) => (
            <motion.span key={index} variants={child}>
              {letter}
            </motion.span>
          ))}
        </motion.h1>
      </div>

      <div className="flex justify-between items-center gap-4 p-4">
        <p>* Based in Skopje</p>
        <p>Frontend Developer | Designer | Digital logistics expert </p>
        {/* Socail links */}
        <div className="flex gap-4">
          <a
            href=" " // github link  here
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2"
          >
            <p>Git</p>
          </a>
          <a
            href=" " // dribble link  here
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2"
          >
            <p>Drb</p>
          </a>

          <a
            href=" " // github link  here
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2"
          >
            <p>Ig</p>
          </a>
        </div>
      </div>

      <motion.video
        src="https://videos.pexels.com/video-files/6986423/6986423-uhd_2732_1440_25fps.mp4"
        autoPlay
        muted
        loop
        initial={{ clipPath: "inset(0 100% 0 0)" }}
        animate={{ clipPath: "inset(0 0% 0 0)" }}
        transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
      ></motion.video>
    </div>
  );
};

export default HeroSection;
