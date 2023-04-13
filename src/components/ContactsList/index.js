import styles from  './index.module.css'
import Search from "./Search";
import Contact from "./Contact";

const ContactsList = (props) => {
  const {contacts, onRemoveContact} = props

  const createContacts = contacts.map((contact) => {
    return (
      <Contact
        onRemoveContact={onRemoveContact}
        key={contact.id}
        id={contact.id}
        name={contact.name.trim()}
        age={contact.age}
        tel={contact.tel}
      />
    )
  })

  return (
    <aside className={styles.contacts}>
      <Search />
      <ul className={styles['contacts__list']}>
        {createContacts}
      </ul>
    </aside>
  )
}

export default ContactsList