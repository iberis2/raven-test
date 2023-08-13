import Latex from 'react-latex'

type FormulaProps = {
  latex: string | undefined
  className?: string
}
export default function Formula({ latex, className = '' }: FormulaProps) {
  return (
    <div className={className}>
      <Latex>{latex}</Latex>
    </div>
  )
}
