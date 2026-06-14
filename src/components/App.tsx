import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "motion/react";
import Header from "./Header";
import HeroPage from "./HeroPage";
import TechStack from "./TechStack";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import Contact from "./Contact";
import { Container } from "./shared/Container";
import { PageTransition } from "./shared/PageTransition";
import styles from "./App.module.css";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageTransition>
              <HeroPage />
              <TechStack />
              <About />
            </PageTransition>
          }
        />
        <Route
          path="/experience"
          element={
            <PageTransition>
              <Container>
                <Experience />
              </Container>
            </PageTransition>
          }
        />
        <Route
          path="/projects"
          element={
            <PageTransition>
              <Container>
                <Projects />
              </Container>
            </PageTransition>
          }
        />
        <Route
          path="/contact"
          element={
            <PageTransition>
              <Container>
                <Contact />
              </Container>
            </PageTransition>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => (
  <BrowserRouter>
    <div className={styles.app}>
      <Header />
      <AnimatedRoutes />
    </div>
  </BrowserRouter>
);

export default App;
