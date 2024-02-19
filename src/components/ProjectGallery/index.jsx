import ProjectCard from "../ProjectCard";
// import { useState } from 'react';
import projectList from '../../../projectList.json'

const ProjectGallery = () => {
  // const [projectData, setProjectData] = useState(projects)
  return (
    <>
    {projectList.map((project) => {
      return (
        <ProjectCard 
          id={project.id}
          key={project.id}
          name={project.name}
          image={project.image}
          description={project.description}
          github={project.github}
          livelink={project.livelink} />
      )
    })
  }

    </>
  );
}

export default ProjectGallery;