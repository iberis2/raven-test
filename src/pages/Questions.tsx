import { useEffect, useState } from 'react'
import Question from '../components/Questions/Question'
import { Link } from 'react-router-dom'
import { removeUserIdFromLocalStorage } from '../lib/localStorage'
import styles from './Questions.module.css'
import { getData } from '../api/formula'

type FormulasType = {
  id: number
  time: number
  latex: string
}[]

export default function Questions() {
  const [formulas, setFormulas] = useState<FormulasType>([])

  const getFormula = async () => {
    const response = await getData()
    setFormulas(response)
  }

  useEffect(() => {
    getFormula()
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
        {formulas.map(formula => (
          <Question key={formula.id} {...formula} />
        ))}
      </ul>
    </div>
  )
}
