import { useEffect, useState } from 'react'
import Title from '../components/Questions/Title'
import { getDatas } from '../api/formula'
import Logout from '../components/Questions/Logout'
import AddFormula from '../components/Questions/AddFormula'
import styles from './Questions.module.css'

type FormulasType = {
  id: number
  time: number
  title: string
  latex: string
}[]

export default function Questions() {
  const [formulas, setFormulas] = useState<FormulasType>([])

  const getFormula = async () => {
    const response = await getDatas()
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
          <Title {...formula} key={formula.id} />
        ))}
      </ul>
      <Logout />
    </div>
  )
}
