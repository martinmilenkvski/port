"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Image from "next/image";

interface Project {
  id: string;
  number: string;
  title: string;
  image: string;
}

function ProjectsSection() {
  // List of projects (hardcoded)
  const projects: Project[] = [
    {
      id: "01",
      number: "01",
      title: "KONTRANS",
      image: "https://picsum.photos/seed/brand/300/400",
    },
    {
      id: "02",
      number: "02",
      title: "OSA ENGINEERING",
      image: "https://picsum.photos/seed/digital/300/400",
    },
    {
      id: "03",
      number: "03",
      title: "OFFICE PLANNER",
      image: "https://picsum.photos/seed/video/300/400",
    },
    {
      id: "04",
      number: "04",
      title: "WEB PRESENCE",
      image: "https://picsum.photos/seed/web/300/400",
    }

  ];

  // State to track which project is hovered
  const [hoveredProject, setHoveredProject] = useState<Project | null>(null);
  // State to track the mouse position within the section
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  // Reference to the section for tracking in-view status
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  // Update mouse position relative to the section
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Animation variants for the container and items
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="min-h-screen text-white py-20 relative overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-sm mb-20 text-center"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { delay: 0.2, duration: 0.8, ease: "easeOut" },
            },
          }}
        >
          MY PROJECTS
        </motion.h2>
        <motion.div
          className="space-y-8 flex flex-col items-center"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredProject(project)}
              onMouseLeave={() => setHoveredProject(null)}
              variants={itemVariants}
            >
              <div className="flex items-baseline gap-4 overflow-hidden">
                <motion.span
                  className="text-sm opacity-50"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 0.5 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  {project.number}
                </motion.span>
                <motion.h3
                  className="text-7xl md:text-9xl font-bold tracking-tighter"
                  initial={{ y: 100 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  {project.title}
                </motion.h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <AnimatePresence>
        {hoveredProject && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: 1,
              scale: 1,
              x: mousePosition.x,
              y: mousePosition.y,
            }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed pointer-events-none w-[400px] h-[300px] z-50"
            style={{
              top: 0,
              left: 0,
              transform: "translate(-50%, -50%)",
            }}
          >
            <Image
              src={hoveredProject.image}
              alt={hoveredProject.title}
              fill
              className="object-cover -z-10"
              priority
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default ProjectsSection;
