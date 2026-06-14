import type { Project as ProjectData } from "../data";
import styles from "./Project.module.css";

const Project = ({ project }: { project: ProjectData }) => {
  if (project.isPlaceholder) {
    return (
      <div className={styles.placeholder}>
        <p>{project.title}</p>
      </div>
    );
  }

  return (
    <a
      className={styles.box}
      href={project.url}
      target="_blank"
      rel="noreferrer"
    >
      <img
        className={styles.image}
        src={project.ssSource}
        alt={project.title}
        loading="lazy"
      />
      <div className={styles.info}>
        <p className={styles.title}>{project.title}</p>
        <p className={styles.subtitle}>Languages used: {project.language}</p>
      </div>
    </a>
  );
};

export default Project;
