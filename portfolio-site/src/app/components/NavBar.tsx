"use client";

import React from 'react';
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
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <ul className="flex gap-4 justify-between w-full">
        {navItems.map((item) => (
          <motion.li
            key={item}
            whileHover={{
              opacity: 0.6,
              transition: { duration: 0.1, ease: "easeInOut" },
            }}
          >
            <Link href={`/${item.toLowerCase()}`} passHref>
              <motion.a
                whileHover={{
                  opacity: 0.6,
                  transition: { duration: 0.3, ease: "easeInOut" },
                }}
              >
                {item}
              </motion.a>
            </Link>
          </motion.li>
        ))}
      </ul>
    </motion.nav>
  );
};

export default NavBar;
