import clsx from "clsx"

type ButtonProps  = {
  text: string
  onClick?: ()=>void
  className?: string
}

const Button = ({ text, onClick, className }: ButtonProps) => (
  <button className={clsx("border-2 py-2 px-4 border-slate-600 rounded-md hover:bg-slate-300", className)} onClick={onClick}>
    {text}
  </button>
)

export default Button