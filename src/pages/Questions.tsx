import { useEffect, useState } from 'react'
import Question from '../components/Questions/Question'
import { getData } from '../api/formula'
import Logout from '../components/Questions/Logout'
import AddFormula from '../components/Questions/AddFormula'
import styles from './Questions.module.css'

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

  return (
    <div className={styles.questions}>
      <AddFormula />
      <ul className={styles.ul}>
        {formulas.map(formula => (
          <Question key={formula.id} {...formula} />
        ))}
      </ul>
      <Logout className={styles.logoutBtn} />
    </div>
  )
}
