import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { cx } from "../utils/cx";
import styles from "./Header.module.css";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/experience", label: "Experience" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <NavLink
        to="/"
        className={styles.brand}
        onClick={() => setIsMenuOpen(false)}
      >
        Victor Vargas
      </NavLink>

      <nav className={styles.nav}>
        {NAV_LINKS.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            end={to === "/"}
            className={({ isActive }) => cx(styles.link, isActive && styles.active)}
          >
            {label}
          </NavLink>
        ))}
      </nav>

      <button
        type="button"
        className={styles.hamburger}
        onClick={() => setIsMenuOpen((open) => !open)}
        aria-label="Toggle navigation menu"
        aria-expanded={isMenuOpen}
      >
        {isMenuOpen ? <FiX aria-hidden /> : <FiMenu aria-hidden />}
      </button>

      {isMenuOpen && (
        <div className={styles.menu}>
          {NAV_LINKS.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) => cx(styles.menuLink, isActive && styles.active)}
            >
              {label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
