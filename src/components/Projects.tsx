import { projects } from "../data";
import Project from "./Project";
import { SectionSubtitle, SectionTitle } from "./shared/SectionHeadings";
import styles from "./Projects.module.css";

const Projects = () => {
  const projectsArray = Object.values(projects);

  return (
    <>
      <SectionTitle>Selected Work</SectionTitle>
      <SectionSubtitle>
        Things I've designed, built and shipped end to end — production sites
        running on my own domains, alongside the arcade game I wrote when I was starting out.
      </SectionSubtitle>
      <SectionSubtitle>
        Click a card to open the live site. Source is linked where the repo is
        public.
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
