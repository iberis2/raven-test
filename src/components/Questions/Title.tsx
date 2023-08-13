import Formula from '../common/Formula'
import Time from '../common/Time'
import styles from './Title.module.css'

type QuestionProps = {
  time: number
  latex: string
}

export default function Title({ time, latex }: QuestionProps) {
  return (
    <li className={styles.li}>
      <Time time={time} className={styles.date} />
      <Formula latex={latex} />
    </li>
  )
}
