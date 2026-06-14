import type { ElementType, ReactNode } from "react";
import { cx } from "../../utils/cx";
import styles from "./Container.module.css";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
}

/** Centers content at a max-width with consistent horizontal padding. */
export const Container = ({ children, className, as: Tag = "div" }: ContainerProps) => (
  <Tag className={cx(styles.container, className)}>{children}</Tag>
);
