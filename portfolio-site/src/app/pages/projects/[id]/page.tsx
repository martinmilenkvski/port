import React from "react";
import ProjectDetails from "../../../components/ProjectDetails";
import { useRouter } from "next/navigation";

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

interface Props {
  params: { id: string };
}

const ProjectPage = ({ params }: Props) => {
  const { id } = params;
  const project = projects.find((project) => project.id === id);
  const router = useRouter();

  if (!project) {
    return <p>Project not found</p>;
  }

  const handleBack = () => {
    router.push("/projects");
  };

  return <ProjectDetails project={project} onBack={handleBack} />;
};

export default ProjectPage;
