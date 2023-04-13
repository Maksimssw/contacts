import styles from  './index.module.css'
import Search from "./Search";
import Contact from "./Contact";

const ContactsList = () => {
  return (
    <aside className={styles.contacts}>
      <Search />
      <ul className={styles['contacts__list']}>
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
      </ul>
    </aside>
  )
}

export default ContactsList