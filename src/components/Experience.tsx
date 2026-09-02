import { memo, useCallback, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, EffectCoverflow, Keyboard, Mousewheel, Navigation } from "swiper/modules";
import type { Swiper as SwiperClass } from "swiper";
import { AnimatePresence, motion } from "motion/react";
import { experience } from "../data";
import { SectionSubtitle, SectionTitle } from "./shared/SectionHeadings";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import styles from "./Experience.module.css";

/**
 * Swiper's loop needs at least `slidesPerView * 2` slides, so the six roles cap
 * slidesPerView at 3. Repeating the list until there are enough is how
 * @viktordarko/fullmode-renderer solves this too (`duplicateData` in
 * swiperConfigs.ts). Copies sit `experiences.length` apart, so the widest view
 * still never shows the same role twice at once.
 */
const LOOP_MIN_SLIDES = 10; // widest slidesPerView (5) x 2

/* Derived from static data — build once, not per render. */
const experiences = Object.values(experience);
const slides = Array.from(
  { length: Math.ceil(LOOP_MIN_SLIDES / experiences.length) },
  () => experiences,
).flat();

/*
 * Split out and memoised so selecting a slide re-renders only the details panel.
 * Swiper mutates this subtree itself in loop mode, so keeping React's reconciler
 * out of it is a precaution — not a fix for anything observed.
 */
const Carousel = memo(
  ({ onSlideChange }: { onSlideChange: (swiper: SwiperClass) => void }) => (
    <Swiper
      className={styles.card}
      modules={[EffectCoverflow, Navigation, Keyboard, Mousewheel, A11y]}
      effect="coverflow"
      centeredSlides
      slidesPerView={3}
      coverflowEffect={{
        rotate: 35,
        stretch: 0,
        depth: 0,
        scale: 1,
        slideShadows: false,
      }}
      breakpoints={{
        800: {
          slidesPerView: 5,
          coverflowEffect: {
            rotate: 35,
            stretch: 0,
            depth: 0,
            scale: 1,
            slideShadows: false,
          },
        },
      }}
      loop={true}
      longSwipes={false}
      slideToClickedSlide
      grabCursor
      navigation
      keyboard={{ enabled: true }}
      mousewheel={{ forceToAxis: true }}
      onSlideChange={onSlideChange}
    >
      {slides.map((job, i) => (
      <SwiperSlide key={`${job.id}-${i}`} className={styles.slide}>
          <h3 className={styles.slideTitle}>
            {job.company} <span className={styles.country}>in {job.country}</span>
          </h3>
          <img className={styles.image} src={job.imgSrc} alt={job.company} loading="eager" />
        </SwiperSlide>
      ))}
    </Swiper>
  ),
);
Carousel.displayName = "Carousel";

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const activeJob = experiences[activeIndex];

  const handleSlideChange = useCallback((swiper: SwiperClass) => {
    setActiveIndex(swiper.realIndex % experiences.length);
  }, []);

  return (
    <>
      <SectionTitle>Experience</SectionTitle>
      <SectionSubtitle>
        My path into engineering — and the roles along the way that shaped how I build and work with
        people. Click a card for the details.
      </SectionSubtitle>

      <Carousel onSlideChange={handleSlideChange} />

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
              <h4 className={styles.moreInfoTitle}>{activeJob.title}</h4>
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
