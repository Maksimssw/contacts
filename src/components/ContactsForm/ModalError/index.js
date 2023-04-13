import styles from './index.module.css'
import close from '../../../static/icons/close.svg'

const ModalError = (props) => {
  const {error, onGetError} = props

  return (
    <div
      className={`
      ${styles.modal} ${!error.boolean && 'disabled'}
    `}
    >
      <div className={styles['modal__wrapper']}>
        <button
          className={styles['modal__close']}
          onClick={onGetError}
        >
          <img
            src={close}
            alt=''
          />
        </button>
        <span>{error.text}</span>
      </div>
    </div>
  )
}

export default ModalError