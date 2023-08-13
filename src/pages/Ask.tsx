import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Formula from '../components/common/Formula'
import { postData } from '../api/formula'
import { getUnixTime } from 'date-fns'
import styles from './Ask.module.css'

export default function Ask() {
  const navigate = useNavigate()
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

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log(inputValue)

    const response = await postData({ ...inputValue, time: getUnixTime(new Date()) })
    if (response === 'success') {
      navigate('/questions')
    }
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
