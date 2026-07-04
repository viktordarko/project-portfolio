import type { IconType } from "react-icons";
import { FaGithub, FaMasksTheater } from "react-icons/fa6";
import {
  SiAstro,
  SiAuth0,
  SiCloudinary,
  SiCss,
  SiExpress,
  SiGit,
  SiGithubactions,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNetlify,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiRender,
  SiSupabase,
  SiTypescript,
  SiVercel,
  SiVimeo,
  SiVite,
  SiVitest,
} from "react-icons/si";
import { techStack } from "../data";
import { Container } from "./shared/Container";
import { Reveal } from "./shared/Reveal";
import { SectionSubtitle, SectionTitle } from "./shared/SectionHeadings";
import styles from "./TechStack.module.css";

const techIcons: Record<string, IconType> = {
  react: SiReact,
  nextjs: SiNextdotjs,
  astro: SiAstro,
  typescript: SiTypescript,
  javascript: SiJavascript,
  vite: SiVite,
  html5: SiHtml5,
  css3: SiCss,
  nodejs: SiNodedotjs,
  express: SiExpress,
  mongodb: SiMongodb,
  supabase: SiSupabase,
  auth0: SiAuth0,
  cloudinary: SiCloudinary,
  vimeo: SiVimeo,
  vitest: SiVitest,
  playwright: FaMasksTheater,
  git: SiGit,
  github: FaGithub,
  githubactions: SiGithubactions,
  vercel: SiVercel,
  netlify: SiNetlify,
  render: SiRender,
};

const TechStack = () => (
  <section className={styles.section}>
    <Container>
      <SectionTitle>Tech Stack</SectionTitle>
      <SectionSubtitle>The tools I reach for to build and ship.</SectionSubtitle>
      <div className={styles.groups}>
        {techStack.map((category) => (
          <Reveal key={category.label} className={styles.groups}>
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
