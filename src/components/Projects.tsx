import { projects } from "../data";
import Project from "./Project";
import { SectionSubtitle, SectionTitle } from "./shared/SectionHeadings";
import styles from "./Projects.module.css";

const Projects = () => {
  const projectsArray = Object.values(projects);

  return (
    <>
      <SectionTitle>Welcome!</SectionTitle>
      <SectionSubtitle>
        These are some of the projects I've worked on during my full-stack
        bootcamp at Concordia University.
      </SectionSubtitle>
      <SectionSubtitle>
        You can click on the project image to see the project in action or you
        can find my Github account on the Contact page.
      </SectionSubtitle>
      <div className={styles.grid}>
        {projectsArray.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </>
  );
};

export default Projects;
