import { useState } from 'react'
import styles from './SearchBar.module.css'

type SearchBarProps = {
  titles: string[]
}

export default function SearchBar({ titles }: SearchBarProps) {
  const [inputValue, setInputValue] = useState('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log(inputValue)
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type='search'
        value={inputValue}
        onChange={event => setInputValue(event.target.value)}
        placeholder='검색어를 입력하세요'
        className={styles.input}
        list='question-title'
        autoComplete='off'
      />
      <datalist id='question-title' role='listbox' className={styles.datalist}>
        {titles.map((title, idx) => (
          <div key={`${title}${idx}`} className={styles.option}>
            <option value={title} />
          </div>
        ))}
      </datalist>
      <button className={styles.submitBtn}>질문 검색</button>
    </form>
  )
}
