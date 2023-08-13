import Latex from 'react-latex'

type FormulaProps = {
  latex: string | undefined
}
export default function Formula({ latex }: FormulaProps) {
  return (
    <div>
      <Latex>{latex}</Latex>
    </div>
  )
}
