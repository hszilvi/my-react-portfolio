import ProjectCard from "../ProjectCard";
import projectList from '../../projectList.json'

const ProjectGallery = () => {
  return (
    <>          
      <div className='d-flex flex-column flex-md-row flex-lg-row flex-wrap mt-3'>
        <div className='row mx-auto justify-content-center'>
          {projectList.map((project) => {
            return (
              <ProjectCard 
                id={project.id}
                key={project.id}
                name={project.name}
                image={project.image}
                build={project.build}
                github={project.github}
                livelink={project.livelink} />
              )
            })
          }
            </div>
          </div>
    </>
  );
}

export default ProjectGallery;