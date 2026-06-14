import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Keyboard, Navigation } from "swiper/modules";
import type { Swiper as SwiperClass } from "swiper";
import { AnimatePresence, motion } from "motion/react";
import { experience } from "../data";
import { SectionSubtitle, SectionTitle } from "./shared/SectionHeadings";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./Experience.module.css";

const Experience = () => {
  const experiences = Object.values(experience);
  const [activeIndex, setActiveIndex] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const activeJob = experiences[activeIndex];

  const handleSlideChange = (swiper: SwiperClass) => {
    setActiveIndex(swiper.realIndex);
  };

  return (
    <>
      <SectionTitle>Experience</SectionTitle>
      <SectionSubtitle>
        My path into engineering — and the roles along the way that shaped how I
        build and work with people. Click a card for the details.
      </SectionSubtitle>

      <Swiper
        className={styles.card}
        modules={[Navigation, Keyboard, A11y]}
        centeredSlides
        slidesPerView="auto"
        spaceBetween={24}
        slideToClickedSlide
        grabCursor
        navigation
        keyboard={{ enabled: true }}
        onSlideChange={handleSlideChange}
      >
        {experiences.map((job) => (
          <SwiperSlide key={job.id} className={styles.slide}>
            <h2 className={styles.slideTitle}>
              {job.company}{" "}
              <span className={styles.country}>in {job.country}</span>
            </h2>
            <img
              className={styles.image}
              src={job.imgSrc}
              alt={job.company}
              loading="lazy"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className={styles.details}>
        <button
          type="button"
          className={styles.showMore}
          onClick={() => setExpanded((open) => !open)}
          aria-expanded={expanded}
        >
          {expanded ? "Hide Info" : "Show More Info..."}
        </button>
        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              className={styles.moreInfo}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <h3 className={styles.moreInfoTitle}>{activeJob.title}</h3>
              <span className={styles.period}>{activeJob.period}</span>
              <p className={styles.moreInfoLead}>{activeJob.moreInfo}</p>
              {activeJob.highlights && (
                <ul className={styles.highlights}>
                  {activeJob.highlights.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Experience;
