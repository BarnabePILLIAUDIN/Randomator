import clsx from "clsx"
import type { ChangeEvent } from "react"

type InputProps = {
  className?: string
  value: number
  onChange?: (e:ChangeEvent<HTMLInputElement>)=> void
}

const NumberInput = ({ className, value, onChange }: InputProps) => <input type="number" className={clsx("border-2 border-slate-600 rounded-md text-center", className) } onChange={onChange} value={value}/>

export default NumberInput