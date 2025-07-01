import { Check } from 'lucide-react'

const Benefit = ({label}: {label: string}) => {
  return (
    <div className="flex items-center gap-3">
      <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
      <span className="text-base md:text-lg text-black">{label}</span>
    </div>
  )
}

export default Benefit
