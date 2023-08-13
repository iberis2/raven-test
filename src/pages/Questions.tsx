import { useEffect, useState } from 'react'
import Question from '../components/Questions/Question'
import { Link } from 'react-router-dom'
import { removeUserIdFromLocalStorage } from '../lib/localStorage'
import styles from './Questions.module.css'

const initial = [
  {
    id: 1,
    email: 'test@test.com',
    time: 1690677703,
    latex: '$f(x)=\\sin \\left(x+\\frac{\\pi}{2}\\right)-\\cos ^{2}(x+\\pi)$',
  },
  {
    id: 2,
    email: 'test@test.com',
    time: 1690677703,
    latex: '$f(x)=\\sin \\left(x+\\frac{\\pi}{2}\\right)-\\cos ^{2}(x+\\pi)$',
  },
]

export default function Questions() {
  const [questions, setQuestions] = useState(initial)
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
          공식 등록
        </Link>
        <button type='button' onClick={handleLogOut} className={styles.logOut}>
          로그아웃
        </button>
      </div>
      <ul className={styles.ul}>
        {questions.map(question => (
          <Question key={question.id} {...question} />
        ))}
      </ul>
    </div>
  )
}
