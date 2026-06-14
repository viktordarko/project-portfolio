import { contact } from "../data";
import ContactItem from "./ContactItem";
import { SectionSubtitle, SectionTitle } from "./shared/SectionHeadings";
import styles from "./Contact.module.css";

const Contact = () => {
  const contactArray = Object.values(contact);

  return (
    <section className={styles.section}>
      <SectionTitle>Get in touch</SectionTitle>
      <SectionSubtitle>
        Always happy to talk about new projects, roles, or ideas.
      </SectionSubtitle>
      <div className={styles.list}>
        {contactArray.map((item) => (
          <ContactItem item={item} key={item.id} />
        ))}
      </div>
    </section>
  );
};

export default Contact;
