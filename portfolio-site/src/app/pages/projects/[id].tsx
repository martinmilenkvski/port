import React from "react";
import { useRouter } from "next/router";
import ProjectDetails from "../../components/ProjectDetails";

// Sample project data
const projects = [
  {
    id: "01",
    title: "KONTRANS",
    description: "Description for KONTRANS project.",
    image: "https://picsum.photos/seed/brand/800/600",
  },
  {
    id: "02",
    title: "OSA ENGINEERING",
    description: "Description for OSA ENGINEERING project.",
    image: "https://picsum.photos/seed/digital/800/600",
  },
  {
    id: "03",
    title: "OFFICE PLANNER",
    description: "Description for OFFICE PLANNER project.",
    image: "https://picsum.photos/seed/video/800/600",
  },
  {
    id: "04",
    title: "WEB PRESENCE",
    description: "Description for WEB PRESENCE project.",
    image: "https://picsum.photos/seed/web/800/600",
  },
];

const ProjectPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const project = projects.find((project) => project.id === id);

  if (!project) {
    return <p>Project not found</p>;
  }

  return <ProjectDetails project={project} />;
};

export default ProjectPage;
