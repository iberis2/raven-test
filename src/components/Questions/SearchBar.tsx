import { useState } from 'react'
import styles from './SearchBar.module.css'

export default function SearchBar() {
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
        placeholder='검색어를 입력하세요'
        className={styles.input}
      />
      <button className={styles.submitBtn}>질문 검색</button>
    </form>
  )
}
