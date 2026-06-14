import type { IconType } from "react-icons";
import { FaGithub, FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import type { Contact } from "../data";
import styles from "./ContactItem.module.css";

const icons: Record<string, IconType> = {
  email: MdEmail,
  github: FaGithub,
  linkedin: FaLinkedinIn,
  instagram: FaInstagram,
  twitter: FaXTwitter,
};

const ContactItem = ({ item }: { item: Contact }) => {
  const Icon = icons[item.id];

  const handleClick = () => {
    if (item.id === "email") {
      window.location.href = `mailto:${item.contactInfo}`;
    } else {
      window.open(item.contactInfo, "_blank");
    }
  };

  return (
    <button
      type="button"
      className={styles.card}
      onClick={handleClick}
      aria-label={item.name}
    >
      {Icon && <Icon className={styles.icon} aria-hidden />}
      <span className={styles.label}>{item.name}</span>
    </button>
  );
};

export default ContactItem;
