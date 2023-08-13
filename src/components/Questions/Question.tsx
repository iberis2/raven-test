import Time from './Time'
import Formula from './Formula'
import styles from './Question.module.css'

// [
//   {
//     "id": "1",
//     "time": 1690677703,
//     "latex": "$f(x)=\\sin \\left(x+\\frac{\\pi}{2}\\right)-\\cos ^{2}(x+\\pi)$"
//   }
// ]

type QuestionProps = {
  time: number
  latex: string
}

export default function Question({ time, latex }: QuestionProps) {
  return (
    <li className={styles.li}>
      <Time time={time} className={styles.date} />
      <Formula latex={latex} />
    </li>
  )
}
