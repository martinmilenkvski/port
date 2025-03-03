import React from "react";
import { motion } from "framer-motion";

interface ProjectDetailsProps {
  project: {
    id: string;
    title: string;
    description: string;
    image: string;
  };
  onBack?: () => void;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ project, onBack }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen p-8 bg-gray-900 text-white"
    >
      {onBack && (
        <button onClick={onBack} className="mb-4 text-sm text-gray-400">
          Back to Projects
        </button>
      )}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-4xl font-bold mb-4"
      >
        {project.title}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mb-8"
      >
        {project.description}
      </motion.p>
      <motion.img
        src={project.image}
        alt={project.title}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="w-full h-auto object-cover"
      />
    </motion.div>
  );
};

export default ProjectDetails;
