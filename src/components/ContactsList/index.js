import styles from  './index.module.css'
import Search from "./Search";
import Contact from "./Contact";
import {useState} from "react";

const ContactsList = (props) => {
  const {contacts, onRemoveContact} = props
  const [search, setSearch] = useState('')

  const getSearchHandler = (text) => setSearch(text)

  const createContacts = contacts
    .filter((contact) => {
      if (search === '') return contact
      if (contact.name === search) return contact
    })
    .map((contact) => {
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
      <Search
        search={search}
        onGetSearch={getSearchHandler}
      />
      <ul className={styles['contacts__list']}>
        {createContacts}
      </ul>
    </aside>
  )
}

export default ContactsList