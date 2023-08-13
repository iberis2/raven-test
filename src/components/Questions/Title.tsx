import { Link } from 'react-router-dom'
import Formula from '../common/Formula'
import Time from '../common/Time'
import styles from './Title.module.css'

type QuestionProps = {
  id: number
  time: number
  title: string
  latex: string
}

export default function Title({ id, time, title, latex }: QuestionProps) {
  return (
    <li>
      <Link to={`/questions/${id}`} className={styles.link}>
        <Time time={time} className={styles.date} />
        <h3 className={styles.title}>
          {title}
          <Formula latex={latex} />
        </h3>
      </Link>
      <div className={styles.line} />
    </li>
  )
}
