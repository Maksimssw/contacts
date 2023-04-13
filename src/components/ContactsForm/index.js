import styles from  './index.module.css'
import {useState} from "react";

const ContactsForm = () => {
  const [data, setData] = useState({
    name: '',
    age: '',
    tel: ''
  })

  return (
    <aside className={styles.form}>
      <h1 className={styles['form__headline']}>
        Contacts
        <i>us</i>
      </h1>

      <form className={styles['form__wrapper']}>
        <input
          type="name"
          name='name'
          placeholder='Name'
          value={data.name}
        />
        <input
          type="number"
          name='age'
          placeholder='Age'
          value={data.age}
        />
        <input
          type="tel"
          name='tel'
          placeholder='Telephone'
          value={data.tel}
        />

        <button className='button'>Submit</button>
      </form>
    </aside>
  )
}

export default ContactsForm