import { techStack } from "../data";
import { Container } from "./shared/Container";
import { Reveal } from "./shared/Reveal";
import { SectionSubtitle, SectionTitle } from "./shared/SectionHeadings";
import { techIcons } from "./shared/techIcons";
import styles from "./TechStack.module.css";

const TechStack = () => (
  <section className={styles.section}>
    <Container>
      <SectionTitle>Tech Stack</SectionTitle>
      <SectionSubtitle>The tools I reach for to build and ship.</SectionSubtitle>
      <div className={styles.groups}>
        {techStack.map((category) => (
          <Reveal key={category.label}>
            <h3 className={styles.groupLabel}>{category.label}</h3>
            <ul className={styles.chips}>
              {category.skills.map((skill) => {
                const Icon = techIcons[skill.icon];
                return (
                  <li key={skill.name} className={styles.chip}>
                    {Icon && <Icon className={styles.chipIcon} aria-hidden />}
                    <span>{skill.name}</span>
                  </li>
                );
              })}
            </ul>
          </Reveal>
        ))}
      </div>
    </Container>
  </section>
);

export default TechStack;
