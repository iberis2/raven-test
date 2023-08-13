import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Title from '../components/Questions/Title'
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
          <Link to={`/questions/${formula.id}`} className={styles.link} key={formula.id}>
            <Title {...formula} />
          </Link>
        ))}
      </ul>
      <Logout />
    </div>
  )
}
