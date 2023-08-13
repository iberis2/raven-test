import { useParams } from 'react-router-dom'
import Formula from '../components/common/Formula'
import Time from '../components/common/Time'
import { useCallback, useEffect, useState } from 'react'
import { getData } from '../api/formula'
import styles from './QuestionDetail.module.css'

type itemType = {
  id: number
  time: number
  title: string
  latex: string
  content: string
}

export default function QuestionDetail() {
  const [item, setItem] = useState<itemType>({ id: -1, title: '', time: 0, latex: '', content: '' })
  const { id } = useParams()

  const loadData = useCallback(async () => {
    if (id) {
      const data = await getData(+id)
      setItem(data)
    }
  }, [id])

  useEffect(() => {
    loadData()
  }, [loadData])

  return (
    <div className={styles.questionDetail}>
      <h2 className={styles.title}>{item.title}</h2>
      <Time time={item.time} className={styles.date} />
      <div>
        <pre>{item.content}</pre>
        {item.latex && <Formula latex={item.latex} className={styles.formula} />}
      </div>
      <div className={styles.btnBox}>
        <button type='button' className={styles.patchBtn}>
          수정하기
        </button>
        <button type='button' className={styles.deleteBtn}>
          삭제하기
        </button>
      </div>
    </div>
  )
}
