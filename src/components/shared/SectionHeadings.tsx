import type { ReactNode } from "react";
import { cx } from "../../utils/cx";
import styles from "./SectionHeadings.module.css";

interface HeadingProps {
  children: ReactNode;
  className?: string;
}

export const SectionTitle = ({ children, className }: HeadingProps) => (
  <h2 className={cx(styles.title, className)}>{children}</h2>
);

export const SectionSubtitle = ({ children, className }: HeadingProps) => (
  <p className={cx(styles.subtitle, className)}>{children}</p>
);
