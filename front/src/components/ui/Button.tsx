import clsx from "clsx"

type ButtonProps  = {
  text: string
  className?: string
}

const Button = ({ text, className }: ButtonProps) => <p className={clsx("border-2 border-slate-600 hover:bg-slate-300", className)}>{text }</p>

export default Button