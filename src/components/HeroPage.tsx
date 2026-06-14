import { motion, type Variants } from "motion/react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { FiDownload } from "react-icons/fi";
import { contact, hero } from "../data";
import { Container } from "./shared/Container";
import styles from "./HeroPage.module.css";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const HeroPage = () => (
  <section className={styles.hero}>
    <Container>
      <motion.div
        className={styles.inner}
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.p className={styles.eyebrow} variants={item}>
          {hero.eyebrow}
        </motion.p>
        <motion.h1 className={styles.name} variants={item}>
          {hero.name}
        </motion.h1>
        <motion.p className={styles.role} variants={item}>
          {hero.role}
        </motion.p>
        <motion.p className={styles.tagline} variants={item}>
          {hero.tagline}
        </motion.p>
        <motion.div className={styles.actions} variants={item}>
          <a className={styles.cta} href={hero.resumeUrl} download>
            <FiDownload aria-hidden />
            Download CV
          </a>
          <div className={styles.socials}>
            <a
              className={styles.social}
              href={contact.github.contactInfo}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub aria-hidden />
            </a>
            <a
              className={styles.social}
              href={contact.linkedin.contactInfo}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn aria-hidden />
            </a>
          </div>
        </motion.div>
      </motion.div>
    </Container>
  </section>
);

export default HeroPage;
