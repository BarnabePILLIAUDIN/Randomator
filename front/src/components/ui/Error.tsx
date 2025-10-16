import clsx from "clsx"

type ErrorProps = {
  error: string
  className?: string
}

const Error = ({ error, className }: ErrorProps) => (
  <p className={clsx("font-bold text-xl text-red-500", className)}>{error}</p>
)

export default Error
