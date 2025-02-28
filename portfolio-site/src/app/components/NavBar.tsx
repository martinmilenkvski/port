"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = () => {
  const navItems = ["HOME", "PORTFOLIO", "CONTACT", "ABOUT"];

  return (
    <motion.nav
      className="flex p-4 w-full"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ul className="flex gap-4 justify-between w-full">
        {navItems.map((item, index) => (
          <motion.li
            key={item}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            {item === "ABOUT" ? <Link href="/about">{item}</Link> : item}
          </motion.li>
        ))}
      </ul>
    </motion.nav>
  );
};

export default NavBar;
