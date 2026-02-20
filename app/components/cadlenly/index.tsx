import { Clock } from "lucide-react"
import { CADLENLY_URL } from "@/app/constants"

const Cadlenly = () => {
  return (
    <div className="xl:col-span-5 w-full">
      <div className="relative mx-auto xl:mx-0 w-full max-w-[546px]" style={{ 
        height: '724px',
        opacity: 1,
      }}>
        {/* Shadow/Offset Effect */}
        <div className="absolute top-2 left-2 w-full h-full bg-[#FF7A59] rounded-[24px]"></div>

        {/* Main Widget */}
        <div className="relative h-full bg-white border-[0.5px] border-black rounded-[24px] overflow-hidden shadow-sm">
          <div className="w-full h-full">
            <iframe
              src={CADLENLY_URL}
              className="w-full h-full"
              title="Schedule a meeting with n8n developers"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cadlenly
