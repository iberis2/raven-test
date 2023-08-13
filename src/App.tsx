import Latex from 'react-latex'

export default function App() {
  const fraction = `$$\\frac{1}{2}$$`

  return (
    <div>
      <Latex>{fraction}</Latex>
    </div>
  )
}
