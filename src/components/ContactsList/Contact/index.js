import styles from './index.module.css'
import close from '../../../static/icons/close.svg'

const Contact = (props) => {
  const {id, tel, age, name, onRemoveContact} = props

  return (
    <li className={styles.contact}>
      <div className={styles['contact__text']}>
        {name.charAt(0).toUpperCase()}
      </div>
      <div className={styles['contact__wrapper']}>
        <div className='grid-row justify-content-between'>
          <span className={styles['contact__name']}>
            {name}
          </span>

          <button
            className={styles['contact__close']}
            onClick={() => onRemoveContact(id)}
          >
            <img
              src={close}
              alt=''
            />
          </button>
        </div>

        <div className='grid-row justify-content-between'>
          <a href={tel} className={styles['contact__tel']}>
            {tel}
          </a>

          <span className={styles['contact__age']}>{age}</span>
        </div>
      </div>
    </li>
  )
}

export default Contact