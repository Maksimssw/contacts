import styles from  './index.module.css'
import {useState} from "react";
import ModalError from "./ModalError";

const ContactsForm = (props) => {
  const {onGetContact} = props

  const [data, setData] = useState({
    name: '',
    age: '',
    tel: ''
  })
  const [error, setError] = useState({
    boolean: false,
    text: ''
  })

  const getErrorHandler = (error) => {
    setError({
      boolean: false,
      text: ''
    })
  }

  const changeHandler = (event) => {
    const name = event.target.name

    setData((state) => {
      return {
        ...state,
        [name]: event.target.value,
        id: Math.random().toString()
      }
    })
  }

  const addContactHandler = (event) => {
    event.preventDefault()

    if (data.name === '' || !isNaN(data.name)) {
      setError({
        boolean: true,
        text: 'Incorrect name'
      })
      return
    } else if (data.age <= 0 || data.age > 130 || data.age === '') {
      setError({
        boolean: true,
        text: 'Incorrect age'
      })
      return
    } else if (isNaN(data.tel) || data.tel === '') {
      setError({
        boolean: true,
        text: 'Incorrect phone number'
      })
      return
    }

    onGetContact(data)
    setData({
      name: '',
      age: '',
      tel: ''
    })
  }

  return (
    <>
      <ModalError
        error={error}
        onGetError={getErrorHandler}
      />
      <aside className={styles.form}>
        <h1 className={styles['form__headline']}>
          Contacts
          <i>us</i>
        </h1>

        <form
          className={styles['form__wrapper']}
          onSubmit={addContactHandler}
        >
          <input
            type="name"
            name='name'
            placeholder='Name'
            value={data.name}
            onChange={changeHandler}
          />
          <input
            type="number"
            name='age'
            placeholder='Age'
            value={data.age}
            onChange={changeHandler}
          />
          <input
            type="tel"
            name='tel'
            placeholder='Telephone'
            value={data.tel}
            onChange={changeHandler}
          />

          <button className='button'>Submit</button>
        </form>
      </aside>
    </>
  )
}

export default ContactsForm