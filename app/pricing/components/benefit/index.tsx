import { CircleCheck } from 'lucide-react'

const Benefit = ({label}: {label: string}) => {
  return (
    <div className="flex items-start gap-3">
      <CircleCheck className="h-5 w-5 text-gray-400 mt-0.5 flex-shrink-0" />
      <span className="text-base text-gray-600 font-medium leading-relaxed">{label}</span>
    </div>
  )
}

export default Benefit
