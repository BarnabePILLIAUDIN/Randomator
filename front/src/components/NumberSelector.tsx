import apiClient from "@/apiClient"
import DisplayResult from "@/components/DisplayResult"
import Button from "@/components/ui/Button"
import Error from "@/components/ui/Error"
import NumberInput from "@/components/ui/NumberInput"
import { API_ERROR_ERROR, DEFAULT_ERROR_MESSAGE, DEFAULT_MAX, DEFAULT_MIN, ERROR_DISPLAY_TIME_SECONDS, MILLISECONDS_IN_SECONDS } from "@/constants"
import { type ApiResponse } from "@/types/ApiResponse"
import { useState, type ChangeEvent } from "react"

const NumberSelector = () => {
  const [min, setMin] = useState(DEFAULT_MIN)
  const [max, setMax] = useState(DEFAULT_MAX)
  const [result, setResult] = useState<number | number []| null>(null)
  const [error, setError] = useState(DEFAULT_ERROR_MESSAGE)

  const handleChangeMin = ({target: { value: newMin } }: ChangeEvent<HTMLInputElement>) => {
    setMin(Number.parseFloat(newMin))
  }

  const handleChangeMax = ({target:{value:newMax}}:ChangeEvent<HTMLInputElement>) => {
    setMax(Number.parseInt(newMax))
  }

  const onClick = () => (async () => {
    try {
      if (min > max) {
        const oldMin = min 
        const oldMax = max
        setMax(oldMin)
        setMin(oldMax)
      }
      const response:ApiResponse = await apiClient.generateNumber(min, max)
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
          <NumberInput onChange={handleChangeMin} value={ min} />
        <p>and</p>
          <NumberInput onChange={handleChangeMax} value={ max} />
      </div>
      <Button text="Générer" className="max-w-24 text-center" onClick={onClick} />
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
