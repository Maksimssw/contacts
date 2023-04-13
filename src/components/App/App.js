import ContactsForm from "../ContactsForm";
import ContactsList from "../ContactsList";
import {useState} from "react";

function App() {
  const [contacts, setContacts] = useState([])

  const getContactHandler = (data) => {
    setContacts((state) => {
      return [...state, data]
    })
  }

  const removeContactHandler = (contact) => {
    setContacts((state) => {
      return state.filter((elem) => elem.id !== contact)
    })
  }

  return (
    <main>
      <section className='wrapper container'>
        <ContactsForm onGetContact={getContactHandler}/>
        <ContactsList
          contacts={contacts}
          onRemoveContact={removeContactHandler}
        />
      </section>
    </main>
  );
}

export default App;
