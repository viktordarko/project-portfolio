import { FaGithub } from "react-icons/fa6";
import { FiArrowUpRight } from "react-icons/fi";
import type { Project as ProjectData } from "../data";
import { techIcons } from "./shared/techIcons";
import styles from "./Project.module.css";

const Project = ({ project }: { project: ProjectData }) => {
  if (project.isPlaceholder) {
    return (
      <div className={styles.placeholder}>
        <p>{project.title}</p>
      </div>
    );
  }

  const FrameworkIcon = project.framework && techIcons[project.framework.icon];

  return (
    <article className={styles.box}>
      <div className={styles.media}>
        <img
          className={styles.image}
          src={project.ssSource}
          alt={`Screenshot of ${project.title}`}
          width={1280}
          height={720}
          loading="lazy"
        />
        {project.framework && (
          <span className={styles.badge}>
            {FrameworkIcon && <FrameworkIcon aria-hidden />}
            {project.framework.name}
          </span>
        )}
      </div>

      <div className={styles.info}>
        <h3 className={styles.title}>
          <a href={project.url} target="_blank" rel="noreferrer">
            {project.title}
            <FiArrowUpRight className={styles.titleIcon} aria-hidden />
          </a>
        </h3>
        <p className={styles.description}>{project.description}</p>

        <div className={styles.footer}>
          <ul className={styles.rail}>
            {project.stack?.map((skill) => {
              const Icon = techIcons[skill.icon];
              return (
                <li
                  key={skill.name}
                  className={styles.railItem}
                  data-label={skill.name}
                >
                  {Icon && <Icon className={styles.railIcon} aria-hidden />}
                  <span className={Icon ? styles.srOnly : undefined}>
                    {skill.name}
                  </span>
                </li>
              );
            })}
          </ul>
          {project.repoUrl && (
            <a
              className={styles.repo}
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub aria-hidden />
              Source
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default Project;
