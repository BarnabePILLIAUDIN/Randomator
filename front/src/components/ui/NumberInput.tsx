import clsx from "clsx"

type InputProps = {
  className?: string
}

const NumberInput = ({ className }: InputProps) => <input type="number" className={clsx("border-2 border-slate-600 text-center", className) } />

export default NumberInput