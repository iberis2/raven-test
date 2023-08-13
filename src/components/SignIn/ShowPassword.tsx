import Icon from '../common/Icon'
import styles from './ShowPassword.module.css'

type ShowPasswordProps = {
  show: boolean
  handleShow: () => void
}

export default function ShowPassword({ show, handleShow }: ShowPasswordProps) {
  return (
    <div className={styles.showPasswordBtn}>
      {show ? (
        <button type='button' onClick={handleShow}>
          <Icon name='eye' size={16} />
        </button>
      ) : (
        <button type='button' onClick={handleShow}>
          <Icon name='eye-close' size={16} />
        </button>
      )}
    </div>
  )
}
