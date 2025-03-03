import { useSearchParams } from "next/navigation";
import ProjectDetails from "../../components/ProjectDetails";

const ProjectPage = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id") || "01"; // fallback or handle null

  // Fetch project data based on the id (this is a placeholder)
  const project = {
    id,
    title: `Project Title ${id}`,
    description: `Description for project ${id}`,
    image: `https://picsum.photos/seed/${id}/300/400`,
  };

  return <ProjectDetails project={project} />;
};

export default ProjectPage;
