import Button from "@/components/ui/Button"
import NumberInput from "@/components/ui/NumberInput"

const NumberSelector = () => (
  <div className="py-5 mx-16 text-slate-600 text-lg">
    <h2 className="font-semibold">I want random number between</h2>
    <div className="flex gap-3 my-3 text-center">
      <NumberInput />
      <p>and</p>
      <NumberInput/>
    </div>
    <Button text="Générer" className="max-w-24 text-center "/>

  </div>
)

export default NumberSelector
