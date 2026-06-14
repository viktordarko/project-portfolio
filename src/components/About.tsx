import { aboutBio, countries, spokenLanguages } from "../data";
import { Container } from "./shared/Container";
import { Reveal } from "./shared/Reveal";
import { SectionTitle } from "./shared/SectionHeadings";
import styles from "./About.module.css";

const About = () => (
  <section className={styles.section}>
    <Container>
      <SectionTitle>About</SectionTitle>
      <Reveal>
        <p className={styles.bio}>{aboutBio}</p>
        <div className={styles.groups}>
          <div>
            <h3 className={styles.groupLabel}>Languages</h3>
            <ul className={styles.chips}>
              {spokenLanguages.map((language) => (
                <li key={language.name} className={styles.chip}>
                  <span className={styles.flag}>{language.flag}</span>
                  {language.name}
                  <span className={styles.level}>{language.level}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className={styles.groupLabel}>Lived &amp; worked in</h3>
            <ul className={styles.chips}>
              {countries.map((country) => (
                <li key={country.name} className={styles.chip}>
                  <span className={styles.flag}>{country.flag}</span>
                  {country.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </Container>
  </section>
);

export default About;
