import clsx from "clsx"

type DisplayResultProps = {
  result: number | number[] | null
  className?: string
}

const DisplayResultNumber = ({
  number,
  className,
}: {
  number: number
  className?: string
}) => (
  <div className={clsx(className, `text-slate-600 text-xl`)}>
    Your Number is {number}
  </div>
)
const DisplayResultArray = ({
  numbers,
  className,
}: {
  numbers: number[]
  className?: string
}) => (
  <div className={clsx("text-slate-600", className)}>
    <p>Your number are: </p>
    <p>{numbers.join(", ")}</p>
  </div>
)

const DisplayResult = ({ result, className }: DisplayResultProps) => {
  if (!result) {
    return <></>
  }

  if (Array.isArray(result)) {
    return <DisplayResultArray className={className} numbers={result} />
  }

  return <DisplayResultNumber className={clsx(className, "")} number={result} />
}

export default DisplayResult
