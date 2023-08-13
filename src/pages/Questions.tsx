import { useEffect } from 'react'
import Question from '../components/Questions/Question'
import { Link } from 'react-router-dom'
import { removeUserIdFromLocalStorage } from '../lib/localStorage'
import styles from './Questions.module.css'

export default function Questions() {
  useEffect(() => {
    // GET questions
  }, [])

  const handleLogOut = () => {
    removeUserIdFromLocalStorage()
    location.reload()
  }

  return (
    <div className={styles.questions}>
      <div className={styles.btnBox}>
        <Link to='/ask' className={styles.goAsk}>
          질문 등록
        </Link>
        <button type='button' onClick={handleLogOut} className={styles.logOut}>
          로그아웃
        </button>
      </div>
      <Question />
    </div>
  )
}
