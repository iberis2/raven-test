import { useEffect, useState } from 'react'
import Title from '../components/Questions/Title'
import { getDatas } from '../api/formula'
import Logout from '../components/Questions/Logout'
import SearchBar from '../components/Questions/SearchBar'
import { Link } from 'react-router-dom'
import styles from './Questions.module.css'

type FormulasType = {
  id: number
  time: number
  title: string
  latex: string
  content: string
}[]

export default function Questions() {
  const [formulas, setFormulas] = useState<FormulasType>([])
  const [titles, setTitles] = useState<string[]>([])

  const getFormula = async () => {
    const response: FormulasType = await getDatas()
    setFormulas(response)
    setTitles(response.map(data => data.title))
  }

  useEffect(() => {
    getFormula()
  }, [])

  return (
    <div className={styles.questions}>
      <SearchBar titles={titles} />
      <ul className={styles.ul}>
        {formulas.map(formula => (
          <Title {...formula} key={formula.id} />
        ))}
      </ul>
      <Link to='/ask' className={styles.goToAskBtn}>
        질문 하러 가기
      </Link>
      <Logout />
    </div>
  )
}
