import { removeUserIdFromLocalStorage } from '../../lib/localStorage'
import styles from './Logout.module.css'

type LogoutProps = {
  className?: string
}

export default function Logout({ className = '' }: LogoutProps) {
  const handleLogOut = () => {
    removeUserIdFromLocalStorage()
    location.reload()
  }

  return (
    <button type='button' onClick={handleLogOut} className={`${styles.logOut} ${className}`}>
      로그아웃
    </button>
  )
}
