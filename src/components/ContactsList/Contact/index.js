import styles from './index.module.css'
import close from '../../../static/icons/close.svg'

const Contact = () => {
  return (
    <li className={styles.contact}>
      <div className={styles['contact__text']}>
        G
      </div>
      <div className={styles['contact__wrapper']}>
        <div className='grid-row justify-content-between'>
          <span className={styles['contact__name']}>
            Gursky Maxim Mikhailovich
          </span>

          <button className={styles['contact__close']}>
            <img
              src={close}
              alt=''
            />
          </button>
        </div>

        <div className='grid-row justify-content-between'>
          <a href="+79531712734" className={styles['contact__tel']}>
            +79531712734
          </a>

          <span className={styles['contact__age']}>18</span>
        </div>
      </div>
    </li>
  )
}

export default Contact