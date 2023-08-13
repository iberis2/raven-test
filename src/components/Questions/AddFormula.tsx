import { useState } from 'react'
import styles from './AddFormula.module.css'

export default function AddFormula() {
  const [inputValue, setInputValue] = useState('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log(inputValue)
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type='text'
        value={inputValue}
        onChange={event => setInputValue(event.target.value)}
        className={styles.input}
      />
      <button className={styles.submitBtn}>공식 등록</button>
    </form>
  )
}
