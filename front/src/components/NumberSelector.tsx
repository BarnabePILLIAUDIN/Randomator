import apiClient from "@/apiClient"
import DisplayResult from "@/components/DisplayResult"
import Button from "@/components/ui/Button"
import Error from "@/components/ui/Error"
import NumberInput from "@/components/ui/NumberInput"
import { API_ERROR_ERROR, DEFAULT_ERROR_MESSAGE, DEFAULT_MAX, DEFAULT_MIN, DEFAULT_RESULT_LENGTH, ERROR_DISPLAY_TIME_SECONDS, MILLISECONDS_IN_SECONDS } from "@/constants"
import { type ApiResponse } from "@/types/ApiResponse"
import { useState, type ChangeEvent } from "react"

const handleChangeOnInput = <T,>(fn: (newValue: T) => void, value: keyof HTMLInputElement = "value") => (e: ChangeEvent<HTMLInputElement>) => {
  fn(e.target[value] as T)
}

const NumberSelector = () => {
  const [min, setMin] = useState(DEFAULT_MIN)
  const [max, setMax] = useState(DEFAULT_MAX)
  const [result, setResult] = useState<number | number[] | null>(null)
  const [error, setError] = useState(DEFAULT_ERROR_MESSAGE)
  const [showExtendedForm, setShowExtendedForm] = useState(false)
  const [resultLength, setResultLength] = useState(DEFAULT_RESULT_LENGTH)

  const handleChangeMin = handleChangeOnInput<number>(setMin)
  const handleChangeMax = handleChangeOnInput<number>(setMax)
  const handleChangeShowExtendedForm = handleChangeOnInput<boolean>(setShowExtendedForm,"checked")
  const handleChangeResultLength = handleChangeOnInput<number>(setResultLength)

  const onClick = () => (async () => {
    try {
      if (min > max) {
        const oldMin = min 
        const oldMax = max
        setMax(oldMin)
        setMin(oldMax)
      }

      const response:ApiResponse = showExtendedForm ? await apiClient.generateManyNumbers(resultLength) :await apiClient.generateNumber(min, max)
      const {success, result} = response.data
      if (!success) {
        setError(API_ERROR_ERROR)
        setTimeout(()=>{setError(DEFAULT_ERROR_MESSAGE)},ERROR_DISPLAY_TIME_SECONDS*MILLISECONDS_IN_SECONDS)
      }
      setResult(result)
    } catch (e) {
      console.error(e)
      setError(API_ERROR_ERROR)
      setTimeout(()=>{setError(DEFAULT_ERROR_MESSAGE)},ERROR_DISPLAY_TIME_SECONDS*MILLISECONDS_IN_SECONDS)
    }
  })()
  
  return (
    <>
    <div className="py-5 mx-16 text-slate-600 text-lg">
      <h2 className="font-semibold">I want random number between</h2>
      <div className="flex gap-3 my-3 text-center">
          <NumberInput onChange={handleChangeMin} value={min} />
        <p>and</p>
          <NumberInput onChange={handleChangeMax} value={max} />
        </div>
        <div className="flex items-center gap-3">
          <p className="text-slate-600 font-semibold text-lg">I want multiples number</p>
          <input type="checkbox" className="bg-slate-200" onChange={handleChangeShowExtendedForm}/>
          {
            showExtendedForm && <NumberInput onChange={handleChangeResultLength} value={ resultLength } /> 
          }
        </div>
      <Button text="Generate" className="mt-5 max-w-28" onClick={onClick} />
      {
        result && <DisplayResult className="mt-6" result={result}/>
      }
      {
        error && <Error error={error}/>
      }
      </div>
    </>
  )
} 

export default NumberSelector
