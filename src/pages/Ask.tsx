import { useState } from 'react'
import styles from './Ask.module.css'
import Formula from '../components/common/Formula'

export default function Ask() {
  const [inputValue, setInputValue] = useState({
    title: '',
    content: '',
    latex: '',
  })

  const handleChange = (
    type: 'title' | 'content' | 'latex',
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInputValue(pre => ({ ...pre, [type]: event.target.value }))
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log(inputValue)
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type='text'
        value={inputValue.title}
        onChange={event => handleChange('title', event)}
        placeholder='제목을 입력하세요'
        className={styles.input}
        required
      />
      <div className={styles.latexPreviewBox}>
        <input
          type='text'
          value={inputValue.latex}
          onChange={event => handleChange('latex', event)}
          placeholder='공식을 latex 문법에 따라 입력하세요'
          className={styles.input}
        />
        <Formula latex={inputValue.latex} className={styles.latexPreview} />
      </div>
      <textarea
        value={inputValue.content}
        onChange={event => handleChange('content', event)}
        className={styles.textarea}
      />
      <button type='submit' className={styles.submitBtn}>
        질문 등록
      </button>
    </form>
  )
}
