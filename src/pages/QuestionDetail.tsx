import { useParams } from 'react-router-dom'
import Formula from '../components/common/Formula'
import Time from '../components/common/Time'
import { useEffect, useState } from 'react'
import { getData } from '../api/formula'

export default function QuestionDetail() {
  const [item, setItem] = useState({ title: '', time: 0, latex: '' })
  const { id } = useParams()

  const loadData = async () => {
    if (id) {
      const data = await getData(+id)
      setItem(data)
    }
  }

  useEffect(() => {
    loadData()
  }, [])
  return (
    <div>
      <Time time={item.time} />
      <h2>{item.title}</h2>
      <div></div>
      <p>
        공식
        <Formula latex={item.latex} />
      </p>
    </div>
  )
}
