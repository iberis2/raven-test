import { format } from 'date-fns'
import ko from 'date-fns/locale/ko'
import Icon from '../common/Icon'
import styles from './Time.module.css'

type TimeProps = {
  time: number
  className?: string
}

export default function Time({ time, className = '' }: TimeProps) {
  return (
    <div className={`${styles.time} ${className}`}>
      <Icon name='calendar' size={14} />
      {format(new Date(time * 1000), 'yyyy. MM. dd. a h 시 mm 분', { locale: ko })}
    </div>
  )
}
