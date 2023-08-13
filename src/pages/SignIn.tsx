import { Link, useNavigate } from 'react-router-dom'
import Email from '../components/SignIn/Email'
import Password from '../components/SignIn/Password'
import styles from './SignIn.module.css'
import { signIn } from '../api/user'

export default function SignIn() {
  const navigate = useNavigate()

  const submitSignIn = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const email = formData.get('email')
    const password = formData.get('password')
    const response = await signIn({ email, password })

    if (response === 'success') {
      navigate('/')
    }
  }

  return (
    <form className={styles.form} onSubmit={submitSignIn}>
      <Email />
      <Password />
      <button type='submit' className={styles.signInBtn}>
        로그인
      </button>
      <Link to='/signup' className={styles.goSignUp}>
        회원가입 하러 가기
      </Link>
    </form>
  )
}
