import { Link } from 'react-router-dom'
import Email from '../components/SignIn/Email'
import Password from '../components/SignIn/Password'
import styles from './SignIn.module.css'

export default function SignIn() {
  return (
    <form className={styles.form}>
      <Email />
      <Password />
      <div className={styles.btnBox}>
        <button type='submit' className={styles.signInBtn}>
          로그인
        </button>
        <Link to='/signup'>회원가입</Link>
      </div>
    </form>
  )
}
